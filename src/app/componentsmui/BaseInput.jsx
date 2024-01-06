import React, { useContext, useState } from 'react';
import { TextField } from '@mui/material';

const CustomTextField = ({
  label,
  type,
  value,
  onChange,
  fullWidth = true,
  margin = 'normal',
  variant = 'outlined',
  required = true,
  error,
  helperText,
  theme,
}) => (
  <TextField
    label={label}
    type={type}
    value={value}
    onChange={onChange}
    fullWidth={fullWidth}
    margin={margin}
    variant={variant}
    required={required}
    error={error}
    helperText={helperText}
    sx={{
      marginBottom: '12px',
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
);
export default CustomTextField;
