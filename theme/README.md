# Gatsby Theme Portfolio Starter
<p align="center">
  <a href="https://github.com/aTechGuide/gatsby-theme-portfolio-starter/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="gatsby-theme-portfolio-starter is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.com/package/gatsby-theme-portfolio-starter">
    <img src="https://img.shields.io/npm/v/gatsby-theme-portfolio-starter.svg" alt="Current npm package version." />
  </a>
  <a href="https://npmcharts.com/compare/gatsby-theme-portfolio-starter?minimal=true">
    <img src="https://img.shields.io/npm/dm/gatsby-theme-portfolio-starter.svg?color=blue" alt="Downloads per month on npm." />
  </a>
  <a href="https://npmcharts.com/compare/gatsby-theme-portfolio-starter?minimal=true">
    <img src="https://img.shields.io/npm/dt/gatsby-theme-portfolio-starter.svg?color=blue" alt="Total downloads on npm." />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <a href="https://twitter.com/intent/follow?screen_name=atechguide">
      <img src="https://img.shields.io/twitter/follow/atechguide.svg?label=Follow%20@atechguide" alt="Follow @atechguide" />
    </a>
</p>

A Gatsby theme for creating Superfast, SEO optimized Portfolio powered by `Material UI` and `MDX`
- [Live demo](https://gatsby-theme-portfolio-starter.netlify.com/)
- [My Portfolio Site](https://kamranali.in/)

## Performance


## ✨Features

It provides following functionality out of box

- Fully optimized for Lighthouse audit
- Responsive
- Pagination for projects
- Tags for browsing the projects
- Google Structured Data
- Google Analytics
- Sitemap

## Usage
### Install
Manually add to you site

`npm install --save gatsby-theme-portfolio-starter`

### Theme options

| Key              | Default value    | Description                                                                                               |
| ---------------- | ---------------- | --------------------------------------------------------------------------------------------------------- |
| `trackingId`     | `UA-27634418-4`  | Google Analytics Tracking ID                                                                               |
| `projectsPath`   | `projects`       | Location of Projects                                                                                    |
| `imagesPath`     | `images`         | Location of cover image and icon                                                                                        |
| `projectsPerPage`| `12`             | Number of Projects to be displayed on a single page |

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
        {
      resolve: "gatsby-theme-portfolio-starter",
      options: {
        trackingId: "UA-27634418-4",
        projectsPath: "projects",
        imagesPath: "images",
        projectsPerPage: "12"
      },
    },
  ],
}
```

### Additional configuration
In addition to the theme options, there are a handful of items you can customize via the siteMetadata object in your site's gatsby-config.js
```
// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `My Portfolio Title`,
    description: `My Portfolio Description`,
    author: `Author Name`,
    headline: `My Introduction`, // One liner Introduction
    focusArea: `Tech focus Area`, // Technologies currently working on / Knowledge of Tools, expertise etc
    twitterId: `@twitterHandle`,
    linkedInId: `linkedInID`,
    siteUrl: `site domain name`,
    keywords: [`Technology Blog`], // Used for SEO and Google Structured Data
    email: `admin@blog.com`, // Contact email Used for Google Structured Data
    social: [
      'https://www.facebook.com/aTechGuide/'  // Social link used in site schema for Google Structured Data
    ],
    contactSupport: 'https://www.site.com/support/', // Contact link used in site schema for Google Structured Data
    bingId: '', // Support for Bing 
    menuLinks: [{name: 'Projects', link: '/page/1'}], // Adding Menu bar links
  },
}
```

## 🚀Getting Started

- Create `projects` directory and add projects into it as Markdown files
- Create `images` directory and add images into it to be used by queries directly
  - Add icon under `images` by the name `icon.png`
  - Add cover image under `images` by the name `cover.svg` You may download your SVG from [undraw.co](https://undraw.co/) as per theme color