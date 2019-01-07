import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        site {
          siteMetadata {
            siteUrl
            owner {
              name
              email
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: {
          siteUrl,
          owner,
        },
      },
    }) => (
      <Layout>
        <SEO
          title='Home'
          url={siteUrl}
          author={owner}
        />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </Layout>
    )}
  />
);

export default IndexPage;
