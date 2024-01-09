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
import CustomButton from './BaseBtn';

const SignIn = () => {
  // const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInError, setSignInError] = useState('');
  // const [loading, setLoading] = useState(false);
  const router = useRouter();
  const bgImg =
    'https://img.freepik.com/premium-photo/3d-rendering-bunch-square-badges-with-whatsapp-logo-green-background_284880-352.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701302400&semt=ais';

  const bgGreenImg = './bggreen.jpeg';
  const imgBgGreeen = './bg.jpg';

  const validateForm = () => {
    return email.trim() !== '' && password.trim() !== '';
  };
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  // const buttonSx = {
  //   ...(success && {
  //     bgcolor: green[500],
  //     '&:hover': {
  //       bgcolor: green[700],
  //     },
  //   }),
  // };

  // React.useEffect(() => {
  //   return () => {
  //     clearTimeout(timer.current);
  //   };
  // }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };
  const handleSignin = async (e) => {
    e.preventDefault();
    handleButtonClick();
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
            style={{
              color: theme.palette.text.primary,
              margin: 'auto',
            }}
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
          {signInError && (
            <Typography
              variant='body2'
              color='error'
              style={{ marginBottom: '16px' }}
            >
              {signInError}
            </Typography>
          )}

          <CustomButton text='Sign In' pressed={handleSignin} />
          <Box
            sx={{
              marginTop: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent:'center',
              gap: '16px',
              paddingRight: '20px',
            }}
          >
            <Typography
              sx={{
                color: '#333',
              }}
            >
              {/* Don't have an account? */}
              No account?
            </Typography>

            <Link href={'/signup'} style={{ textDecoration: 'none' }}>
              <Typography
                variant='contained'
                sx={{
                  color: '#00401A',
                  fontSize: '16px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
              >
                {/* Sign up */}
                Create one
              </Typography>
            </Link>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};
// const inputFieldCss = {};
export default SignIn;

// Button used First
{
  /* <Button
variant='contained'
onClick={handleSignin}
sx={{
  bgcolor: '#00401A',
  border: 'none',
  color: '#fff',
  fontSize: '16px',
  '&:hover': {
    bgcolor: '#00401A',
    color: '##fff',
    fontWeight: 'bold',
    outline: 'none',
    border: 'none',
    m: 1,
    position: 'relative',
  },
}}
disabled={loading}
>
Log In
{loading && (
  <CircularProgress
    size={24}
    sx={{
      color: theme.palette.background.default,
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: '-12px',
      marginLeft: '-12px',
    }}
  />
)}
{/* <Loader/> 
  </Button>*/
}

// Dark Mode Button
{
  /* {isDarkMode ? (
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
          )} */
}

// Link Button
{
  /* <Link href={'/signup'}>
<Button
  variant='contained'
  sx={{
    // bgcolor: '#00401A',
    // border: 'none',
    color: '#00401A',
    fontSize: '16px',
    // '&:hover': {
    //   bgcolor: '#00401A',
    //   color: '##fff',
    //   fontWeight: 'bold',
    //   outline: 'none',
    //   border: 'none',
    // },
  }}
>
  Sign up
</Button>
</Link> */
}
