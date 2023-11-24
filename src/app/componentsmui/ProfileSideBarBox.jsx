import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';

const ProfileSideBarBox = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: '#fff',
          display: 'flex',
          alignItems: 'center',
          cursor:'pointer',
          '&:hover': {
            bgcolor: '#f0f2f6',
          },
        }}
      >
        <Box sx={{ padding: '20px' }}>
          <Avatar fontSize='small'>U</Avatar>
        </Box>
        <Box sx={{ flexGrow: '1' }}>
          <Typography variant='h6' sx={{color:'#111b21',fontSize:'16px',}}>UserName</Typography>
          <Typography variant='span'sx={{color:'#54656f',fontSize:'12px'}}>Bio Tell Something About Yourself</Typography>
        </Box>
      </Box>
    </>
  );
};

export default ProfileSideBarBox;
