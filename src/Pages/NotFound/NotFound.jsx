import React from 'react';
import { Helmet } from 'react-helmet-async';

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 / Not Found</title>
      </Helmet>
      <div className='vh-100 d-flex justify-content-center align-items-center bg-dark text-light'>
        <h1> 404 / Not Found</h1>
      </div>
    </>
  );
}

export default NotFound;
