import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message, type, onClose, timeout }) => {
  useEffect(() => {
    const timeoutId = window.setTimeout(onClose, timeout);

    return () => window.clearTimeout(timeoutId);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`alert alert-${type}`}>
      <i className='fas fa-info-circle' /> {message}
      <i className='icon-close fas fa-times' onClick={onClose} />
    </div>
  );
};

Alert.defaultProps = {
  type: 'success',
  timeout: 5000
};

Alert.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['light', 'primary', 'danger', 'success']),
  onClose: PropTypes.func.isRequired,
  timeout: PropTypes.number
};

export default Alert;
