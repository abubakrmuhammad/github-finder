import React, { Fragment, useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

function Search() {
  const { searchUsers, clearUsers, users } = useContext(GithubContext);
  const { showAlert, removeAlert } = useContext(AlertContext);

  const [searchText, setSearchText] = useState('');

  const inputChangeHandler = ({ target }) => setSearchText(target.value);

  const formSubmitHandler = event => {
    event.preventDefault();
    removeAlert();

    if (searchText) {
      searchUsers(searchText);
      setSearchText('');
    } else showAlert('Please enter something to search for!', 'light');
  };

  return (
    <Fragment>
      <form className='form' onSubmit={formSubmitHandler}>
        <input
          type='text'
          name='searchText'
          placeholder='Search Users...'
          value={searchText}
          onChange={inputChangeHandler}
        />
        <button type='submit' className='btn btn-dark btn-block'>
          Search
        </button>
      </form>
      {users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </Fragment>
  );
}

export default Search;
