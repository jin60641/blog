import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Header = ({ siteTitle }) => (
  <div>
    <h1>
      <Link to='/'>
        {siteTitle}
      </Link>
    </h1>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
