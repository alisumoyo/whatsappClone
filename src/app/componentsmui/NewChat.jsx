import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import SearchField from './SearchField';
import { DataContext } from '../Contexts/MyContextProvider';
import AddNewUser from './AddNewUser';
import SideBarHeading from './SideBarHead';
import { GetRegUsersContext } from '../Contexts/getRegUsers';
import { useState } from 'react';
import { getLoggedUser } from '../Contexts/GetLoggedUser';

const NewChat = ({ sx }) => {
  const { openNewChat, setOpenNewChat } = useContext(DataContext);
  
  const { fetchData } = useContext(GetRegUsersContext);
  const handleEnter = (value) => {
    fetchData(value);
  };

  return (
    <Box
      sx={sx}
      style={
        openNewChat
          ? { transform: 'translateX(0%)' }
          : { transform: 'translateX(-100%)' }
      }
    >
      <SideBarHeading label='New Chat' onClick={() => setOpenNewChat(false)} />
      <SearchField onKeyPress={(value) => handleEnter(value)} />
      <Box
        sx={{
          bgcolor: '#fff',
          display: 'flex',
          alignItems: 'center',
          minHeight: '50px',
          cursor: 'pointer',
          borderTop: '1px solid #e9edef',
          '&:hover': {
            transition: 'all 0.4s',
            bgcolor: '#f0f2f5',
          },
        }}
      >
        <Typography
          variant='subtitle1'
          sx={{
            color: '#008069',
            fontSize: '1.1rem',
            padding: '12px 24px',
            fontWeight: '200',
            flexGrow: '1',
          }}
        >
          Contact on Whatsapp
        </Typography>
      </Box>
      <AddNewUser />
    </Box>
  );
};

export default NewChat;
