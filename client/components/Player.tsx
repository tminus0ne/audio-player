import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { Pause, PlayArrow, VolumeUp } from '@material-ui/icons';

import { ITrack } from '../types/track';

import styles from '../styles/Player.module.scss';
import TrackProgress from './TrackProgress';

const Player = () => {
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
  const active = false;

  return (
    <div className={styles.player}>
      <IconButton onClick={(evt) => evt.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: '0 20px' }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: 'grey' }}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => ({})} />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress left={0} right={100} onChange={() => ({})} />
    </div>
  );
};

export default Player;
