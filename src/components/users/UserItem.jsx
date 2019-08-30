import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../UI/Card';
import Button from '../UI/Button';

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className='w-1/3 p-4'>
      <Card className='text-center p-6'>
        <img
          src={avatar_url}
          alt={login}
          className='rounded-full h-32 w-32 mx-auto'
        />
        <p className='text-2xl mt-2 mb-4'>{login}</p>
        <Link to={`/user/${login}`}>
          <Button variant='block' color='dark'>
            More
          </Button>
        </Link>
      </Card>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
