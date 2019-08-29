import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/GithubContext';

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
      <i className='fas fa-check text-success' />
    ) : (
      <i className='fas fa-times-circle text-danger' />
    );
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
      <Link to='/' className='btn btn-light'>
        Back to Search
      </Link>
      <strong>Hireable:</strong> {isHirableIcon(hireable)}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            alt={name}
            className='round-img'
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h1>Bio</h1>
              <p>{bio}</p>
            </Fragment>
          )}
          <a
            href={html_url}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-dark my-1'
          >
            Github Profile
          </a>

          <ul>
            {login && (
              <li>
                <b>Username:</b> {login}
              </li>
            )}
            {company && (
              <li>
                <b>Company:</b> {company}
              </li>
            )}
            {blog && (
              <li>
                <b>Website:</b> {blog}
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <span className='badge badge-primary'>Followers: {followers}</span>
        <span className='badge badge-success'>Following: {following}</span>
        <span className='badge badge-light'>Public Repos: {public_repos}</span>
        <span className='badge badge-dark'>Public Gists: {public_gists}</span>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
}

export default User;
