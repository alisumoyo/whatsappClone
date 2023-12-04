import React, { useContext } from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchField from './SearchField';
import SettingsSideBox from './SettingsSideBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LockIcon from '@mui/icons-material/Lock';
import SecurityIcon from '@mui/icons-material/Security';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';
import HelpIcon from '@mui/icons-material/Help';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import LogoutIcon from '@mui/icons-material/Logout';
import ProfileSideBarBox from './ProfileSideBarBox';
import { DataContext } from '../Contexts/MyContextProvider';
import DialogBox from './DialogBox';
import ThemeCard from './ThemeCard';
import AddNewUser from './AddNewUser';
import SideBarHeading from './SideBarHead';
import { GetRegUsersContext } from '../Contexts/getRegUsers';

const NewChat = ({ sx }) => {
  const { openNewChat, setOpenNewChat } = useContext(DataContext);
  const { fetchData } = useContext(GetRegUsersContext);
  // const {userCollection,setSearchText}=useContext(GetRegUsersContext)
  const handleEnter = (value) => {
    fetchData(value);

    console.log(value);
  };

  return (
    <Box
      sx={sx}
      style={
        openNewChat
          ? { transform: 'translateX(0%)' }
          : { transform: 'translateX(-100%)' }
      }
    >
      {/* <Box
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
        <IconButton
          onClick={() => setOpenNewChat(false)}
          sx={{ marginBottom: '16px' }}
        >
          <ArrowBackIcon sx={{ color: '#fff' }} />
        </IconButton>

        <Typography variant='h6' sx={{ flexGrow: '1', marginBottom: '20px' }}>
          New Chat
        </Typography>
      </Box> */}
      <SideBarHeading label='New Chat' onClick={() => setOpenNewChat(false)} />
      <SearchField onKeyPress={(value) => handleEnter(value)} />
      <Box
        sx={{
          bgcolor: '#fff',
          display: 'flex',
          alignItems: 'center',
          minHeight: '50px',
          cursor: 'pointer',
          borderTop: '1px solid #e9edef',
          '&:hover': {
            transition: 'all 0.4s',
            bgcolor: '#f0f2f5',
          },
        }}
      >
        <Typography
          variant='subtitle1'
          sx={{
            color: '#008069',
            fontSize: '1.1rem',
            padding: '12px 24px',
            fontWeight: '200',
            flexGrow: '1',
          }}
        >
          Contact on Whatsapp
        </Typography>
      </Box>
      <AddNewUser />
    </Box>
  );
};

export default NewChat;
