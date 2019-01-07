module.exports = {
  siteMetadata: {
    title: "Jinsang's Blog",
    description: 'first blog',
    author: '@jin60641',
    siteUrl: 'jin60641.surge.sh',
    owner: {
      name: '진상현',
      email: 'jin60641@gmail.com',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "jinsang's blog",
        short_name: 'blog',
        start_url: '/',
        display: 'minimal-ui',
      },
    },
    'gatsby-transformer-remark',
  ],
};
