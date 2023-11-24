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
    <Card sx={{ minWidth: 500, color: '#000' }}>
      <CardContent>
        <FormControl>
          <FormLabel id='demo-radio-buttons-group-label'>Theme</FormLabel>
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue='light'
            name='radio-buttons-group'
          >
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
      <CardActions sx={{display:'flex',justifyContent:'space-between'}}>
        <Button variant='outlined' color='error'>
          Cancel
        </Button>
        <Button variant='contained' color='success'>
          OK
        </Button>
      </CardActions>
    </Card>
  );
};
export default ThemeCard;
