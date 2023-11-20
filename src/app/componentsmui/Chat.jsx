import { Box, IconButton, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import Button from '@mui/material/Button';
import VideocamIcon from '@mui/icons-material/Videocam';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const Chat = () => {
  return (
    <>
        <Box
          sx={{
            position: 'absolute',
            top: '0px',
            left: '400px',
            width: '900px',
            overflow: 'none',
            padding: '8px 16px 8px 30px ',
            color: '#54656f',
            bgcolor: '#f0f2f5',
            maxHeight: '54px',
            // display: 'flex',
            // alignItems:'center'
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
            <Box sx={{ display: 'flex',alignItems:'center',gap:'10px' }}>
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
    </>
  );
};

export default Chat;
