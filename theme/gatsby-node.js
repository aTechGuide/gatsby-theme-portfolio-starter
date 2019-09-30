const slugify = require('./src/util/UtilityFunctions')
const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const _ = require('lodash')

exports.onPreBootstrap = ({ store, reporter }, options) => {
  const { program } = store.getState()
  const dirs = [
    path.join(program.directory, "projects"),
    path.join(program.directory, "images")
  ]

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`)
      mkdirp.sync(dir)
    }
  })
}

exports.createPages = async ({actions, graphql, reporter}, options) => {
  const {createPage} = actions;

  const templates = {
    tagsPage: require.resolve('./src/templates/tags-page.js'),
    tagPosts: require.resolve('./src/templates/tag-posts.js'),
    postList: require.resolve('./src/templates/post-list.js'),
  }

  const res = await graphql(`
    {
      allMdx(filter: {frontmatter: {published: {eq: true}, dataType: {eq: "project"}}}) {
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)
  
  if(res.errors) {
    reporter.panic('Error loading Mdx Files', res.errors)
    return Promise.reject(res.errors)
  }

  const posts = res.data.allMdx.edges

  // Create Tags Page
  let tags = createTagsPage(posts, createPage, templates);

  // Create Tag Posts Pages
  createPagePerTag(tags, createPage, templates);

  // Pagination
  createPaginationPages(posts, createPage, templates, options.projectsPerPage);
}

function createPaginationPages(posts, createPage, templates, projectsPerPage) {
  
  if(projectsPerPage === "undefined") {
    projectsPerPage = 2
  } else {
    projectsPerPage = parseInt(projectsPerPage)
  }
  
  const numberOfPages = Math.ceil(posts.length / projectsPerPage);
  Array.from({ length: numberOfPages }).forEach((_, index) => {
    const currentPage = index + 1;
    createPage({
      path: `/page/${currentPage}/`,
      component: templates.postList,
      context: {
        limit: projectsPerPage,
        skip: index * projectsPerPage,
        currentPage,
        numberOfPages
      }
    });
  });
}

function createPagePerTag(tags, createPage, templates) {
  tags.forEach(tag => {
    createPage({
      path: `/tag/${slugify(tag)}/`,
      component: templates.tagPosts,
      context: {
        tag
      }
    });
  });
}

function createTagsPage(posts, createPage, templates) {
  let tags = [];
  _.each(posts, edge => {
    if (_.get(edge, 'node.frontmatter.tags')) {
      tags = tags.concat(edge.node.frontmatter.tags);
    }
  });
  let tagPostCounts = {};
  tags.forEach(tag => {
    tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1;
  });
  // {code: 2, design: 6, ...}
  tags = _.uniq(tags);
  createPage({
    path: '/tags/',
    component: templates.tagsPage,
    context: {
      tags,
      tagPostCounts
    }
  });
  return tags;
}

