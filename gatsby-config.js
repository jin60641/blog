module.exports = {
  siteMetadata: {
    title: "Jinsang's Blog",
    description: 'first blog',
    author: '@jin60641',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "jinsang's blog",
        short_name: 'blog',
        start_url: '/',
        display: 'minimal-ui',
      },
    },
  ],
};
