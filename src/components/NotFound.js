import React from 'react'

const NotFound = ({ location }) => {
  return (
    <div>
      <h1>Oh! Sorry... This route is not exist. Please try some other...</h1>
      <h2>{location.pathname} Not Found :(</h2>
    </div>
  );
};

export default NotFound