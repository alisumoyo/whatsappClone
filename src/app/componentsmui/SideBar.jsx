'use client';
import Box from '@mui/material/Box';
import { useContext, useState } from 'react';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {
  IconButton,
  Tooltip,
  Menu,
  Button,
  MenuItem,
  Divider,
  Avatar,
} from '@mui/material';
import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import { DataContext } from '../Contexts/MyContextProvider';
import { getLoggedUser } from '../Contexts/GetLoggedUser';
import {
  ref,
  storage,
  uploadBytes,
  auth,
  signOut,
} from '../firebase/friebaseConfig';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();
  const { user } = useContext(getLoggedUser);

  const { setOpenSettings } = useContext(DataContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log('SignOut Successfull');
        router.push('signin');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openSettingsClick = () => {
    setOpenSettings(true);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 16px ',
          color: '#54656f',
          bgcolor: '#f0f2f5',
          minHeight: '54px',
        }}
      >
        <Box>
          <Avatar>AK</Avatar>
        </Box>
        {user?.email}
        <Box sx={{ display: 'flex', gap: '2px', cursor: 'pointer' }}>
          <Tooltip title='Communities'>
            <IconButton>
              <GroupsRoundedIcon fontSize='md' />
            </IconButton>
          </Tooltip>
          <Tooltip title='Status'>
            <IconButton>
              <DonutLargeOutlinedIcon fontSize='md' />
            </IconButton>
          </Tooltip>
          <Tooltip title='Channels'>
            <IconButton>
              <RadioButtonCheckedOutlinedIcon fontSize='md' />
            </IconButton>
          </Tooltip>
          <Tooltip title='New chat'>
            <IconButton>
              <AddCommentRoundedIcon fontSize='md' />
            </IconButton>
          </Tooltip>

          <Tooltip title='Menu'>
            <IconButton
              id='basic-button'
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MoreVertOutlinedIcon fontSize='md' />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{
              '.css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
                borderRadius: ' 16px',
                // bottom: '75px !important',
                left: '190px !important',
                top: '70px !important',
              },
            }}
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              New Group
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              New commuinty
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              Starred messages
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              Select chats
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={openSettingsClick}>
              Settings
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={logout}>
              Log out
            </MenuItem>
            <Divider />
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              Get Whatsapp for Windows
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
