"use client"
import Box from '@mui/material/Box';
import { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { IconButton, Tooltip, Menu, Button, MenuItem, Divider } from '@mui/material';
import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
const Sidebar = () => {
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
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 20px ',
          color: '#54656f',
          bgcolor: '#f0f2f5',
          minHeight: '54px',
        }}
      >
        <Box>
          <AccountCircleOutlinedIcon fontSize='large' />
        </Box>
        <Box sx={{ display: 'flex', gap: '2px', cursor: 'pointer' }}>
          <Tooltip title='Communities'>
            <IconButton>
              <GroupsRoundedIcon fontSize='md'/>
            </IconButton>
          </Tooltip>
          <Tooltip title='Status'>
            <IconButton>
              <DonutLargeOutlinedIcon fontSize='md'/>
            </IconButton>
          </Tooltip>
          <Tooltip title='Channels'>
            <IconButton>
              <RadioButtonCheckedOutlinedIcon fontSize='md'/>
            </IconButton>
          </Tooltip>
          <Tooltip title='New chat'>
            <IconButton>
              <AddCommentRoundedIcon fontSize='md'/>
            </IconButton>
          </Tooltip>

            <Tooltip title='Menu'>
              <IconButton  id='basic-button'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
                <MoreVertOutlinedIcon fontSize='md'/>
              </IconButton>
            </Tooltip>
          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem className='moreIcon-sub' onClick={handleClose}>New Group</MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>New commuinty</MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>Starred messages</MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>Select chats</MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>Settings</MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>Log out</MenuItem>
            <Divider/>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>Get Whatsapp for Windows</MenuItem>
          </Menu>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
