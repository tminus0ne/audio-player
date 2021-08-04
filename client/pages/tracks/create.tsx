import React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';

import MainLayout from '../../layouts/MainLayout';
import StepWrapper from '../../components/StepWrapper';
import FileUpload from '../../components/FileUpload';

const Create = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [picture, setPicture] = React.useState(null);
  const [audio, setAudio] = React.useState(null);

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction={'column'} style={{ padding: 20 }}>
            <TextField label={'Track title'} style={{ marginTop: 10 }} />
            <TextField label={'Track author'} style={{ marginTop: 10 }} />
            <TextField
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
        <Button disabled={activeStep === 0} onClick={back}>
          Back
        </Button>
        <Button onClick={next}>Next</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
