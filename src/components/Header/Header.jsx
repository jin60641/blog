import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <h1>
        <Link to='/'>
          {siteTitle}
        </Link>
      </h1>
      <div>
        <Link to='/page/1'> blog </Link>
        <Link to='/resume'> resume </Link>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
