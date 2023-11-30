import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import whatsappTextLogo from '../assets/whatsappLogo.png';
// import bgLanding from '../assets/bgLanding.jpg';
import { PersonAdd, Login } from '@mui/icons-material';

const Landing = () => {
  const bgLanding =
    'https://img.freepik.com/premium-photo/3d-rendering-bunch-square-badges-with-whatsapp-logo-green-background_284880-352.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701302400&semt=ais';
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bgLanding})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          overflowY: 'auto',
          width: '100%',
          height: '300px',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <AppBar
          sx={{
            minHeight: '80px',
            bgcolor: 'transparent',
            // color: '#1c1e21',
            color: '#333',
            background: '#ffffff82',
            backdropFilter: 'blur(12px)',
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            <Image
              src={whatsappTextLogo}
              alt='TextLogo'
              width={130}
              height={30}
            />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button color='inherit'>Home</Button>
              <Button color='inherit'>Features</Button>
              <Button color='inherit'>Contact</Button>
            </Box>
            <Box>
              <Button startIcon={<Login />} color='inherit'>
                Login
              </Button>
              <Button endIcon={<PersonAdd />} color='inherit'>
                Signup
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            marginTop: '140px',
          }}
        >
          <Typography
            variant='h4'
            sx={{ color: '#25d366', marginBottom: '16px' }}
          >
            WHATSAPP
          </Typography>
          <Typography variant='h6' sx={{ color: '#fff' }}>
            Whatsapp helps you connect and share with the people in your life
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Landing;
