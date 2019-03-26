module.exports = {
  siteMetadata: {
<<<<<<< HEAD
    title: "Gatsby Starter - Dimension V2",
    author: "Hunter Chang",
    description: "A Gatsby.js V2 Starter based on Dimension by HTML5 UP"
=======
    title: "Matthew Hill | A Ninja Resume",
    author: "Matthew Hill",
    description: "A place to get to know the man behind the ninja."
>>>>>>>
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
