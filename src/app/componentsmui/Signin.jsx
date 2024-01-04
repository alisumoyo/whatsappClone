/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react';
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  CircularProgress,
  ThemeProvider,
} from '@mui/material';
import { signInWithEmailAndPassword, auth } from '../firebase/friebaseConfig';
import { useRouter } from 'next/router';
import Link from 'next/link';
import theme from './ThemeColors';
import { useTheme } from '@mui/system';
import { ThemeContext } from '../Contexts/ThemeContext';
// const theme = useTheme();

const SignIn = () => {
  // const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInError, setSignInError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const bgImg =
    'https://img.freepik.com/premium-photo/3d-rendering-bunch-square-badges-with-whatsapp-logo-green-background_284880-352.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701302400&semt=ais';

  const bgGreenImg = './bggreen.jpeg';
  const imgBgGreeen = './bg.jpg';

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

  const { theme, toggleDarkMode, isDarkMode } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${imgBgGreeen})`,
        }}
      >
        <Container
          sx={{
            backgroundColor: theme.palette.background.default,
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
          <Typography
            variant='h4'
            style={{ color: theme.palette.text.primary, margin: 'auto' }}
          >
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
            sx={{
              marginBottom: '16px',
              color: theme.palette.text.primary, // Set text color
              '& .MuiInputLabel-root': {
                color: theme.palette.text.primary, // Set label color
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: theme.palette.text.primary, // Set border color
                },
                '&:hover fieldset': {
                  borderColor: theme.palette.primary.main, // Set border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: theme.palette.primary.main, // Set border color when focused
                },
              },
            }}
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
            sx={{
              marginBottom: '16px',
              color: theme.palette.text.primary, // Set text color
              '& .MuiInputLabel-root': {
                color: theme.palette.text.primary, // Set label color
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: theme.palette.text.primary, // Set border color
                },
                '&:hover fieldset': {
                  borderColor: theme.palette.primary.main, // Set border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: theme.palette.primary.main, // Set border color when focused
                },
              },
            }}
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
              bgcolor: '#0aa884',
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
                bgcolor: '#0aa884',
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
                  bgcolor: '#0aa884',
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
          {isDarkMode ? (
            <Button
              onClick={toggleDarkMode}
              sx={{ color: theme.palette.text.primary }}
            >
              Switch to Light
            </Button>
          ) : (
            <Button
              onClick={toggleDarkMode}
              sx={{ color: theme.palette.text.primary }}
            >
              Switch to Dark
            </Button>
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default SignIn;
