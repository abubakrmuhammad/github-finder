import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';
import Card from '../UI/Card';

function Repos({ repos }) {
  return (
    <Card className='py-6 px-12 mb-12'>
      <h2 className='text-2xl font-bold text-gray-800 mb-1'>
        Latest Repositories
      </h2>
      <ol className='list-decimal text-gray-800 font-bold ml-5'>
        {repos.map(repo => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </ol>
    </Card>
  );
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;
