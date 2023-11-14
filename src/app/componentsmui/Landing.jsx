import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SideBar from './SIdeBAr';
const Landing = () => {
  return (
    <>
      <Container
        maxWidth='fluid'
        sx={{ bgcolor: 'pink', marginTop: '10px', overflow: 'hidden' }}
      >
        <span>HELLO</span>
        <Box
          sx={{
            bgcolor: '#cfe8fc',
            height: '94vh',
            color: '#333',
            position: 'static',
          }}
        >
          <SideBar />
        </Box>
      </Container>
    </>
  );
};

export default Landing;
