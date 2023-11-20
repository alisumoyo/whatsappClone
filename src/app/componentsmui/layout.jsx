import { Box } from '@mui/material';

import React from 'react';
import ChatBg from './ChatBg';
import UserInfo from './UserInfo';
import SearchField from './SearchField';
import Sidebar from './Sidebar';
import Chat from './Chat';

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
          width: '95vw',
          height: '95vh',
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
            bgcolor: '#f0f2f6',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box>
            <Sidebar />
            <SearchField />
          </Box>
          <Box
            sx={{
              flexGrow: '1',
              overflowY: 'scroll',
              '&:hover': {
                opacity: 1,
              },
              '&::-webkit-scrollbar': {
                width: '5px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#b3b7b9',
                opacity: 0,
                borderRadius: '20px',
              },
            }}
          >
            <UserInfo />
            <UserInfo />
            <UserInfo />
            <UserInfo />
            <UserInfo />
            <UserInfo />
            <UserInfo />
            <UserInfo />
            <UserInfo />
            <UserInfo />
            <UserInfo />
            <UserInfo />
          </Box>
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
            bgcolor: 'red',
          }}
        >
          {/* <ChatBg /> */}
          <Chat />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
