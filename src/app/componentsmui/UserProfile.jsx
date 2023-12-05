import React, { useContext, useState } from 'react';
import { Box, Button, IconButton, Typography, Avatar } from '@mui/material';
import { getLoggedUser } from '../Contexts/GetLoggedUser';
import { DataContext } from '../Contexts/MyContextProvider';
import SideBarHeading from './SideBarHead';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { updateDoc, db, doc } from '../firebase/friebaseConfig';

const UserProfile = ({ sx }) => {
  const { user } = useContext(getLoggedUser);
  const { openProfile, setOpenProfile, updateUserInfo } =
    useContext(DataContext);

  const [editingName, setEditingName] = useState(false);
  const [editingAbout, setEditingAbout] = useState(false);
  const [editedName, setEditedName] = useState(user?.name || '');
  const [editedAbout, setEditedAbout] = useState(user?.about || '');

  const handleSave = async () => {
    if (user && user.userId) {
      const docRef = doc(db, 'users', user.userId);

      try {
        await updateDoc(docRef, {
          name: editedName,
          bio: editedAbout,
        });
        setEditingName(false);
        setEditingAbout(false);
      } catch (error) {
        console.error('Error updating document:', error);
      }
    }
  };

  return (
    <>
      <Box
        sx={sx}
        style={
          openProfile
            ? {
                transform: 'translateX(0%)',
                display: 'flex',
                flexDirection: 'column',
              }
            : { transform: 'translateX(-100%)' }
        }
      >
        <SideBarHeading label='Profile' onClick={() => setOpenProfile(false)} />
        <Box
          sx={{
            bgcolor: '#f0f2f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: '20px 0px',
          }}
        >
          <label htmlFor='avatar-input'>
            <Avatar
              src={user?.proImgLink}
              alt='userProImg'
              sx={{ width: 180, height: 180, cursor: 'pointer' }}
            />

            <input
              id='avatar-input'
              type='file'
              accept='image/*'
              // onChange={handleChange}
              style={{ display: 'none' }}
            />
          </label>
        </Box>

        <Box sx={{ bgcolor: '#f0f2f6', flexGrow: '1' }}>
          <Box
            sx={{
              minHeight: '56px',
              padding: '10px 30px',
              bgcolor: '#fff',
            }}
          >
            <Typography
              variant='subtitle1'
              sx={{ color: '#008069', fontSize: '12px' }}
            >
              Your Name
            </Typography>
            {editingName ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type='text'
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  style={{
                    border: 'none',
                    outline: 'none',
                    borderBottom: '0.5px solid #333',
                    width: '100%',
                  }}
                />
                <IconButton onClick={handleSave}>
                  <DoneIcon />
                </IconButton>
              </Box>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  variant='subtitle1'
                  flexGrow={1}
                  sx={{ color: '#3b4a54', fontSize: '14px' }}
                >
                  {user?.name}
                </Typography>
                <IconButton onClick={() => setEditingName(true)}>
                  <EditIcon fontSize='small' />
                </IconButton>
              </Box>
            )}
          </Box>

          <Box
            sx={{
              minHeight: '66px',
              padding: '14px 30px',
              bgcolor: '#f0f2f6',
            }}
          >
            <Typography
              variant='body1'
              sx={{ color: '#667781', fontSize: '0.8rem', lineHeight: '1.4' }}
            >
              This is not your username or pin. This name will be visible to
              your WhatsApp contacts.
            </Typography>
          </Box>
          <Box
            sx={{
              minHeight: '56px',
              padding: '10px 30px',
              bgcolor: '#fff',
            }}
          >
            <Typography
              variant='subtitle1'
              sx={{ color: '#008069', fontSize: '12px' }}
            >
              About
            </Typography>
            {editingAbout ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type='text'
                  value={editedAbout}
                  onChange={(e) => setEditedAbout(e.target.value)}
                  style={{
                    border: 'none',
                    outline: 'none',
                    borderBottom: '0.5px solid #333',
                    width: '100%',
                  }}
                />
                <IconButton onClick={handleSave}>
                  <DoneIcon />
                </IconButton>
              </Box>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  variant='subtitle1'
                  flexGrow={1}
                  sx={{ color: '#3b4a54', fontSize: '14px' }}
                >
                  {user?.bio}
                </Typography>
                <IconButton onClick={() => setEditingAbout(true)}>
                  <EditIcon fontSize='small' />
                </IconButton>
              </Box>
            )}
          </Box>
          <Box
            sx={{
              minHeight: '66px',
              padding: '14px 30px',
              bgcolor: '#fff',
            }}
          >
            <Typography
              variant='subtitle1'
              sx={{ color: '#008069', fontSize: '12px' }}
            >
              Contact Number
            </Typography>
            <Typography
              variant='subtitle1'
              flexGrow={1}
              sx={{ color: '#3b4a54', fontSize: '14px' }}
            >
              {user?.number}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserProfile;
