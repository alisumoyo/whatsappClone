import React, { useContext } from 'react';
import { Box, Button, IconButton, Typography, Avatar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getLoggedUser } from '../Contexts/GetLoggedUser';
import { DataContext } from '../Contexts/MyContextProvider';

const UserProfile = ({ sx }) => {
  const { user } = useContext(getLoggedUser);
  const { openProfile, setOpenProfile } = useContext(DataContext);

  return (
    <>
      <Box
        sx={sx}
        style={
          openProfile
            ? { transform: 'translateX(0%)', bgcolor: '#f0f2f6' }
            : { transform: 'translateX(-100%)' }
        }
      >
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
          <IconButton
            onClick={() => setOpenProfile(false)}
            sx={{ marginBottom: '16px' }}
          >
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
            justifyContent: 'center',
            cursor: 'pointer',
            padding: '20px 0px',
          }}
        >
          <label htmlFor='avatar-input' sx={{ cursor: 'pointer' }}>
            <Avatar
              src={user?.proImgLink}
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

        <Box>
          <Box
            sx={{
              minHeight: '66px',
              padding: '14px 30px',
              marginBottom: '10px',
              bgcolor: '#fff',
            }}
          >
            <Typography
              variant='subtitle1'
              sx={{ color: '#008069', fontSize: '12px' }}
            >
              Your Name
            </Typography>
            <Typography
              variant='subtitle1'
              flexGrow={1}
              sx={{ color: '#3b4a54', fontSize: '14px' }}
            >
              {user?.name}
            </Typography>
          </Box>
          <Box
            sx={{
              minHeight: '66px',
              padding: '14px 30px',
              bgcolor: '#f0f2f6',
            }}
          >
            <Typography
              variant='body1'
              sx={{ color: '#667781', fontSize: '0.8rem', lineHeight: '1.4' }}
            >
              This is not your username or pin. This name will be visible to
              your WhatsApp contacts.
            </Typography>
          </Box>
          <Box
            sx={{
              minHeight: '66px',
              padding: '14px 30px',
              bgcolor: '#fff',
            }}
          >
            <Typography
              variant='subtitle1'
              sx={{ color: '#008069', fontSize: '12px' }}
            >
              About
            </Typography>
            <Typography
              variant='subtitle1'
              flexGrow={1}
              sx={{ color: '#3b4a54', fontSize: '14px' }}
            >
              {user?.name}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserProfile;
