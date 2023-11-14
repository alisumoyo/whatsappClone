import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
import ChatBg from './ChatBg';

const Landing = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: '#cfe8fc',
          height: '94vh',
          color: '#333',
          display: 'flex',
        }}
      >
        <Sidebar />
        <ChatBg />
      </Box>
    </>
  );
};

export default Landing;
