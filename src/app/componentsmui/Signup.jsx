'use client';
import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import {
  createUserWithEmailAndPassword,
  auth,
  db,
  doc,
  setDoc,
} from '../firebase/friebaseConfig';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const handleSignup = async () => {
    try {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        userId: user.uid,
        name,
        email,
        number,
      });

      console.log('User registered successfully:', user);
      router.push('/signin');
    } catch (error) {
      console.error('Error signing up:', error.message);
      setError(error.message);
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
      }}
    >
      <Typography
        variant='h4'
        gutterBottom
        style={{ color: '#333', margin: 'auto' }}
      >
        Signup
      </Typography>
      <TextField
        label='Name'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin='normal'
        variant='outlined'
        style={{ marginBottom: '16px' }}
      />
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
        label='Number'
        type='tel'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
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
      <TextField
        label='Confirm Password'
        type='password'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        fullWidth
        margin='normal'
        variant='outlined'
        style={{ marginBottom: '16px' }}
      />

      {error && (
        <Typography
          variant='body2'
          color='error'
          style={{ marginBottom: '16px' }}
        >
          {error}
        </Typography>
      )}

      <Button
        variant='outlined'
        onClick={handleSignup}
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
        Signup
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
          Already have an account?
        </Typography>
        <Link href={'/signin'}>
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
            Signin
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Signup;
