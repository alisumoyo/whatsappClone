import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const ThemeCard = () => {
  return (
    <Card sx={{ minWidth: 500, color: '#3b4a54', padding: '30px' }}>
      <CardContent>
        <FormControl>
          <FormLabel>Theme</FormLabel>
          <RadioGroup defaultValue='light'>
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
          sx={{ bgcolor: '#fff', color: '#008069', borderRadius: '25px' }}
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
