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
  MenuItem,
  Divider,
  Avatar,
} from '@mui/material';
import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import { DataContext } from '../Contexts/MyContextProvider';
import { getLoggedUser } from '../Contexts/GetLoggedUser';
import { useRouter } from 'next/router';
import { ThemeContext, useThemeContext } from '../Contexts/ThemeContext';
import Card from './SureBox';
import DialogBox from './DialogBox';
import SureBox from './SureBox';

const ChatHead = () => {
  const router = useRouter();
  const { user, logout } = useContext(getLoggedUser);
  const { setOpenSettings, openProfile, setOpenProfile, setOpenNewChat } =
    useContext(DataContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { theme } = useThemeContext();

  const iconsCss = {
    color: theme.palette.text.primary,
    bgcolor: theme.palette.background.default,
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
          color: theme.palette.text.primary,
          bgcolor: theme.palette.background.default,
          minHeight: '54px',
        }}
      >
        <Box>
          <Avatar src={user?.proImgLink} onClick={() => setOpenProfile(true)} />
        </Box>
        <Box sx={{ display: 'flex', gap: '2px', cursor: 'pointer' }}>
          <Tooltip title='Communities'>
            <IconButton>
              <GroupsRoundedIcon fontSize='md' sx={{ color: iconsCss }} />
            </IconButton>
          </Tooltip>
          <Tooltip title='Status'>
            <IconButton>
              <DonutLargeOutlinedIcon fontSize='md' sx={{ color: iconsCss }} />
            </IconButton>
          </Tooltip>
          <Tooltip title='Channels'>
            <IconButton>
              <RadioButtonCheckedOutlinedIcon
                fontSize='md'
                sx={{ color: iconsCss }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title='New chat'>
            <IconButton onClick={() => setOpenNewChat(true)}>
              <AddCommentRoundedIcon fontSize='md' sx={{ color: iconsCss }} />
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
              <MoreVertOutlinedIcon fontSize='md' sx={{ color: iconsCss }} />
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
            // onClick={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem className='moreIcon-sub'>New Group</MenuItem>
            <MenuItem className='moreIcon-sub'>New commuinty</MenuItem>
            <MenuItem className='moreIcon-sub'>Starred messages</MenuItem>
            <MenuItem className='moreIcon-sub'>Select chats</MenuItem>
            <MenuItem
              className='moreIcon-sub'
              onClick={() => setOpenSettings(true)}
            >
              Settings
            </MenuItem>

            <DialogBox
              openBtn={<MenuItem className='moreIcon-sub'>Log out</MenuItem>}
              content={<SureBox />}
            />
            <Divider />
            <MenuItem className='moreIcon-sub'>
              Get Whatsapp for Windows
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </>
  );
};

export default ChatHead;
