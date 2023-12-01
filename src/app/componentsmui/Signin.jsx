import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import { signInWithEmailAndPassword, auth } from '../firebase/friebaseConfig';
import { useRouter } from 'next/router';
import Link from 'next/link';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInError, setSignInError] = useState('');
  const router = useRouter();

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/whatsapp');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container
      sx={{
        backgroundColor: '#eae6df',
        padding: '30px',
        width: '400px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '16px',
        marginTop: '16px',
      }}
    >
      <Typography
        variant='h4'
        gutterBottom
        style={{ color: '#333', margin: 'auto' }}
      >
        Sign In
      </Typography>
      <TextField
        label='Email'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin='normal'
        variant='outlined'
        style={{ marginBottom: '16px' }}
      />
      <TextField
        label='Password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin='normal'
        variant='outlined'
        style={{ marginBottom: '16px' }}
      />

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
          Dont have an account?
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
            Sing up
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default SignIn;
