import { Box, Button } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import React from 'react';
import ChatBg from './ChatBg';

const Layout = () => {
  return (
    <>
      <Box sx={{ width: '100vw', height: '100vh', bgcolor: '#f3f3f3' }}>
        <Box sx={{ height: '10%', width: '100vw', bgcolor: '#00a884' }}></Box>
      </Box>
      <Box
        sx={{
          width: '90vw',
          height: '90vh',
          bgcolor: 'red',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          margin: 'auto',
          display: 'flex',
        }}
      >
        <Box
          sx={{
            width: '400px',
            height: '100%',
            bgcolor: 'blue',
          }}
        >
          <Box
            className='user-info'
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px 16px 8px 30px ',
              color: '#fff',
              bgcolor: '#333',
              minHeight: '58px',
            }}
          >
            <Box>
              <AccountCircleOutlinedIcon />
            </Box>
            <Box sx={{ display: 'flex', gap: '16px' }}>
              <GroupsOutlinedIcon />
              <DonutLargeOutlinedIcon />
              <RadioButtonCheckedOutlinedIcon />
              <AddBoxOutlinedIcon />
              <MoreVertOutlinedIcon />
            </Box>
          </Box>
        </Box>
        <Box sx={{ flexGrow: '1', height: '100%', bgcolor: '#e9edef' }}>
          <ChatBg />
        </Box>
      </Box>
      <Button></Button>
    </>
  );
};

export default Layout;
