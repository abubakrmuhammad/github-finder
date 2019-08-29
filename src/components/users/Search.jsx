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
      <form
        className='w-4/6 flex bg-white shadow-md rounded px-8 py-6 my-8 mx-auto'
        onSubmit={formSubmitHandler}
      >
        <input
          className='shadow appearance-none border rounded flex-grow py-2 px-3 text-gray-700 leading-tight focus:ouline-none focus:shadow-outline'
          type='text'
          name='searchText'
          placeholder='Search Users...'
          value={searchText}
          onChange={inputChangeHandler}
          autoFocus
        />

        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-6 rounded focus:outline-none focus:shadow-outline'
          type='submit'
        >
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
