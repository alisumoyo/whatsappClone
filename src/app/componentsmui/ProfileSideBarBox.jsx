import { Avatar, Box, Typography } from '@mui/material';
import React from 'react'

const ProfileSideBarBox = () => {
  return (
   <>
   <Box sx={{bgcolor:'red',height:'98px',display:'flex',alignItems:'center',gap:'20px'}}>
    <Avatar>UserPic</Avatar>
    <Box sx={{flexGrow:'1'}}>
        <Typography variant="h6">
            UserName
        </Typography>
        <Typography variant="span">Bio</Typography>
    </Box>
   </Box>
   </>
  )
}

export default ProfileSideBarBox
