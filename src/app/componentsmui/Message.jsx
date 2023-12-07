import { Box, Typography } from '@mui/material';
import React from 'react';

const Message = ({ message, isSentByMe }) => {
  return (
    <Box
      sx={{
        borderRadius: '16px 0px 16px 16px',
        padding: '6px 12px 6px 8px',
        marginBottom:'20px',
        bgcolor: isSentByMe ? '#d9fdd3' : '#f5f7fa',
        maxWidth: '360px',
        width: 'fit-content',
        position: 'relative',
        top: '5px',
        left:'400px'            
      }}
    >
      <Typography variant='h3' sx={{ fontSize: '14px',maxWidth: '360px', }}>
        {message}
      </Typography>
    </Box>
  );
};

export default Message;
