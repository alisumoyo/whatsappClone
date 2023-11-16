import { Box } from '@mui/material';

import React from 'react';
import ChatBg from './ChatBg';
import Sidebar from './Sidebar';
import UserInfo from './UserInfo';
import SearchField from './SearchField';

const Layout = () => {
  return (
    <>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          bgcolor: '#f3f3f3',
          overflow: 'hidden',
        }}
      >
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
        <Box
          sx={{
            width: '400px',
            height: '100%',
            bgcolor: '#f0f2f5',
          }}
        >
          <Sidebar />
          <SearchField />
          <UserInfo />
          <UserInfo />
          <UserInfo />
        </Box>
        <Box
          sx={{
            flexGrow: '1',
            height: '100%',
            bgcolor: '#e9edef',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: '1',
            bgcolor: '#e9edef',
          }}
        >
          <ChatBg />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
