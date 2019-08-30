import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavLink({ children, to }) {
  return (
    <Link
      exact
      to={to}
      activeStyle={{ color: '#fff' }}
      className='mx-4 text-blue-200 hover:text-white'
    >
      {children}
    </Link>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired
};

export default NavLink;
