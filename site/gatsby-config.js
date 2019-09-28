module.exports = {
  siteMetadata: {
    title: `Kamran Ali`,
    description: `Kamran Ali's Tech Blog`,
    author: `Kamran Ali`,
    headline: `Hi, I'm Kamran Ali, SDE II @Expedia Inc.`,
    focusArea: `I'm a Full Stack Developer, Currently focussing on Big Data Technologies`,
    twitterId: `@aTechGuide`,
    linkedInId: `kamranalinitb`,
    siteUrl: `https://kamranali.netlify.com`,
    keywords: [`Technology Blog`],
    email: `admin@atech.guide`,
    social: [
      'https://www.facebook.com/aTechGuide/'
    ],
    contactSupport: 'https://www.facebook.com/aTechGuide/',
    bingId: '',
    menuLinks: [{name: 'Projects', link: '/page/1'}, {name: 'Resume', link: 'https://docs.google.com/document/d/17ANlKXIhwGBoSyMxsALduuWv6itjB1K__esdky08VcI/'}, {name: 'Blog', link: 'http://atech.guide'}],
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
          "default-src": "'self' marketingplatform.google.com/about/analytics/ www.google-analytics.com www.google.com/analytics/",
          "script-src": "'self' www.google-analytics.com",
          "style-src": "'self' 'unsafe-inline'",
          "img-src": "'self' data: www.google-analytics.com"
        }
      }
    }
  ]
}
