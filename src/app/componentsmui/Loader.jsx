import React from 'react';
import { Box, CachedRoundedIcon, CircularProgress } from '@mui/material';

const Loader = ({
  color = 'secondary',
  size = 30,
  loadingText = 'Loading...',
}) => {
  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <CachedRoundedIcon sx={{ fontSize: size, color }} />
      <CircularProgress
        sx={{ size: 20, marginLeft: 5 }}
        thickness={4}
        color={color}
      />
      <Box sx={{ marginLeft: 10 }}>{loadingText}</Box>
    </Box>
  );
};

export default Loader;
