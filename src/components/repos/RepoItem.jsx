import React from 'react';
import PropTypes from 'prop-types';

function RepoItem({ repo }) {
  return (
    <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
      <li className='mb-1 hover:text-blue-600'>{repo.name}</li>
    </a>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
