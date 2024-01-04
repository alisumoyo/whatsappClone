import { createTheme } from '@mui/material/styles';
import { green, teal, lightGreen, grey, blueGrey } from '@mui/material/colors';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#008069',
    },
    secondary: {
      main: teal[500],
    },
    background: {
      default: '#eae6df',
    },
    text: {
      primary: '#222e35',
    },
    hover: {
      primary: '##f0f2f5',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#008069',
    },
    secondary: {
      main: teal[300],
    },
    background: {
      default: '#222e35',
    },
    text: {
      primary: '#fff',
      secondary: '#222e35',
    },
    hover: {
      primary: '#333',
    },
  },
});

export { lightTheme, darkTheme };
