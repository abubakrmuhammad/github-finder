import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, color, className, variant, ...props }) {
  const types = {
    primary: {
      bgColor: 'blue-600',
      hoverBg: 'blue-800'
    },
    dark: {
      bgColor: 'gray-700',
      hoverBg: 'gray-800'
    }
  };

  const { bgColor, hoverBg } = types[color];

  let classes;

  switch (variant) {
    case 'inline':
      classes = `font-bold text-sm  text-${bgColor} hover:text-${hoverBg} focus:outline-none`;
      break;
    case 'block':
      classes = `inline-block bg-${bgColor} hover:bg-${hoverBg} text-white font-bold py-2 px-4 rounded`;
      break;
    default:
      classes = `${className}`;
  }

  classes = `${className} ${classes}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: 'block',
  color: 'dark'
};

Button.propTypes = {
  variant: PropTypes.oneOf(['block', 'inline']),
  color: PropTypes.oneOf(['dark', 'primary'])
};

export default Button;
