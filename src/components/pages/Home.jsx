import React, { Fragment, useContext } from 'react';
import Alert from '../UI/Alert';
import Search from '../users/Search';
import Users from '../users/Users';
import AlertContext from '../../context/alert/AlertContext';

function Home() {
  const { alert, removeAlert } = useContext(AlertContext);

  return (
    <Fragment>
      <Search />
      {alert && <Alert {...alert} type='warning' onClose={removeAlert} />}
      <Users />
    </Fragment>
  );
}

export default Home;
