import React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import bgImg from '../assets/img.png';
import { Button } from '@mui/material';

const ChatBg = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridColumn: '1fr',
        placeItem: 'center',
        flexGrow: '1',
        margin: '10px',
        bgcolor: '#e9edef',
      }}
    >
      <Card className='chatBg_card'>
        <CardContent className='card_content'>
          <Image src={bgImg} alt='bgImg' width={320} height={188} />
          <div className='card_content'>
            <h2 className='chatBg_heading'>Download WhatsApp for Windows</h2>
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
    </Box>
  );
};

export default ChatBg;
