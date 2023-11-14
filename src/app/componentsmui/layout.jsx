import { Box, Button } from '@mui/material';
import React from 'react';
import ChatBg from './ChatBg';

const Layout = () => {
  return (
    <>
      <Box sx={{ width: '100vw', height: '100vh', bgcolor: '#f3f3f3' }}>
        <Box sx={{ height: '10%', width: '100vw', bgcolor: '#00a884' }}></Box>
      </Box>
      <Box
        sx={{
          width: '90vw',
          height: '90vh',
          bgcolor: 'red',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          margin: 'auto',
          display: 'flex',
        }}
      >
        <Box sx={{ width: '400px', height: '100%', bgcolor: 'blue' }}></Box>
        <Box sx={{ flexGrow: '1', height: '100%', bgcolor: 'pink' }}>
          <ChatBg />
        </Box>
      </Box>
      <Button></Button>
    </>
  );
};

export default Layout;
