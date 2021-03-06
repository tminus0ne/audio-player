import React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import axios from 'axios';

import { useRouter } from 'next/dist/client/router';
import { useInput } from '../../hooks/useInput';

import MainLayout from '../../layouts/MainLayout';
import StepWrapper from '../../components/StepWrapper';
import FileUpload from '../../components/FileUpload';

const Create = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = React.useState(0);
  const [picture, setPicture] = React.useState(null);
  const [audio, setAudio] = React.useState(null);

  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    } else {
      const formData = new FormData();
      formData.append('name', name.value);
      formData.append('artist', artist.value);
      formData.append('text', text.value);
      formData.append('picture', picture);
      formData.append('audio', audio);

      axios
        .post('http://localhost:5000/tracks', formData)
        .then((res) => router.push('/tracks '))
        .catch((error) => console.log(error));
    }
  };

  // if (activeStep !== (1 || 2))
  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction={'column'} style={{ padding: 20 }}>
            <TextField
              {...name}
              label={'Track title'}
              style={{ marginTop: 10 }}
            />
            <TextField
              {...artist}
              label={'Track author'}
              style={{ marginTop: 10 }}
            />
            <TextField
              {...text}
              label={'Track text'}
              multiline
              rows={3}
              style={{ marginTop: 10 }}
            />
          </Grid>
        )}
        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept="image/*">
            <Button>Upload album cover</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept="audio/*">
            <Button>Upload audio</Button>
          </FileUpload>
        )}
      </StepWrapper>

      <Grid container justifyContent="space-between">
        <Button
          onClick={activeStep === 0 ? () => router.push('/tracks') : back}
        >
          Back
        </Button>
        <Button onClick={next}>Next</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
