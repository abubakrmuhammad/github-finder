import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavLink from '../UI/NavLink';

function Navbar({ icon, title }) {
  return (
    <header className='bg-blue-600 text-white py-6'>
      <div className='w-11/12 flex items-center mx-auto'>
        <Link to='/' className='font-semibold text-xl'>
          <i className={icon} /> {title}
        </Link>

        <nav className='flex ml-auto'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
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
