module.exports = {
  siteMetadata: {
    title: 'jinsang.me',
    description: "Jinsang's page",
    author: '@jin60641',
    siteUrl: 'jinsang.me',
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
        path: `${__dirname}/blog-posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'jinsang.me',
        short_name: 'blog',
        start_url: '/',
        display: 'minimal-ui',
      },
    },
    'gatsby-transformer-remark',
  ],
};
