import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../UI/Card';
import Button from '../UI/Button';

function NotFound() {
  return (
    <Card className='py-8 px-16 my-12'>
      <h2 className='text-4xl'>Page Not Found</h2>
      <p className='text-gray-700 text-lg mb-2'>
        The page you're looking for does not exist...
      </p>
      <Link to='/'>
        <Button className='mt-6' color='dark'>
          Back to Search
        </Button>
      </Link>
    </Card>
  );
}

export default NotFound;
