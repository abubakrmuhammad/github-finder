import React from 'react';

function Input({ className, ...props }) {
  return (
    <input
      className='shadow appearance-none border rounded flex-grow py-2 px-3 text-gray-700 leading-tight focus:ouline-none focus:shadow-outline'
      {...props}
    />
  );
}

export default Input;
