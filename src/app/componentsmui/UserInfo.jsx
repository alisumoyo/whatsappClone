import React from 'react';
import { Box, Button } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PushPinTwoToneIcon from '@mui/icons-material/PushPinTwoTone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const UserInfo = () => {
  return (
    <>
      <Box
        className='user_info'
        sx={{
          bgcolor: '#fff',
          color: '#3b4a54',
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
            borderBottom: '1px solid #333',
          }}
        >
          <Box sx={{ flexGrow: '1' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>NAME :</p>
              {/* <PushPinTwoToneIcon sx={{ marginRight: '10px' }} />npm e */}
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              overflow: 'hidden',
            }}
          >
            <Typography variant='p'>Message</Typography>
            <ExpandMoreIcon sx={{ marginRight: '10px' }} />
            {/* <MoreVertIcon /> */}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserInfo;
