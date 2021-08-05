import React from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';

import Navbar from '../components/Navbar';
import Player from '../components/Player';

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title,
  description,
  keywords,
}) => {
  return (
    <>
      <Head>
        <title>{title || 'Music App'}</title>
        <meta
          name="description"
          content={
            'Music App. Here everyone can share their favorite music. ' +
            description
          }
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content={keywords || 'Music, track, artist, song'}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Container style={{ margin: '90px auto' }}>{children}</Container>
      <Player />
    </>
  );
};

export default MainLayout;
