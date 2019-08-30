import React from 'react';

function About() {
  return (
    <section className='rounded-lg shadow-lg bg-white py-8 px-16 my-12'>
      <h2 className='text-4xl'>About this App</h2>
      <p className='text-gray-700 text-lg'>
        Search Github Users using the Github REST API.
      </p>
      <p className='text-gray-700 text-lg'>
        <strong>Version:</strong> 1.0.0
      </p>
    </section>
  );
}

export default About;
