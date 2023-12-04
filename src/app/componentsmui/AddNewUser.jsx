'use client';
import React, { useContext } from 'react';
import { Avatar, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GetRegUsersContext } from '../Contexts/getRegUsers';
import { useState } from 'react';

const AddNewUser = () => {
  const { userCollection, addNewUser } = useContext(GetRegUsersContext);

  return (
    <>
      {userCollection?.map((user, index) => (
        <>
          <Box
            key={index}
            onClick={() => addNewUser(user)}
            sx={{
              bgcolor: '#fff',
              color: '#3b4a54',
              color: '#111b21',
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
            <Box sx={{ padding: '8px 16px' }}>
              <Avatar alt='User' src={user.proImgLink} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                padding: '3px',
              }}
            >
              <Box sx={{ flexGrow: '1', paddingRight: '10px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant='p'>{user?.name}</Typography>
                  <Typography
                    variant='p'
                    sx={{ color: '#667781', fontSize: '12px' }}
                  >
                    12/3/2023
                  </Typography>
                </Box>
                <Box
                  sx={{
                    color: '#667781',
                    fontSize: '12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant='p'>Message</Typography>
                  <ExpandMoreIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      ))}
    </>
  );
};

export default AddNewUser;
