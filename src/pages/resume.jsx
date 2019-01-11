import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

const Resume = () => (
  <StaticQuery
    query={graphql`
      query ResumeQuery {
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
          title='Resume'
          url={siteUrl}
          author={owner}
        />
        <h1>Resume</h1>
      </Layout>
    )}
  />
);

export default Resume;
