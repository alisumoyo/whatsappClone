import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import SearchField from './SearchField';
import { DataContext } from '../Contexts/MyContextProvider';
import AddNewUser from './AddNewUser';
import SideBarHeading from './SideBarHead';
import { GetRegUsersContext } from '../Contexts/getRegUsers';
import { useState } from 'react';
import { getLoggedUser } from '../Contexts/GetLoggedUser';
import { ThemeContext } from '../Contexts/ThemeContext';

const NewChat = ({ sx }) => {
  const { openNewChat, setOpenNewChat } = useContext(DataContext);
  const { user } = useContext(getLoggedUser);

  const { fetchData } = useContext(GetRegUsersContext);
  const handleEnter = (value) => {
    fetchData(value, user);
  };
const {theme}=useContext(ThemeContext);
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
          bgcolor: theme.palette.background.default,
          display: 'flex',
          alignItems: 'center',
          minHeight: '50px',
          cursor: 'pointer',
          borderTop: '1px solid #e9edef',
          '&:hover': {
            transition: 'all 0.4s',
            bgcolor: '#f0f2f5',
            bgcolor: theme.palette.hover.primary,
          },
        }}
      >
        <Typography
          variant='subtitle1'
          sx={{
            color: '#008069',
            bgcolor: theme.palette.background.default,
            fontSize: '1.1rem',
            padding: '12px 24px',
            fontWeight: '200',
          }}
        >
          Contact on Whatsapp
        </Typography>
      </Box>
      <Box sx={{ flexGrow: '1', height: '100%', overflow: 'auto' }}>
        <AddNewUser />
      </Box>
    </Box>
  );
};

export default NewChat;
