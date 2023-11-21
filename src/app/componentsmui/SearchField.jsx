import React from 'react';
import { Box,  InputBase, Tooltip,IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

const SearchField = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px 6px',
          color:'#54656f',
          bgcolor: '#fff',
          cursor: 'pointer',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: '#f0f2f5',
            borderRadius: '8px',
            padding: '0px 8px',
            flexGrow: '1',
          }}
        >
          <Search sx={{ margin: '0px 10px' }} fontSize='small'/>
        <Tooltip title="Search input text box">
          
          <InputBase
          type='search'
            placeholder='Search or start new chat'
            sx={{
              width: '100%',
              bgcolor: '#f0f2f5',
              padding: '0px 8px 0px 4px',
            }}
            variant='text'
          /></Tooltip>
        </Box>
        <Tooltip title="Unread chats filters">
          
        <IconButton >
        <FilterListOutlinedIcon  fontSize='small'/>
        </IconButton>
        </Tooltip>
      </Box>
    </>
  );
};

export default SearchField;
