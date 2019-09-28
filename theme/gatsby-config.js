const withDefaults = require(`./src/util/default-options`)

module.exports = themeOptions => {
  
  const {trackingId, projectsPath, projectsPerPage, imagesPath} = withDefaults(themeOptions)
  
  return {
    siteMetadata: {
      title: `Portfolio Title`,
      description: `Portfolio Description`,
      author: `Author Name`,
      twitterId: `TwitterID`,
      siteUrl: `https://kamranali.in`,
      keywords: [`Keyword 1`, `Keyword 2`],
      email: `admin@domain.info`,
      social: [
        'https://www.facebook.com/pagelink/',
        'https://twitter.com/handle'
      ], // Array of Social links to be passed in Google structured data
      contactSupport: 'Support URL to be used in Google structured data',
      bingId: 'bingID', // This ID is used as metaTag to verify the ownership of site. If you do NOT have one leave it as '' and we will not include it in meta tag
      menuLinks: [{name: 'Tags', link: '/tags/'}], // Array of top Navigation bar items. Make sure you have pages corresponding to the value of `link`
      options : {
        paginate: projectsPerPage
      }
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-sitemap`,
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: trackingId,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: `${__dirname}/src/pages`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `posts`,
          path: projectsPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: imagesPath,
        },
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: `${__dirname}/src/pages`,
        },
      },
      `gatsby-transformer-sharp`, // Plugins For Image Processing
      `gatsby-plugin-sharp`, // Image Transformations; Sharp should be before we transform our mdx file
      {
        resolve: 'gatsby-plugin-mdx', // Requires to format mdx
        options: {
          extensions: [`.mdx`, `.md`],
          remarkPlugins: [require("remark-attr")],
          defaultLayouts: {
            //[projectsPath]: require.resolve("./src/templates/single-post.js")
          },
          plugins: [`gatsby-remark-images`], // <- Hack to make this plugin work properly
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                linkImagesToOriginal: false
              }
            },
            {
              resolve: `gatsby-remark-prismjs`,
              options: {
                aliases:{sh: "bash", js:"javascript"}
              },
            },
            {
              resolve: `gatsby-remark-katex`,
              options: {
                strict: `ignore`
              }
            }
          ]
        }
      },
      {
        resolve: 'gatsby-plugin-material-ui',
        options: {
          // stylesProvider: {
          //   injectFirst: true,
          // },
        },
      },
    ],
  }
}
