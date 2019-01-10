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
      image={frontmatter.image}
    />
    <section>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
    </section>
    <article dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
);

Detail.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        siteUrl: PropTypes.string.isRequired,
        title: PropTypes.string,
        owner: PropTypes.shape({
          name: PropTypes.string,
          email: PropTypes.string,
        }).isRequired,
      }).isRequired,
    }).isRequired,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.string,
        date: PropTypes.string,
      }).isRequired,
      excerpt: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
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
        image
        date(formatString: "YYYY년 M월 D일")
      }
    }
  }
`;

export default Detail;
