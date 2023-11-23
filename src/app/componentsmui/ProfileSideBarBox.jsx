import { Avatar, Box, Typography } from '@mui/material';
import React from 'react'

const ProfileSideBarBox = () => {
  return (
   <>
   <Box sx={{bgcolor:'red',height:'98px'}}>
    <Avatar>UserPic</Avatar>
    <Box>
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
