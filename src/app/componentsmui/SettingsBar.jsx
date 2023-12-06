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
import SideBarHeading from './SideBarHead';

const SettingsBar = ({ sx }) => {
  const { openSettings, setOpenSettings } = useContext(DataContext);
  const SideBarIconBox = [
    {
      icon: <NotificationsIcon fontSize='small' />,
      text: 'Notifications',
      method: () => alert('hello'),
    },
    {
      icon: <LockIcon fontSize='small' />,
      text: 'Privacy',
    },
    {
      icon: <SecurityIcon fontSize='small' />,
      text: 'Security',
    },
    {
      content: <ThemeCard />,
      button: (
        <SettingsSideBox
          icon={<Brightness6Icon fontSize='small' />}
          text='Theme'
        />
      ),
    },
    {
      icon: <DownloadIcon fontSize='small' />,
      text: 'Media auto-download',
    },
    {
      icon: <DescriptionIcon fontSize='small' />,
      text: 'Request account info',
    },

    {
      icon: <KeyboardIcon fontSize='small' />,
      text: 'Keyboard shortcuts',
    },
    {
      icon: <HelpIcon fontSize='small' />,
      text: 'Help',
    },
    {
      icon: <LogoutIcon fontSize='small' />,
      text: 'Logout',
    },
  ];

  return (
    <Box
      sx={sx}
      style={
        openSettings
          ? { transform: 'translateX(0%)' }
          : { transform: 'translateX(-100%)' }
      }
    >
      <SideBarHeading label='Settings' onClick={() => setOpenSettings(false)} />
      <SearchField />
      <Box
        sx={{
          overflow: 'auto',
          flexGrow: '1',
        }}
      >
        <ProfileSideBarBox />
        {SideBarIconBox.map((item, index) => (
          <Box key={index}>
            {item.content && item.button ? (
              <DialogBox
                key={index}
                button={item.button}
                content={item.content}
              />
            ) : (
              <SettingsSideBox
                key={index}
                icon={item.icon}
                text={item.text}
                onClick={item.method}
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SettingsBar;
