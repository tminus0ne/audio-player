import { Button } from '@material-ui/core';
import React from 'react';
import Navbar from '../components/Navbar';

const index = () => {
  return (
    <>
      <Navbar />
      <div className="center">
        <h1>Welcome!</h1>
        <h3>Here we collected the best music!</h3>
      </div>
      <style jsx>
        {`
          .center {
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};

export default index;
