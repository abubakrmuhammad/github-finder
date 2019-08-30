import React from 'react';

const styles = {
  borderLeftColor: 'rgba(49,130,206, 0.3)',
  borderTopColor: 'rgba(49,130,206, 0.3)',
  borderBottomColor: 'rgba(49,130,206, 0.3)',
  borderRightColor: 'rgb(49,130,206)',
  transform: 'rotate(0deg)',
  animation: 'spinner 1.1s infinite linear'
};

function Spinner() {
  return (
    <div
      style={styles}
      className='rounded-full border-8 w-16 h-16 mx-auto my-24'
    />
  );
}

export default Spinner;
