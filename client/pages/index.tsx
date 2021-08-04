import React from 'react';

import MainLayout from '../layouts/MainLayout';

const index = () => {
  return (
    <>
      <MainLayout>
        <div className="center">
          <h1>Welcome!</h1>
          <h3>Here we collected the best music!</h3>
        </div>
      </MainLayout>

      <style jsx>
        {`
          .center {
            margin: 150px;
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
