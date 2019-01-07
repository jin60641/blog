import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const Detail = ({
  data: {
    site: {
      siteMetadata: {
        siteUrl,
        title,
        owner,
      },
    },
    markdownRemark: {
      frontmatter,
      html,
      excerpt,
    },
  },
}) => (
  <Layout>
    <SEO
      url={siteUrl}
      title={`${title} - ${frontmatter.title}`}
      description={excerpt}
      author={owner}
      keywords={['gatsby', 'application', 'react']}
    />
    <section>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
    </section>
    <article dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
);

Detail.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        siteUrl
        title
        owner {
          name
          email
        }
      }
    }

    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "YYYY년 M월 D일")
      }
    }
  }
`;

export default Detail;
