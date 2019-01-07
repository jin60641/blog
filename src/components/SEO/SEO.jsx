import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const SEO = ({
  url,
  title,
  description,
  author,
  keywords,
  locale,
  image,
}) => (
  <Helmet
    htmlAttributes={{ lang: locale.slice(0, 2) }}
  >
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta name='author' content={`${author.name} <${author.email}>`} />
    <meta name='keywords' content={keywords.join(', ')} />

    {/* OpenGraph Tags */}
    <meta property='og:locale' content={locale} />
    <meta property='og:url' content={url} />
    <meta property='og:title' content={title} />
    <meta property='og:type' content='website' />
    <meta property='og:description' content={description} />
    {image && <meta property='og:image' content={image} />}

    {/* Twitter Card Tags */}
    <meta name='twitter:card' content='summary' />
    <meta name='twitter:url' content={url} />
    <meta name='twitter:title' content={title} />
    <meta name='twitter:description' content={description} />
    <meta name='twitter:creator' content={`${author.name} <${author.email}>`} />
    {image && <meta property='twitter:image' content={image} />}
  </Helmet>
);

SEO.defaultProps = {
  description: '',
  keywords: [],
  image: '',
  locale: 'ko_KR',
};

SEO.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,

  description: PropTypes.string,
  image: PropTypes.string,
  locale: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
};

export default SEO;
