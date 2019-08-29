import React, { Fragment, useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/GithubContext';

function Users() {
  const { loading, users, clearUsers } = useContext(GithubContext);

  if (loading) return <Spinner />;

  return (
    <Fragment>
      {users.length > 0 && (
        <button
          className='block font-bold text-sm mx-auto mb-2 text-blue-500 hover:text-blue-800 focus:outline-none'
          onClick={clearUsers}
        >
          Clear Users
        </button>
      )}

      <div className='flex flex-wrap'>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </Fragment>
  );
}

export default Users;
