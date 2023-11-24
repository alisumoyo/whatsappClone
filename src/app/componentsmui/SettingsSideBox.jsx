import { Box, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

const SettingsSideBox = ({ icon, text, onClick }) => {
  return (
    <>
      <Box
        onClick={onClick}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#3b4a54',
          height: '60px',
          bgcolor: '#fff',
          cursor: 'pointer',
          '&:hover': {
            transition: 'all 0.3s',
            bgcolor: '#f0f2f5',
          },
        }}
      >
        <ListItemIcon
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#3b4a54',
          }}
        >
          {icon}
        </ListItemIcon>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            borderBottom: '1px solid #e9edef',
          }}
        >
          <ListItemText
            sx={{ flexGrow: '1', color: '#3b4a54', fontWeight: '100' }}
          >
            {text}
          </ListItemText>
        </Box>
      </Box>
    </>
  );
};

export default SettingsSideBox;
