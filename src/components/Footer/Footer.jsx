import React from 'react';

const Footer = () => (
  <footer>
    <span>
©
      {new Date().getFullYear()}
    </span>
    <span>
Built with
      <a href='https://www.gatsbyjs.org'>Gatsby</a>
    </span>
    <span>
Source code on
      <a href='https://github.com/jin60641/blog'>GitHub</a>
    </span>
  </footer>
);

export default Footer;
