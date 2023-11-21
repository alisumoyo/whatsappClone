'use client';
import React from 'react';
import { useState } from 'react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const UserInfo = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box
        className='user_info'
        sx={{
          bgcolor: '#fff',
          color: '#3b4a54',
          display: 'flex',
          alignItems: 'center',
          minHeight: '54px',
          cursor: 'pointer',
          '&:hover': {
            transition: 'all 0.4s',
            bgcolor: '#f0f2f5',
          },
          borderTop: '1px solid #e9edef',
        }}
      >
        <Box sx={{ padding: '12px 16px' }}>
          <AccountCircleOutlinedIcon fontSize='large' />
        </Box>
        <Box
          sx={{
            display: 'block',
            justifyContent: 'center',
            width: '100%',
            padding: '3px',
          }}
        >
          <Box sx={{ flexGrow: '1' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>Name :</p>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              overflow: 'hidden',
            }}
          >
            <Typography variant='p'>Message</Typography>
            <IconButton
              sx={{ marginRight: '10px' }}
              id='basic-button'
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <ExpandMoreIcon />
            </IconButton>
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
                Archieve Chats
              </MenuItem>
              <MenuItem className='moreIcon-sub' onClick={handleClose}>
                Mute notifications
              </MenuItem>
              <MenuItem className='moreIcon-sub' onClick={handleClose}>
                Exit group
              </MenuItem>
              <MenuItem className='moreIcon-sub' onClick={handleClose}>
               Pin chat
              </MenuItem>
              <MenuItem className='moreIcon-sub' onClick={handleClose}>
                Mark as read
              </MenuItem>
             
            </Menu>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserInfo;
