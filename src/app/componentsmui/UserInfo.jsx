import React from 'react';
import { Box, Button } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PushPinTwoToneIcon from '@mui/icons-material/PushPinTwoTone';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const UserInfo = () => {
  return (
    <>
      <Box
        className='user_info'
        sx={{
          bgcolor: '#fff',
          color:'#3b4a54',
          display: 'flex',
          alignItems: 'center',
          minHeight: '60px',
        }}
      >
        <Box sx={{ padding: '12px 16px' }}>
          <AccountCircleOutlinedIcon fontSize='large' />
        </Box>
        <Box
          sx={{
            display: 'block',
            justifyContent: 'center',
            width: '100%',
            padding: '3px',
          }}
        >
          <Box sx={{ flexGrow: '1' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>NAME :</p>
              <PushPinTwoToneIcon sx={{ marginRight: '10px' }} />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              overflow: 'hidden',
            }}
          >
            <p>LATEST TEXT MEASSGAE ass</p>
            <MoreVertIcon sx={{ marginRight: '10px' }} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserInfo;
