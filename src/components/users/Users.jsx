import React, { Fragment, useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../UI/Spinner';
import GithubContext from '../../context/github/GithubContext';
import Button from '../UI/Button';

function Users() {
  const { loading, users, clearUsers } = useContext(GithubContext);

  if (loading) return <Spinner />;

  return (
    <Fragment>
      {users.length > 0 && (
        <Button
          variant='inline'
          color='primary'
          className='block mx-auto mb-2'
          onClick={clearUsers}
        >
          Clear Users
        </Button>
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
