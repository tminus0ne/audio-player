import React from 'react';
import { Box, Button, Card, Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import { useDispatch } from 'react-redux';

import MainLayout from '../../layouts/MainLayout';
import TrackList from '../../components/TrackList';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from '../../store';
import { fetchTracks, searchTracks } from '../../store/action-creators/track';

const Index = () => {
  const router = useRouter();
  const { tracks, error } = useTypedSelector((state) => state.track);
  const [query, setQuery] = React.useState<string>('');
  const dispatch = useDispatch() as NextThunkDispatch;
  const [timer, setTimer] = React.useState(null);

  const search = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(evt.target.value);

    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(async () => {
        await dispatch(searchTracks(evt.target.value));
      }, 500),
    );
  };

  if (error) {
    return (
      <MainLayout>
        <h2>{error}</h2>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={'Tracklist - Music App'}>
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
          <TextField fullWidth value={query} onChange={search} />
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(
  // async ({ store }) => {
  //   const dispatch = store.dispatch as NextThunkDispatch;
  //   await dispatch(await fetchTracks());
  // },
  (store) => async () => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(fetchTracks());

    return { props: {} };
  },
);
