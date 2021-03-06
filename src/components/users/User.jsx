import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../UI/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Badge from '../UI/Badge';

function User({ match }) {
  const { loading, getUser, getUserRepos, user, repos } = useContext(
    GithubContext
  );

  useEffect(() => {
    getUser(match.params.username);
    getUserRepos(match.params.username);
    // eslint-disable-next-line
  }, []);

  const isHirableIcon = hireable => {
    return hireable ? (
      <i className='fas fa-check text-green-500' />
    ) : (
      <i className='fas fa-times-circle text-red-500' />
    );
  };

  const isAvailable = info => {
    if (info) return <span className='text-gray-800'>{info}</span>;

    return <span className='text-gray-600'>Not Available</span>;
  };

  const {
    name,
    avatar_url,
    location,
    company,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/'>
        <Button
          variant='inline'
          color='dark'
          className='my-6 hover:text-blue-500'
        >
          <i className='fas fa-long-arrow-alt-left pr-1' /> Back to Search
        </Button>
      </Link>

      <Card className='flex items-start py-12 pr-24 mb-6'>
        <div className='w-2/5 text-center'>
          <img
            src={avatar_url}
            alt={name}
            className='rounded-full w-1/2 mx-auto mb-3'
          />
          <h1 className='font-bold text-2xl mb-1'>{name}</h1>
          <p className='text-gray-900 text-sm'>
            <i className='fas fa-map-marker-alt text-blue-500 mr-1' />
            {isAvailable(location)}
          </p>
        </div>

        <div className='w-3/5'>
          <h2 className='text-xl font-bold'>Bio</h2>
          <p className='text-gray-800'>{isAvailable(bio)}</p>

          <a href={html_url} target='_blank' rel='noopener noreferrer'>
            <Button color='dark' className='my-6'>
              Github Profile
            </Button>
          </a>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'max-content 1fr',
              gridColumnGap: '0.5rem'
            }}
            className='text-sm'
          >
            <span className='font-bold'>Username:</span>
            <span>{login}</span>

            <span className='font-bold'>Company:</span>
            {isAvailable(company)}

            <span className='font-bold'>Website:</span>
            {isAvailable(blog)}

            <span className='font-bold'>Hireable:</span>
            <span>{isHirableIcon(hireable)}</span>
          </div>
        </div>
      </Card>

      <section className='flex justify-center rounded-lg shadow-lg text-xs text-white font-bold bg-white py-6 mb-6'>
        <Badge color='teal' className='mr-2'>
          {followers} Followers
        </Badge>
        <Badge color='green' className='mr-2'>
          {following} Following
        </Badge>
        <Badge color='blue' className='mr-2'>
          {public_repos} Public Repos
        </Badge>
        <Badge color='purple' className='mr-2'>
          {public_gists} Public Gists
        </Badge>
      </section>
      <Repos repos={repos} />
    </Fragment>
  );
}

export default User;
