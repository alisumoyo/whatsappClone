import { Box, IconButton, InputBase, Typography } from '@mui/material';
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
  const chatbg =
    'https://ghostcode.in/content/images/wordpress/2016/09/super_hero_whatsapp_background_by_x_ama-d8fr7iz.jpg';
  return (
    <>
      <Box
        sx={{
          width: '100%',
          padding: '8px 16px 8px 30px ',
          color: '#54656f',
          bgcolor: '#f0f2f5',
          maxHeight: '54px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexGrow: '1',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Avatar alt='User' src='/static/images/avatar/1.jpg' />
            <Typography variant='h6'>Name :</Typography>
          </Box>
          <Box>
            <Button
              variant='filledTonal'
              sx={{
                borderRadius: '25px',
              }}
            >
              <VideocamIcon />
              <ExpandMoreIcon />
            </Button>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <MoreVertOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
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
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
        <h1>HELLO</h1>
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
