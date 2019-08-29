import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className='w-1/3 p-4'>
      <figure className='bg-white rounded-lg overflow-hidden shadow-lg text-center p-6'>
        <img
          src={avatar_url}
          alt={login}
          className='rounded-full h-32 w-32 mx-auto'
        />
        <figcaption className='text-2xl mt-2 mb-4'>{login}</figcaption>
        <Link
          to={`/user/${login}`}
          className='bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded'
        >
          More
        </Link>
      </figure>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
