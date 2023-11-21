"use client"
import { useState } from 'react';
import { Box, IconButton, InputBase, Tooltip,Divider, Typography,MenuItem,Menu } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import Button from '@mui/material/Button';
import VideocamIcon from '@mui/icons-material/Videocam';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
// import chatbg from '../assets/chatbg.jpg';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

const Chat = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const chatbg =
    'https://ghostcode.in/content/images/wordpress/2016/09/super_hero_whatsapp_background_by_x_ama-d8fr7iz.jpg';
  return (
    <>
      <Box
        sx={{
          width: '100%',
          padding: '8px 16px ',
          bgcolor: '#f0f2f5',
          minHeight: '54px',
          maxHeight: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        
          <Box sx={{  display:'flex',alignItems:'center',gap:'10px'}}>
            <Avatar alt='User' src='/static/images/avatar/1.jpg' />
            <Box sx={{fontSize:'14px',color:'#111b21'}}>
            <Typography variant='h6'>username</Typography>
            <Typography variant='p'><small>Last seen today at 13:08</small></Typography>
            </Box>
          </Box>
          <Box sx={{color: '#54656f',}}>
            <Tooltip title='Get the App for calling'>
            <Button
              variant='filledTonal'
              sx={{
                borderRadius: '25px',
              }}
            >
              <VideocamIcon />
              <ExpandMoreIcon />
            </Button>
            </Tooltip>
            <Tooltip title='Seacrh...'>
            <IconButton>
              <SearchIcon />
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
          className='moreIcon-sub'
            id='basic-menu'
            anchorEl={anchorEl}

            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
              
            }}
          >
            <MenuItem className='moreIcon-sub' onClick={handleClose}>Contact info</MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>Select messages</MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>Close chat</MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>Mute notifications</MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>Disappering messages</MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>Clear chat</MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>Delete chat</MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>Report</MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>BLock</MenuItem>
          </Menu>
          </Box>
        </Box>

{/* CHAT BG */}
      <Box
        sx={{
          flexGrow: '1',
          height: 'auto',
          backgroundImage: `url(${chatbg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          overflowY:'auto'
        }}
      >
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        
      </Box>
      <Box
        sx={{
          display: 'flex',
          bgcolor: '#f0f2f5',
          width: '100%',
          padding: '8px 16px 8px 30px ',
          color: '#8696a0',
          maxHeight: '54px',
        }}
      >
        <IconButton>
          <SentimentSatisfiedAltOutlinedIcon />
        </IconButton>
        <IconButton>
          <AddIcon />
        </IconButton>

        <InputBase
          size='small'
          placeholder='Type a Message'
          sx={{
            width: '100%',
            padding: '6px 14px',
            bgcolor: '#fff',
            borderRadius: '25px',
            flexGrow: '1',
          }}
          variant='outlined'
        />
        <IconButton>
          <KeyboardVoiceIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default Chat;
