module.exports = {
  siteMetadata: {
    title: 'PGD ŠTANGARSKE POLJANE',
    subtitle: 'Domača stran prostovoljnega gasilskega društva Štangarske Poljane',
    author: 'Maja L'
  },
  plugins: [
  
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 970,
            },
          },
        ],
      },
    },
      `gatsby-transformer-remark`,
{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/blog`, // for the path you can change it based on your preferred folder structure
      },
},
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
        name: `content`,
        path: `${__dirname}/content/blog`,
    
      }
      },
        'gatsby-theme-gallery',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-netlify-cms',
 
      
      // ... other plugins
      
  ],
}
