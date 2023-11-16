import React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LockIcon from '@mui/icons-material/Lock';
import Box from '@mui/material/Box';
import bgImg from '../assets/img.png';
import { Button } from '@mui/material';

const ChatBg = () => {
  return (
    <>
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#e9edef',
          width: '400px',
          height: '400px',
          border: 'none',
          color: '#41525d',
          border: 'none',
          boxShadow: 'none',
        }}
      >
        <CardContent
          className='card_content'
          sx={{
            display: 'block',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div sx={{ display: 'flex', justifyContent: 'center' }}>
            <Image src={bgImg} alt='bgImg' width={320} height={188} />
          </div>
          <div className='card_content'>
            <h2 sx={{ margin: '13px auto' }}>Download WhatsApp for Windows</h2>
            <p>
              Make calls, share your screen and get a faster experience when you
              download the Windows app.
            </p>
            <Button variant='outlined' className='btn'>
              Get the app
            </Button>
          </div>
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
    </>
  );
};

export default ChatBg;
