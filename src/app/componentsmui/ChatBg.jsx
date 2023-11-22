import React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';
import bgImg from '../assets/img.png';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

const ChatBg = () => {
 
  return (
    <>
    <Box sx={{display:'flex',justifyContent:'center'}}>
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#f0f2f5',
          padding: '10px 20px',
          width: '540px',
          height: '400px',
          border: 'none',
          color: '#41525d',
          border: 'none',
          boxShadow: 'none',
        }}
      >
        <CardContent
          className='card_content'
          sx={
            {
              // display: 'felx',
              // justifyContent: 'center',
              // alignItems: 'center',
            }
          }
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '20px',
              fontWeight: 'thin',
            }}
          >
            <Image src={bgImg} alt='bgImg' width={320} height={188} />
          </Box>
          <Box sx={{ margin: '13px 0px' }}>
            <Typography
              variant='h5'
              sx={{ display: 'flex', justifyContent: 'center', margin: '13px' }}
            >
              Download WhatsApp for Windows
            </Typography>
            <Typography
              variant='p'
              sx={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              Make calls, share your screen and get a faster experience when you
              download the Windows app.
            </Typography>

            <Button variant='outlined' className='btn'>
              Get the app
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Box
        sx={{
          position: 'absolute',
          top: '550px',
          color: '#8696a0',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <LockIcon />
        <span>Your personal messages are end-to-end encrypted</span>
      </Box>
      </Box>
    </>
  );
};

export default ChatBg;
