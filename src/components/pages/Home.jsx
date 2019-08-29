import React, { Fragment, useContext } from 'react';
import Alert from '../layout/Alert';
import Search from '../users/Search';
import Users from '../users/Users';
import AlertContext from '../../context/alert/AlertContext';

function Home() {
  const { alert, removeAlert } = useContext(AlertContext);

  return (
    <Fragment>
      {alert && <Alert {...alert} type="warning" onClose={removeAlert} />}
      <Search />
      <Users />
    </Fragment>
  );
}

export default Home;
