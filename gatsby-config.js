module.exports = {
  siteMetadata: {
    title: "PGD ŠTANGARSKE POLJANE",
    subtitle:
      "Domača stran prostovoljnega gasilskega društva Štangarske Poljane",
    author: "Maja L",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/blog`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/blog`, // for the path you can change it based on your preferred folder structure
      },
    },
    /* {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "pgd-st-poljane",
        short_name: "pgd-st-poljane",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gasilski-grb.png", // This path is relative to the root of the site.
      },
    }, */
    "gatsby-plugin-offline",
    "gatsby-theme-gallery",
    "gatsby-plugin-sass",
     
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/assets/icons`,
      },
    },
    "gatsby-plugin-netlify-cms",

    // ... other plugins
  ],
}
