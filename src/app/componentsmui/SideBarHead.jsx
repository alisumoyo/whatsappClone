import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
const SideBarHeading = ({onClick,label}) => {
  return (
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
      <IconButton sx={{ marginBottom: '16px' }} onClick={onClick}>
        <ArrowBack sx={{ color: '#fff' }} />
      </IconButton>

      <Typography variant='h6' sx={{ flexGrow: '1', marginBottom: '20px' }}>
       {label}
      </Typography>
    </Box>
  );
};

export default SideBarHeading;
