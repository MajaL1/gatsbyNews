module.exports = {
  siteMetadata: {
    title: 'PGD ŠTANGARSKE POLJANE',
    subtitle: 'Domača stran prostovoljnega gasilskega društva Štangarske Poljane',
    author: 'Maja L'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
       `gatsby-plugin-netlify-cms`,
   /*  {
        new webpack.ProvidePlugin({
        "React": "react",
    })}
      ,*/
   /* {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'article',
          'user'
        ],
        loginData: {
              identifier:"Maja1",
              password:"MajaLok"
          },
        queryLimit: 100,
      },
    },*/
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/static/assets`,
          name: 'images',
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: content,
          path: ${__dirname}/content,
        },
      },
      'gatsby-transformer-remark',
      // ... other plugins
      
  ],
}