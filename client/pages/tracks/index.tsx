import React from 'react';
import { Box, Button, Card, Grid } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';

import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/track';
import TrackList from '../../components/TrackList';

const Index = () => {
  const router = useRouter();

  const tracks: ITrack[] = [
    {
      _id: '1',
      name: 'Track 1',
      artist: 'Artist 1',
      text: 'Text 1',
      listens: 0,
      picture: 'https://placekitten.com/70/70',
      audio: 'http://localhost:5000/audio/1234.mp3',
      comments: [],
    },
    {
      _id: '2',
      name: 'Track 2',
      artist: 'Artist 2',
      text: 'Text 2',
      listens: 0,
      picture: 'https://placekitten.com/80/70',
      audio: 'http://localhost:5000/audio/1234.mp3',
      comments: [],
    },
    {
      _id: '3',
      name: 'Track 3',
      artist: 'Artist 3',
      text: 'Text 3',
      listens: 0,
      picture: 'https://placekitten.com/100/70',
      audio: 'http://localhost:5000/audio/1234.mp3',
      comments: [],
    },
  ];

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: '900px' }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h2>Tracks List</h2>
              <Button onClick={() => router.push('/tracks/create')}>
                Download
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
