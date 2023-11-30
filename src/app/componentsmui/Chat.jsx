'use client';
import { useState } from 'react';
import {
  Box,
  IconButton,
  InputBase,
  Tooltip,
  Typography,
  MenuItem,
  Menu,
  ListItemIcon,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import Button from '@mui/material/Button';
import VideocamIcon from '@mui/icons-material/Videocam';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
// import chatbg from '../assets/chatbg.jpg';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import AddIcon from '@mui/icons-material/Add';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import DescriptionIcon from '@mui/icons-material/Description';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PersonIcon from '@mui/icons-material/Person';
import PollIcon from '@mui/icons-material/Poll';
import LabelIcon from '@mui/icons-material/Label';
import { pink, purple, yellow } from '@mui/material/colors';

const Chat = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [send, setSend] = useState(null);

  const open = Boolean(anchorEl);
  const openDoc = Boolean(send);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickDoc = (event) => {
    setSend(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSend(null);
  };
  const chatbg =
    'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png';
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Avatar
            alt='User'
            src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
          <Box sx={{ fontSize: '14px', color: '#111b21' }}>
            <Typography variant='h6'>username</Typography>
            <Typography variant='p'>
              <small>Last seen today at 13:08</small>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ color: '#54656f' }}>
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
            <IconButton
              id='basic-button'
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MoreVertOutlinedIcon fontSize='md' />
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
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              Contact info
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              Select messages
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              Close chat
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              Mute notifications
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              Disappering messages
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              Clear chat
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              Delete chat
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              Report
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              Block
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      <Box
        sx={{
          flexGrow: '1',
          display: 'flex',
          flexDirection: 'column',

          backgroundImage: `url(${chatbg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          overflowY: 'auto',
          width: '100%',
          height: '300px',
        }}
      >
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
        <Typography variant='p'>HELLO</Typography>
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
        <IconButton
          id='basic-button'
          aria-controls={openDoc ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={openDoc ? 'true' : undefined}
          onClick={handleClickDoc}
        >
          <AddIcon
            sx={
              openDoc
                ? { transform: 'rotate(135deg)', transition: 'all 0.3s' }
                : { transition: 'all 0.3s' }
            }
          />
        </IconButton>
        <Menu
          sx={{
            '.css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
              borderRadius: ' 16px',
              bottom: '75px !important',
              left: '480px !important',
              top: 'unset !important',
            },
          }}
          className='moreIcon-sub'
          id='basic-menu'
          anchorEl={send}
          open={openDoc}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem className='moreIcon-sub' onClick={handleClose}>
            <ListItemIcon>
              <DescriptionIcon color='secondary' />
            </ListItemIcon>
            Document
          </MenuItem>
          <MenuItem className='moreIcon-sub' onClick={handleClose}>
            <ListItemIcon>
              <PhotoLibraryIcon color='success' />
            </ListItemIcon>
            Photos & Videos
          </MenuItem>
          <MenuItem className='moreIcon-sub' onClick={handleClose}>
            <ListItemIcon>
              <CameraAltIcon sx={{ color: pink[500] }} />
            </ListItemIcon>
            Photos & Videos
          </MenuItem>
          <MenuItem className='moreIcon-sub' onClick={handleClose}>
            <ListItemIcon>
              <PersonIcon sx={{ color: purple[500] }} />
            </ListItemIcon>
            Contact
          </MenuItem>
          <MenuItem className='moreIcon-sub' onClick={handleClose}>
            <ListItemIcon>
              <PollIcon sx={{ color: yellow[500] }} />
            </ListItemIcon>
            Poll
          </MenuItem>
          <MenuItem className='moreIcon-sub' onClick={handleClose}>
            <ListItemIcon>
              <LabelIcon color='primary' />
            </ListItemIcon>
            Label
          </MenuItem>
        </Menu>

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
