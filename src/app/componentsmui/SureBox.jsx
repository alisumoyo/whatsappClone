import React, { useState } from 'react';
import {
  Box,
  Button,
  CardActions,
  DialogActions,
  DialogTitle,
} from '@mui/material';
import { useThemeContext } from '../Contexts/ThemeContext';

const SureBox = () => {
  // const { theme } = useThemeContext();
  return (
    <Box>
      <DialogTitle>Are you sure you want to logout?</DialogTitle>
    </Box>
  );
};

export default SureBox;

{
  /* <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
{/* <Button
  onClick={handleCloseDialog}
  variant='text'
  sx={{
    bgcolor: theme.palette.background.primary,
    color: '#008069',
    borderRadius: '25px',
  }}
>
  No
</Button> */
}
{
  /* <Button
  onClick={handleConfirm}
  variant='contained'
  sx={{
    bgcolor: '#008069',
    borderRadius: '25px',
    '&:hover': {
      bgcolor: '#008069',
    },
  }}
>
  Yes
</Button> */
}
// </CardActions> */}
