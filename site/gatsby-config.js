module.exports = {
  siteMetadata: {
    title: `Kamran Ali`,
    description: `Kamran Ali's Tech Blog`,
    author: `Kamran Ali`,
    headline: `Hi, I'm Kamran Ali, Principal Data Engineer @GoDaddy`,
    focusArea: `Aspiring to build Simple Solution to Complex Problems, I've ~10.5 years of experience. Currently focussing on Distributed Systems processing data in Batches and Streams. I have a strong background in building Microservices using Spring Boot, Java, and AWS Technologies.`,
    twitterId: `@aTechGuide`,
    linkedInId: `aTechGuide`,
    siteUrl: `https://gatsby-theme-portfolio-starter.netlify.com`,
    keywords: [`Technology Blog`],
    email: `admin@atech.guide`,
    social: [
      'https://www.facebook.com/aTechGuide/'
    ],
    contactSupport: 'https://www.facebook.com/aTechGuide/',
    bingId: '',
    menuLinks: [{name: 'Projects', link: '/page/1'}, {name: 'External', link: 'http://atech.guide'}],
  },
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-starter",
      options: {
        trackingId: "UA-12345418-1",
        projectsPath: "projects",
        imagesPath: "images",
        projectsPerPage: "12"
      },
    },
    {
      resolve: `gatsby-plugin-manifest`, //<- Creates manifest file
      options: {
        name: "Kamran Ali Portfolio",
        short_name: "portfolio",
        description: "Kamran Ali Portfolio and Projects",
        start_url: "/",
        background_color: "#455a64",
        theme_color: "#455a64",
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
          "script-src": "'self' www.google-analytics.com 'unsafe-inline'",
          "style-src": "'self' 'unsafe-inline'",
          "img-src": "'self' data: www.google-analytics.com"
        }
      }
    }
  ]
}
