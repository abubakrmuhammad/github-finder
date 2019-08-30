import React, { useReducer } from 'react';
import AlertContext from './';
import alertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

function AlertState({ children }) {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const showAlert = message =>
    dispatch({ type: SET_ALERT, payload: { message } });

  const removeAlert = () => dispatch({ type: REMOVE_ALERT });

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        showAlert,
        removeAlert
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}

export default AlertState;
