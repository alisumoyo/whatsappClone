'use client';
import React from 'react';
import { useState } from 'react';
import { Avatar, Box, IconButton, Menu, MenuItem } from '@mui/material';
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
        sx={{
          bgcolor: '#fff',
          color: '#3b4a54',
          color:'#111b21',
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
        <Avatar alt='User' src='' />
          {/* <AccountCircleOutlinedIcon fontSize='large' /> */}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            padding: '3px',
          }}
        >
          <Box sx={{ flexGrow: '1' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='p'>Name :</Typography>
              <Typography variant="p" sx={{color:'#667781',fontSize:'12px'}}>12/3/2023</Typography>
            </Box>
            <Box sx={{ color:'#667781',fontSize:'12px',display: 'flex', justifyContent: 'space-between',alignItems:'center' }}>
          <Typography variant='p'>Message</Typography>
          <ExpandMoreIcon  id='basic-button'
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}/>
              </Box>
          </Box>
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
    </>
  );
};

export default UserInfo;
