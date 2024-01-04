import React, { useContext } from 'react';
import { Box, InputBase, Tooltip, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import { GetRegUsersContext } from '../Contexts/getRegUsers';
import { ThemeContext } from '../Contexts/ThemeContext';

const SearchField = ({ onKeyPress }) => {
  // const { setSearchText } = useContext(GetRegUsersContext);

  const handleChange = (e) => {
    // setSearchText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && onKeyPress) onKeyPress(e.target.value);
  };
  const { theme } = useContext(ThemeContext);
  const iconsCss = {
    color: theme.palette.text.primary,
    bgcolor: theme.palette.background.default,
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px 6px',
          color: '#54656f',
          bgcolor: '#fff',
          bgcolor: theme.palette.background.default,
          color: theme.palette.text.primary,
          cursor: 'pointer',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            // bgcolor: '#f0f2f5',
            bgcolor: theme.palette.hover.primary,
            borderRadius: '8px',
            padding: '0px 8px',
            flexGrow: '1',
          }}
        >
          <Search sx={{ margin: '0px 10px' }} fontSize='small' />
          <Tooltip title='Search input text box'>
            <InputBase
              type='search'
              placeholder='Search or start new chat'
              // onChange={handleChange}
              onKeyDown={handleKeyPress}
              sx={{
                width: '100%',
                bgcolor: '#f0f2f5',
                bgcolor: theme.palette.hover.primary,
                color: theme.palette.text.primary,
                padding: '0px 8px 0px 4px',
              }}
              variant='text'
            />
          </Tooltip>
        </Box>
        <Tooltip title='Unread chats filters'>
          <IconButton>
            <FilterListOutlinedIcon fontSize='small' sx={{ color: iconsCss }} />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
};

export default SearchField;
