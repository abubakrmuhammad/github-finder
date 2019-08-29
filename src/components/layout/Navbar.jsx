import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ icon, title }) {
  return (
    <header className='bg-blue-600 text-white py-6'>
      <div className='w-11/12 flex items-center mx-auto'>
        <Link to='/' className='font-semibold text-xl'>
          <i className={icon} /> {title}
        </Link>

        <nav className='flex ml-auto'>
          <NavLink
            exact
            to='/'
            activeStyle={{ color: '#fff' }}
            className='mx-4 text-blue-200 hover:text-white'
          >
            Home
          </NavLink>
          <NavLink
            exact
            to='/about'
            activeStyle={{ color: '#fff' }}
            className='mx-4 text-blue-200 hover:text-white'
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
