import React from 'react';
import { Box, CircularProgress, Button } from '@mui/material';
import { green } from '@mui/material/colors';

const CustomButton = ({ text, clicked }) => {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = (e) => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      clicked();
      console.log('button clicked');
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }

    // Call the provided onClick function
  };

  return (
    <Box sx={{ m: 1, position: 'relative' }}>
      <Button
        variant='contained'
        sx={buttonSx}
        disabled={loading}
        onClick={handleButtonClick}
      >
        {text}
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Button>
    </Box>
  );
};

export default CustomButton;
