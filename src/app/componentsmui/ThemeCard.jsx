import {
  Card,
  CardActions,
  CardContent,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';

const ThemeCard = () => {
  const { theme, toggleDarkMode, selectedTheme } = useContext(ThemeContext);

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    toggleDarkMode(selectedTheme);
  };

  return (
    <Card
      sx={{
        // minWidth: 500,
        bgcolor: theme.palette.background.default,
        color: '#3b4a54',
        color: theme.palette.text.primary,
        padding: '30px',
      }}
    >
      <CardContent>
        <FormControl>
          <FormLabel sx={{ color: theme.palette.text.primary }}>
            Theme
          </FormLabel>
          <RadioGroup defaultValue='light' onChange={handleThemeChange}>
            <FormControlLabel value='light' control={<Radio />} label='Light' />
            <FormControlLabel value='dark' control={<Radio />} label='Dark' />
            <FormControlLabel
              value='system'
              control={<Radio />}
              label='System'
            />
          </RadioGroup>
        </FormControl>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant='text'
          sx={{
            bgcolor: theme.palette.background.primary,
            color: '#008069',
            borderRadius: '25px',
          }}
        >
          Cancel
        </Button>
        <Button
          variant='contained'
          sx={{
            bgcolor: '#008069',
            borderRadius: '25px',
            '&:hover': {
              bgcolor: '#008069',
            },
          }}
        >
          OK
        </Button>
      </CardActions>
    </Card>
  );
};

export default ThemeCard;
