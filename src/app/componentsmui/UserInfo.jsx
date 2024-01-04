'use client';
import React, { useState, useContext, useEffect } from 'react';
import { Avatar, Box, Menu, MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GetAddedUsers } from '../Contexts/GetAddedUsers';
import { deleteDoc, db, doc } from '../firebase/friebaseConfig';
import { getLoggedUser } from '../Contexts/GetLoggedUser';
import { ThemeContext } from '../Contexts/ThemeContext';

const CustomMenu = ({ chatUser }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { user } = useContext(getLoggedUser);
  const { setCurrentChatUser } = useContext(GetAddedUsers);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const DeleteAddedUser = (deletedDocId) => {
    const contactedUsersRef = doc(
      db,
      'users',
      user.userId,
      'contactedUsers',
      deletedDocId
    );
    deleteDoc(contactedUsersRef);
    setCurrentChatUser({});
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { theme } = useContext(ThemeContext);

  const iconsCss = {
    color: theme.palette.text.primary,
    bgcolor: theme.palette.background.default,
  };
  return (
    <>
      <ExpandMoreIcon
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ color: iconsCss }}
      />

      <Menu
        className='moreIcon-sub'
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem className='moreIcon-sub' onClick={handleClose}>
          Archive Chat
        </MenuItem>
        <MenuItem className='moreIcon-sub' onClick={handleClose}>
          Mute notifications
        </MenuItem>
        <MenuItem
          className='moreIcon-sub'
          onClick={() => DeleteAddedUser(chatUser.id)}
        >
          Delete chat
        </MenuItem>
        <MenuItem className='moreIcon-sub' onClick={handleClose}>
          Pin chat
        </MenuItem>
        <MenuItem className='moreIcon-sub' onClick={handleClose}>
          Mark as unread
        </MenuItem>
        <MenuItem className='moreIcon-sub' onClick={handleClose}>
          Block
        </MenuItem>
      </Menu>
    </>
  );
};

const UserInfo = () => {
  const { addedUsers, setCurrentChatUser } = useContext(GetAddedUsers);

  const handleClick = async (chatUser) => {
    await setCurrentChatUser(chatUser);
    // console.log(chatUser);
  };
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {addedUsers.map((chatUser, index) => (
        <Box
          key={index}
          onClick={() => handleClick(chatUser)}
          sx={{
            // bgcolor: '#fff',
            // color: '#3b4a54',
            bgcolor: theme.palette.background.default,
            color: theme.palette.text.primary,
            display: 'flex',
            alignItems: 'center',
            minHeight: '50px',
            cursor: 'pointer',
            borderTop: '1px solid #e9edef',
            '&:hover': {
              transition: 'all 0.4s',
              // bgcolor: '#f0f2f5',
              bgcolor: theme.palette.hover.primary,
            },
          }}
        >
          <Box sx={{ padding: '8px 16px' }}>
            <Avatar alt='User' src={chatUser.proImgLink} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              padding: '3px',
            }}
          >
            <Box sx={{ flexGrow: '1', paddingRight: '10px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='body1'>{chatUser.name}</Typography>
                <Typography
                  variant='caption'
                  sx={{ color: '#667781', fontSize: '12px' }}
                >
                  {/* {timeNow} */}
                </Typography>
              </Box>
              <Box
                sx={{
                  color: '#667781',
                  fontSize: '12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography variant='body1'>{chatUser.bio}</Typography>

                <CustomMenu chatUser={chatUser} />
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default UserInfo;
