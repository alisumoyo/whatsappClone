import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import whatsappTextLogo from '../assets/whatsappLogo.png';
import { PersonAdd, Login } from '@mui/icons-material';
import Link from 'next/link';

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
          width: '100%',
          height:'100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <AppBar
          sx={{
            minHeight: '80px',
            color: '#fff',
            background: '#3333339e',
            backdropFilter: 'blur(16px)',
          }}
        >
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              width: '100%',
              flexGrow: '1',
            }}
          >
            <Image
              src={whatsappTextLogo}
              alt='TextLogo'
              width={130}
              height={30}
            />
            <Box>
              <Button color='inherit'>Home</Button>
              <Button color='inherit'>Features</Button>
              <Button color='inherit'>Contact</Button>
            </Box>
            <Box>
              <Link href={'signin'} color='inherit'>
                <Button
                  startIcon={<Login />}
                  color='inherit'
                  sx={{ color: '#fff' }}
                >
                  Login
                </Button>
              </Link>
              <Link href={'signup'}>
                <Button
                  endIcon={<PersonAdd />}
                  color='inherit'
                  sx={{ color: '#fff' }}
                >
                  Signup
                </Button>
              </Link>
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
            sx={{ color: '#25d366', color: '#333', marginBottom: '16px' }}
          >
            WHATSAPP
          </Typography>
          <Typography variant='h6' sx={{ color: '#fff', width: '400px' }}>
            Whatsapp helps you connect and share with the people in your life
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Landing;
