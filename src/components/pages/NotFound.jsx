import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className='rounded-lg shadow-lg bg-white py-8 px-16 my-12'>
      <h2 className='text-4xl'>Page Not Found</h2>
      <p className='text-gray-700 text-lg mb-2'>
        The page you're looking for does not exist...
      </p>
      <Link
        to='/'
        className='inline-block bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 mt-6 rounded'
      >
        Back to Search
      </Link>
    </section>
  );
}

export default NotFound;
