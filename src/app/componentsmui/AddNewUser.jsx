'use client';
import React, { useContext } from 'react';
import { Avatar, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GetRegUsersContext } from '../Contexts/getRegUsers';
import { useState } from 'react';
import { GetAddedUsers } from '../Contexts/GetAddedUsers';

const AddNewUser = () => {
  const { userCollection } = useContext(GetRegUsersContext);
  const { addNewUser } = useContext(GetAddedUsers);


  return (
    <>
      {userCollection?.map((addUser, index) => (
          <Box
            key={index}
            onClick={() => addNewUser(addUser)}
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
              <Avatar alt='User' src={addUser.proImgLink} />
            </Box>
            <Box
              sx={{
                flexGrow: '1',
              }}
            >
              <Box>
                <Typography variant='p'>{addUser.name}</Typography>
              </Box>
              <Box
                sx={{
                  color: '#667781',
                  fontSize: '12px',
                  marginTop: '3px',
                }}
              >
                <Typography variant='p'>
                  Hey There! I am using WhatsApp.
                </Typography>
              </Box>
            </Box>
          </Box>
      ))}
    </>
  );
};

export default AddNewUser;
