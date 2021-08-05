import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { Card, Grid, IconButton } from '@material-ui/core';
import { Delete, Pause, PlayArrow } from '@material-ui/icons';

import { ITrack } from '../types/track';
import { useActions } from '../hooks/useActions';

import styles from '../styles/TrackItem.module.scss';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = true }) => {
  const router = useRouter();
  const { playTrack, pauseTrack, setActiveTrack } = useActions();

  const play = (evt) => {
    evt.stopPropagation();
    setActiveTrack(track);
    playTrack();
  };

  return (
    <Card
      className={styles.track}
      onClick={() => router.push('/tracks/' + track._id)}
    >
      <IconButton onClick={play}>
        {active ? <PlayArrow /> : <Pause />}
      </IconButton>
      <img
        width={70}
        height={70}
        src={'http://localhost:5000/' + track.picture}
        alt={`${track.name} album cover image`}
      />
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: '0 20px' }}
      >
        <div>{track.name}</div>
        <div className={styles.artist}>{track.artist}</div>
      </Grid>
      {active && <div>00:42 / 03:15</div>}
      <IconButton
        onClick={(evt) => evt.stopPropagation()}
        style={{ marginLeft: 'auto' }}
      >
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
