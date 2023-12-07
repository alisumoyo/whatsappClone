'use client';
import React from 'react';
import { useState, useContext } from 'react';
import { Avatar, Box, IconButton, Menu, MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GetAddedUsers } from '../Contexts/GetAddedUsers';
import { deleteDoc, db, doc } from '../firebase/friebaseConfig';
import { getLoggedUser } from '../Contexts/GetLoggedUser';

const CustomMenu = ({ chatUser }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { user } = useContext(getLoggedUser);

  const { addedUsers } = useContext(GetAddedUsers);

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
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <ExpandMoreIcon
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
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

const UserInfo = ({ onClick }) => {
  const { addedUsers, setCurrentChatUser } = useContext(GetAddedUsers);

  const handleClick = (chatUser) => {
    setCurrentChatUser(chatUser);
    onClick();
  };

  return (
    <>
      {addedUsers.map((chatUser, index) => (
        <Box
          key={index}
          onClick={()=>handleClick(chatUser)}
          sx={{
            bgcolor: '#fff',
            color: '#3b4a54',
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
                  {chatUser.id}
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
