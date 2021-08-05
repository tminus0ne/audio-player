import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { Pause, PlayArrow, VolumeUp } from '@material-ui/icons';

import { ITrack } from '../types/track';
import TrackProgress from './TrackProgress';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

import styles from '../styles/Player.module.scss';

let audio;

const Player = () => {
  const { pause, volume, active, currentTime, duration } = useTypedSelector(
    (state) => state.player,
  );

  const {
    playTrack,
    pauseTrack,
    setActiveTrack,
    setDuration,
    setCurrentTime,
    setVolume,
  } = useActions();

  const setAudio = () => {
    if (active) {
      audio.src = 'http://localhost:5000/' + active.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => setDuration(Math.ceil(audio.duration));
      audio.ontimeupdate = () => setCurrentTime(Math.ceil(audio.currentTime));
    }
  };

  React.useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      play();
    }
  }, [active]);

  const play = () => {
    if (pause) {
      playTrack();
      audio.play();
    } else {
      pauseTrack();
      audio.pause();
    }
  };

  const changeVolume = (evt: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(evt.target.value) / 100;
    setVolume(Number(evt.currentTarget.value));
  };

  const changeCurrentTime = (evt: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(evt.target.value);
    setCurrentTime(Number(evt.currentTarget.value));
  };

  if (!active) return null;

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>
        {pause ? <PlayArrow /> : <Pause />}
      </IconButton>
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: '0 20px' }}
      >
        <div>{active?.name}</div>
        <div style={{ fontSize: 12, color: 'grey' }}>{active?.artist}</div>
      </Grid>
      <TrackProgress
        left={currentTime}
        right={duration}
        onChange={changeCurrentTime}
      />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress left={volume} right={100} onChange={changeVolume} />
    </div>
  );
};

export default Player;
