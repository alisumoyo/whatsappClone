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

const SettingsBar = () => {
  const { setOpenSettings } = useContext(DataContext);

  const closeSettings = () => {
    setOpenSettings(false);
  };
  return (
    <>
      <Box
        sx={{
          height: '108px',
          bgcolor: '#008069',
          color: '#fff',
          display: 'flex',
          alignItems: 'flex-end',
          gap: '30px',
          padding: '25px 20px',
        }}
      >
        <IconButton onClick={closeSettings}>
          <ArrowBackIcon sx={{ color: '#fff' }} />
        </IconButton>
        <Typography variant='4'>Settings</Typography>
      </Box>
      <SearchField />
      <Box sx={{ height: '100%', overflow: 'auto', flexGrow: '1' }}>
        <ProfileSideBarBox />
        <SettingsSideBox
          icon={<NotificationsIcon fontSize='small' />}
          text='Notifications'
        />
        <SettingsSideBox icon={<LockIcon fontSize='small' />} text='Privacy' />
        <SettingsSideBox
          icon={<SecurityIcon fontSize='small' />}
          text='Security'
        />

        <DialogBox
          button={
            <SettingsSideBox
              icon={<Brightness6Icon fontSize='small' />}
              text='Theme'
            />
          }
          content={<ThemeCard />}
        />
        <SettingsSideBox
          icon={<DownloadIcon fontSize='small' />}
          text='Media auto-download'
        />
        <SettingsSideBox
          icon={<DescriptionIcon fontSize='small' />}
          text='Request account info'
        />
        <SettingsSideBox
          icon={<KeyboardIcon fontSize='small' />}
          text='Keyboard shortcuts'
        />
        <SettingsSideBox icon={<HelpIcon fontSize='small' />} text='Help' />
        <SettingsSideBox icon={<LogoutIcon fontSize='small' />} text='Logout' />
      </Box>
    </>
  );
};

export default SettingsBar;
