import React from 'react';
import PropTypes from 'prop-types';

function Badge({ children, color, className, ...props }) {
  return (
    <span
      className={`bg-${color}-500 py-1 px-3 rounded-full ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

Badge.defaultProps = {
  color: 'blue'
};

Badge.propTypes = {
  color: PropTypes.oneOf([
    'gray',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'indigo',
    'purple',
    'pink'
  ])
};

export default Badge;
