'use client';
import { Box } from '@mui/material';
import React, { useContext, useState } from 'react';
import ChatBg from './ChatBg';
import UserInfo from './UserInfo';
import SearchField from './SearchField';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { DataContext } from '@/app/Contexts/MyContextProvider';
import SettingsBar from './SettingsBar';
import UserProfile from './UserProfile';

const Layout = () => {
  const { data, setData, openSettings, openProfile } = useContext(DataContext);
  const menuStyles = {
    position: 'absolute',
    bgcolor: '#fff',
    zIndex: '1000',
    width: '100%',
    height: '100%',
    left: '0',
    top: '0',
    transition: 'all 0.3s ease-in-out',
  };
  const userClicked = () => {
    setData({ name: 'Whatsapp' });
  };

  return (
    <>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          bgcolor: '#8696a0',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ height: '20%', width: '100vw', bgcolor: '#00a884' }}></Box>
      </Box>
      <Box
        sx={{
          width: '98vw',
          height: '95vh',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          margin: 'auto',
          display: 'flex',
        }}
      >
        {/* SIDE BAR LAYOUT & RENDERING COMPONENETS */}
        <Box
          sx={{
            width: '400px',
            height: '100%',
            bgcolor: '#f0f2f6',
            display: 'flex',
            flexDirection: 'column',
            transition: 'all 0.5s ease-in-out',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/*SIDEBAR MAIN START */}
          <SettingsBar sx={menuStyles } />
          <UserProfile sx={menuStyles} />
          <Box
            sx={{
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
                height: '100%',
                overflow: 'auto',
                flexGrow: '1',
              }}
            >
              <UserInfo onClick={userClicked} />
              <UserInfo onClick={userClicked} />
              <UserInfo onClick={userClicked} />
              <UserInfo onClick={userClicked} />
              <UserInfo onClick={userClicked} />
              <UserInfo onClick={userClicked} />
              <UserInfo onClick={userClicked} />
              <UserInfo onClick={userClicked} />
              <UserInfo onClick={userClicked} />
              <UserInfo onClick={userClicked} />
              <UserInfo onClick={userClicked} />
              <UserInfo onClick={userClicked} />
              <UserInfo onClick={userClicked} />
              <UserInfo onClick={userClicked} />
            </Box>
          </Box>
          {/*SIDEBAR MAIN END */}
          {/* SIDEBAR SETTINGS START*/}
          {/* SIDEBAR SETTINGS END*/}
        </Box>
        {/* Chat sections */}
        <Box
          sx={{
            height: '100%',
            bgcolor: '#f0f2f5',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flexGrow: '1',
          }}
        >
          {data ? <Chat /> : <ChatBg />}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
