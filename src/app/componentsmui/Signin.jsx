/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  CircularProgress,
} from '@mui/material';
import { signInWithEmailAndPassword, auth } from '../firebase/friebaseConfig';
import { useRouter } from 'next/router';
import Link from 'next/link';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInError, setSignInError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const bgImg =
    'https://img.freepik.com/premium-photo/3d-rendering-bunch-square-badges-with-whatsapp-logo-green-background_284880-352.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701302400&semt=ais';

  const validateForm = () => {
    return email.trim() !== '' && password.trim() !== '';
  };

  const handleSignin = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSignInError('Please fill in all fields.');
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/whatsapp');
    } catch (error) {
      setSignInError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <Container
        sx={{
          backgroundColor: '#eae6df',
          padding: '30px',
          width: '400px',
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '16px',
        }}
      >
        <Typography variant='h4' style={{ color: '#333', margin: 'auto' }}>
          Sign In
        </Typography>
        <TextField
          label='Email'
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin='normal'
          variant='outlined'
          autoComplete='email'
          required
          style={{ marginBottom: '16px' }}
        />
        <TextField
          label='Password'
          type='password'
          id='password'
          name='password'
          autoComplete='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin='normal'
          variant='outlined'
          style={{ marginBottom: '16px' }}
        />

        {loading && <CircularProgress style={{ marginBottom: '16px' }} />}

        {signInError && (
          <Typography
            variant='body2'
            color='error'
            style={{ marginBottom: '16px' }}
          >
            {signInError}
          </Typography>
        )}

        <Button
          variant='outlined'
          onClick={handleSignin}
          sx={{
            bgcolor: '#25d366',
            border: 'none',
            color: '#fff',
            fontSize: '16px',
            '&:hover': {
              bgcolor: '#0aa884',
              color: '##fff',
              fontWeight: 'bold',
              outline: 'none',
              border: 'none',
            },
          }}
        >
          Sign In
        </Button>
        <Box
          sx={{
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              padding: '10px 20px',
              bgcolor: '#25d366',
              color: '#fff',
              borderRadius: '4px',
            }}
          >
            Don't have an account?
          </Typography>
          <Link href={'/signup'}>
            <Button
              variant='contained'
              sx={{
                bgcolor: '#25d366',
                border: 'none',
                color: '#fff',
                fontSize: '16px',
                '&:hover': {
                  bgcolor: '#0aa884',
                  color: '##fff',
                  fontWeight: 'bold',
                  outline: 'none',
                  border: 'none',
                },
              }}
            >
              Sign up
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default SignIn;
