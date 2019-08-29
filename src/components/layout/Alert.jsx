import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const alertTypes = {
  info: { color: 'teal', icon: 'info-circle' },
  warning: { color: 'orange', icon: 'exclamation-circle' },
  danger: { color: 'red', icon: 'exclamation-triangle' },
  success: { color: 'green', icon: 'check-circle' }
};

const Alert = ({ message, type, onClose, width, timeout }) => {
  useEffect(() => {
    const timeoutId = window.setTimeout(onClose, timeout);

    return () => window.clearTimeout(timeoutId);
    // eslint-disable-next-line
  }, []);

  const { color, icon } = alertTypes[type];

  return (
    <div
      className={`bg-${color}-100 border border-${color}-400 text-${color}-700 px-4 py-3 rounded relative mt-6 mx-auto`}
      style={{ width }}
    >
      <i className={`fas fa-${icon} mr-2`} /> {message}
      <span className='absolute top-0 right-0 bottom-0 px-4 py-3 '>
        <i className='fas fa-times cursor-pointer' onClick={onClose} />
      </span>
    </div>
  );
};

Alert.defaultProps = {
  type: 'success',
  width: '500px',
  timeout: 5000
};

Alert.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['info', 'warning', 'danger', 'success']),
  onClose: PropTypes.func.isRequired,
  width: PropTypes.string,
  timeout: PropTypes.number
};

export default Alert;
