import React from 'react';

function Card({ children, className }) {
  return (
    <div className={`rounded-lg shadow-lg text-gray-900 bg-white ${className}`}>
      {children}
    </div>
  );
}

export default Card;
