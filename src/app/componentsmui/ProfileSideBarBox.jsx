import { Avatar, Box, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';

import {
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  setDoc,
  doc,
  db,
} from '../firebase/friebaseConfig'; // Corrected the import path
import { getLoggedUser } from '../Contexts/GetLoggedUser';
import { DataContext } from '../Contexts/MyContextProvider';

const ProfileSideBarBox = () => {
  const [profileImg, setProfileImg] = useState(null);
  const { user } = useContext(getLoggedUser);
  const { setOpenProfile } = useContext(DataContext);
  console.log(user?.proImgLink);
  const handleChange = async (e) => {
    const userImage = e.target.files[0];

    if (userImage && user) {
      const imageUrl = URL.createObjectURL(userImage);
      setProfileImg(imageUrl);

      // Create a storage reference
      const storageRef = ref(
        storage,
        `profile_images/${user.userId}_${userImage.name}`
      );

      await uploadBytes(storageRef, userImage);

      // Get the download URL of the uploaded image
      const downloadUrl = await getDownloadURL(storageRef);

      // Update user document with the image URL
      const userDocRef = doc(db, 'users', user.userId); // Replace 'YOUR_COLLECTION' with your actual collection name
      await setDoc(userDocRef, { proImgLink: downloadUrl }, { merge: true });

      console.log(
        'Image uploaded to Firebase Storage and user document:',
        downloadUrl
      );
    }
  };
  const userImgFirebase = user?.proImgLink;
  const userName = user?.name;
  return (
    <Box
      sx={{
        bgcolor: '#fff',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
          bgcolor: '#f0f2f6',
        },
      }}
      onClick={() => setOpenProfile(true)}
    >
      <Box sx={{ padding: '8px 20px' }}>
        <label
          htmlFor='avatar-input'
          sx={{ width: 48, height: 48, bgcolor: 'red', cursor: 'pointer' }}
        >
          <Avatar
            src={userImgFirebase}
            alt='userProImg'
            sx={{ width: 56, height: 56 }}
          />
          <input
            id='avatar-input'
            type='file'
            accept='image/*'
            onChange={handleChange}
            style={{ display: 'none' }}
          />
        </label>
      </Box>
      <Box sx={{ flexGrow: '1' }}>
        <Typography variant='h6' sx={{ color: '#111b21', fontSize: '16px' }}>
          {userName}
        </Typography>
        <Typography variant='span' sx={{ color: '#54656f', fontSize: '12px' }}>
          Bio: Tell Something About Yourself
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileSideBarBox;
