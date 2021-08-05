import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { Button, Grid, TextField } from '@material-ui/core';
import { GetServerSideProps } from 'next';
import axios from 'axios';

import MainLayout from '../../layouts/MainLayout';
import { useInput } from '../../hooks/useInput';
import { ITrack } from '../../types/track';
import { AddComment } from '@material-ui/icons';

const TrackPage = ({ serverTrack }) => {
  const router = useRouter();
  const [track, setTrack] = React.useState<ITrack>(serverTrack);

  const usernameInput = useInput('');
  const commentInput = useInput('');

  const addComment = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/tracks/comment',
        {
          username: usernameInput.value,
          text: commentInput.value,
          trackId: track._id,
        },
      );
      setTrack({ ...track, comments: [...track.comments, response.data] });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout
      title={`Music App - ${track.name} - ${track.artist}`}
      keywords={`Music, artist, ${track.name} ${track.artist}`}
    >
      <Button
        variant={'outlined'}
        style={{ fontSize: 32 }}
        onClick={() => router.push('/tracks')}
      >
        To tracklist
      </Button>
      <Grid container style={{ margin: '20px 0' }}>
        <img
          width={200}
          height={200}
          src={'http://localhost:5000/' + track.picture}
          alt={`${track.name} album cover image`}
        />
        <div style={{ marginLeft: 30 }}>
          <h3>Track title - {track.name}</h3>
          <p>Artist - {track.artist}</p>
          <span>Listens - {track.listens}</span>
        </div>
      </Grid>
      <h3>Song lyrics</h3>
      <p>{track.text}</p>

      <h3>Commentary</h3>
      <Grid container>
        <TextField {...usernameInput} label="Your name" fullWidth />
        <TextField
          {...commentInput}
          label="Your comment"
          fullWidth
          multiline
          rows={4}
        />
        <Button onClick={addComment}>Post comment</Button>
      </Grid>

      <div>
        {track.comments.map((comment, index) => (
          <div key={index}>
            <div>Author - {comment.username}</div>
            <div>Comment - {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get('http://localhost:5000/tracks/' + params.id);

  return { props: { serverTrack: response.data } };
};
