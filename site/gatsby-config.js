module.exports = {
  siteMetadata: {
    title: `Kamran Ali`,
    description: `Kamran Ali's Tech Blog`,
    author: `Kamran Ali`,
    twitterId: `@aTechGuide`,
    linkedInId: `kamranalinitb`,
    siteUrl: `https://kamranali.netlify.com`,
    genre: 'Technical Tutorials',
    keywords: [`Technology Blog`],
    email: `admin@atech.guide`,
    social: [
      'https://www.facebook.com/aTechGuide/'
    ],
    contactSupport: 'https://www.facebook.com/aTechGuide/',
    bingId: '',
    menuLinks: [{name: 'Projects', link: '/page/1'}, {name: 'Resume', link: 'https://atechguide.github.io/vitae/'}, {name: 'Blog', link: 'http://atech.guide'}],
    footerLinks: [{name: 'About', link: '/detailed-tech-tutorials/'}],
    displayFooterMessage: true,
    comments: 'true' // Enable disable comments
  },
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
    {
      resolve: `gatsby-plugin-manifest`, //<- Creates manifest file
      options: {
        name: "ATechGuide",
        short_name: "ATechGuide",
        description: "Tech Blog",
        start_url: "/",
        background_color: "#673ab7",
        theme_color: "#673ab7",
        display: "standalone",
        icon: "images/icon.png",
      },
    },
    `gatsby-plugin-offline`, //<- Adds service worker; Add after gatsby-plugin-manifest
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            'X-Frame-Options: DENY',
            'X-XSS-Protection: 1; mode=block',
            'X-Content-Type-Options: nosniff',
            'Referrer-Policy: no-referrer-when-downgrade'
          ]
        }
      }
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        mergeScriptHashes: false,
        mergeStyleHashes: false, 
        mergeDefaultDirectives: true,
        directives: {
          "default-src": "'self' disqus.com marketingplatform.google.com/about/analytics/ c.disquscdn.com www.google-analytics.com www.google.com/analytics/",
          "script-src": "'self' 'unsafe-inline' www.google-analytics.com kamranali.disqus.com", //<- 'unsafe-inline' is unsafe and is required by Disqus
          "style-src": "'self' 'unsafe-inline' c.disquscdn.com", //<- "'unsafe-inline'" should be avoided but the plugin was broken with mergeStyleHashes
          "img-src": "'self' data: www.google-analytics.com referrer.disqus.com c.disquscdn.com"
        }
      }
    }
  ]
}
