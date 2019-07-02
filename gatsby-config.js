module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Agnes Pinhanelli',
        short_name: 'Agnes',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#000',
        display: 'standalone',
        orientation: 'portrait',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        ignore: ['slick.css', 'slick-theme.css']
      }
    },
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-no-sourcemaps'
  ],
}
