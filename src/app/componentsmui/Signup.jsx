'use client';
import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import {
  createUserWithEmailAndPassword,
  auth,
  db,
} from '../firebase/friebaseConfig';
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions
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

      await addDoc(collection(db, 'users'), {
        userId: user.uid,
        name,
        email,
        number,
      });

      console.log('User registered successfully:', user);
      router.push('/signin')
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
          bgcolor: '#00a884',
          color: '#fff',
          fontSize: '18px',
          '&:hover': {
            bgcolor: '#0aa884',
            color: '##fff',
            fontWeight: 'bold',
          },
        }}
      >
        Signup
      </Button>
      <Box>
        <Typography variant='h6'> Dont have an account?</Typography>
        <Link href={'/signin'}>Signin</Link>
      </Box>
    </Container>
  );
};

export default Signup;
