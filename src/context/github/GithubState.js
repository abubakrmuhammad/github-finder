import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './';
import githubReducer from './githubReducer';
import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING
} from '../types';

let githubClientId, githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

function GithubState({ children }) {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async searchText => {
    startLoading();

    const { data } = await axios.get(
      `https://api.github.com/search/users?q=${searchText}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({ type: SEARCH_USERS, payload: data.items });
  };

  const getUser = async username => {
    startLoading();

    const { data: user } = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({ type: GET_USER, payload: user });
  };

  const getUserRepos = async username => {
    startLoading();

    const { data: repos } = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({ type: GET_REPOS, payload: repos });
  };

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const startLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{ ...state, searchUsers, clearUsers, getUser, getUserRepos }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export default GithubState;
