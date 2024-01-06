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
    // <CardContent>
    <FormControl>
      <FormLabel sx={{ color: theme.palette.text.primary }}>Theme</FormLabel>
      <RadioGroup defaultValue='light' onChange={handleThemeChange}>
        <FormControlLabel value='light' control={<Radio />} label='Light' />
        <FormControlLabel value='dark' control={<Radio />} label='Dark' />
        <FormControlLabel value='system' control={<Radio />} label='System' />
      </RadioGroup>
    </FormControl>
    // </CardContent>
  );
};

export default ThemeCard;
