import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github';
import AlertContext from '../../context/alert';
import Button from '../UI/Button';
import Input from '../UI/Input';
import Card from '../UI/Card';

function Search() {
  const { searchUsers } = useContext(GithubContext);
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
    <form onSubmit={formSubmitHandler}>
      <Card className='w-4/6 flex px-8 py-6 my-8 mx-auto'>
        <Input
          type='text'
          name='searchText'
          placeholder='Search Users...'
          value={searchText}
          onChange={inputChangeHandler}
          autoFocus
        />

        <Button className='ml-6' type='submit' color='primary'>
          Search
        </Button>
      </Card>
    </form>
  );
}

export default Search;
