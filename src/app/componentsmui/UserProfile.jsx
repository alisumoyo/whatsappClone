import React from 'react';
import { Box, Button, IconButton, Typography, Avatar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { PersonPinCircleOutlined } from '@mui/icons-material';
const UserProfile = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            height: '108px',
            bgcolor: '#008069',
            color: '#fff',
            display: 'flex',
            alignItems: 'flex-end',
            gap: '10px',
            padding: '0px 20px',
          }}
        >
          <IconButton sx={{ marginBottom: '16px' }}>
            <ArrowBackIcon sx={{ color: '#fff' }} />
          </IconButton>

          <Typography variant='h6' sx={{ flexGrow: '1', marginBottom: '20px' }}>
            Profile
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: '#f0f2f6',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            margin: '20px 0px',
          }}
        >
          <Box
            sx={{
              padding: '0px 25%',
              width: '100%',
              '&:hover': {
                bgcolor: '#fff',
              },
            }}
          >
            <label htmlFor='avatar-input' sx={{ cursor: 'pointer' }}>
              <Avatar
                src=''
                alt='userProImg'
                sx={{ width: 180, height: 180 }}
              />
              <input
                id='avatar-input'
                type='file'
                accept='image/*'
                // onChange={handleChange}
                style={{ display: 'none' }}
              />
            </label>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              minHeight: '78px',
              padding: '14px 30px',
              marginBottom: '10px',
              bgcolor: '#fff',
            }}
          >
            <Typography variant='subtitle1'>Your Name</Typography>
            <Typography variant='subtitle1' flexGrow={1}>
              AFAQ
            </Typography>
          </Box>
          <Box
            sx={{
              minHeight: '66px',
              padding: '14px 30px',
              marginBottom: '10px',
              bgcolor: '#f0f2f6',
            }}
          >
            <Typography variant='body1'>
              This is not your username or pin. This name will be visible to
              your WhatsApp contacts.
            </Typography>
          </Box>
          <Box
            sx={{
              minHeight: '78px',
              padding: '14px 30px',
              marginBottom: '10px',
              bgcolor: '#fff',
            }}
          >
            <Typography variant='subtitle1'>About</Typography>
            <Typography variant='subtitle1' flexGrow={1}>
              Bio Edit Input
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserProfile;
