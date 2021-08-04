import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { Button, Grid, TextField } from '@material-ui/core';

import { ITrack } from '../../types/track';
import MainLayout from '../../layouts/MainLayout';

const TrackPage = () => {
  const router = useRouter();

  const track: ITrack = {
    _id: '1',
    name: 'Track 1',
    artist: 'Artist 1',
    text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    listens: 0,
    picture: 'https://placekitten.com/70/70',
    audio: '',
    comments: [],
  };

  return (
    <MainLayout>
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
          src={track.picture}
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
        <TextField label="Your name" fullWidth />
        <TextField label="Your comment" fullWidth multiline rows={4} />
        <Button>Post comment</Button>
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
