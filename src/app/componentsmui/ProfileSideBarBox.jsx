import { Avatar, Box, Typography } from '@mui/material';
import React, { useState } from 'react';

const ProfileSideBarBox = () => {
  const [profileImg, setProfileImg] = useState(null);

  const handleChange = (e) => {
    const userImage = e.target.files[0];

    if (userImage) {
      const imageUrl = URL.createObjectURL(userImage);
      setProfileImg(imageUrl);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: '#fff',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
          bgcolor: '#f0f2f6',
        },
      }}
    >
      <Box sx={{ padding: '8px 20px' }}>
        <label
          htmlFor='avatar-input'
          sx={{ width: 48, height: 48, bgcolor: 'red', cursor: 'pointer' }}
        >
          <Avatar src={profileImg} alt='userProImg' sx={{ width: 56, height: 56 }} />
          <input
            id='avatar-input'
            type='file'
            accept='image/*'
            onChange={handleChange}
            style={{ display: 'none' }}
          />
        </label>
      </Box>
      <Box sx={{ flexGrow: '1' }}>
        <Typography variant='h6' sx={{ color: '#111b21', fontSize: '16px' }}>
          UserName
        </Typography>
        <Typography variant='span' sx={{ color: '#54656f', fontSize: '12px' }}>
          Bio: Tell Something About Yourself
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileSideBarBox;
