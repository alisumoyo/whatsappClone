import React, { useContext } from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchField from './SearchField';
import SettingsSideBox from './SettingsSideBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SecurityIcon from '@mui/icons-material/Security';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import SouthIcon from '@mui/icons-material/South';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import SummarizeIcon from '@mui/icons-material/Summarize';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import ProfileSideBarBox from './ProfileSideBarBox';
import { DataContext } from '../Contexts/MyContextProvider';

const SettingsBar = () => {
  const { setOpenSettings } = useContext(DataContext);

  // const ={{icon:<LogoutIcon/>,text:'logout'}}

  //  "Keyboard shortcuts"
  //  "Request account info"
  //  "Help"
  //  "Privacy"
  //  "Media auto-download"
  //  "Logout"
  //  "Chat Wallpaper"
  //  "Theme"
  //  "Security"
  //  "Notifications"
  const closeSettings = () => {
    setOpenSettings(false);
  };
  return (
    <>
      <Box
        sx={{
          width: '400px',
          height: '100%',
          bgcolor: '#f0f2f6',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            height: '108px',
            bgcolor: '#008069',
            display: 'flex',
            alignItems: 'flex-end',
            gap: '30px',
            padding: '25px 20px',
          }}
        >
          <IconButton onClick={closeSettings}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant='4'>Settings</Typography>
        </Box>
        <SearchField />
        <ProfileSideBarBox />
        <Box sx={{ height: '100%', overflow: 'auto', flexGrow: '1' }}>
          <SettingsSideBox
            icon={<NotificationsIcon fontSize='small' />}
            text='Notifications'
          />
          <SettingsSideBox
            icon={<LockOpenIcon fontSize='small' />}
            text='Notifications'
          />
          <SettingsSideBox
            icon={<SecurityIcon fontSize='small' />}
            text='Notifications'
          />
          <SettingsSideBox
            icon={<Brightness6Icon fontSize='small' />}
            text='Notifications'
          />
          <SettingsSideBox
            icon={<SouthIcon fontSize='small' />}
            text='Notifications'
          />
          <SettingsSideBox
            icon={<NewReleasesIcon fontSize='small' />}
            text='Notifications'
          />
          <SettingsSideBox
            icon={<SummarizeIcon fontSize='small' />}
            text='Notifications'
          />
          <SettingsSideBox
            icon={<HelpOutlineIcon fontSize='small' />}
            text='Notifications'
          />
          <SettingsSideBox
            icon={<LogoutIcon fontSize='small' />}
            text='Notifications'
          />
        </Box>
      </Box>
    </>
  );
};

export default SettingsBar;
