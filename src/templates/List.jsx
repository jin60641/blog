import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const List = ({
  data: {
    site: {
      siteMetadata: {
        siteUrl,
        owner,
      },
    },
    allMarkdownRemark: {
      edges: posts,
    },
  },
}) => (
  <Layout>
    <SEO
      title='Posts List'
      url={siteUrl}
      author={owner}
    />
    {posts.map(({ node }) => (
      <div key={node.fields.slug}>
        {node.frontmatter.title || node.fields.slug}
      </div>
    ))}
  </Layout>
);

List.propTypes = {
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
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        frontmatter: PropTypes.shape({
          title: PropTypes.string,
        }).isRequired,
        fields: PropTypes.shape({
          slug: PropTypes.string,
        }).isRequired,
      })).isRequired,
    }).isRequired,
  }).isRequired,
};

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
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

    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default List;
