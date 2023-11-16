import React from 'react';
import { Box, TextField, InputBase } from '@mui/material';
import { Search } from '@mui/icons-material';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';

const SearchField = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8px 6px',
          bgcolor: '#fff',
          cursor:'pointer'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: '#f0f2f5',
            borderRadius: '8px',
            padding: '4px ',
            flexGrow:'1'

          }}
        >
          <Search sx={{ margin: '0px 10px' }} />
          <InputBase
            size='small'
           placeholder='Search or start new chat'
            sx={{
              width: '100%',
            }}
            variant='outlined'
          />
        </Box>
        <MarkUnreadChatAltOutlinedIcon sx={{ margin: '0px 10px' }} />
      </Box>
    </>
  );
};

export default SearchField;
