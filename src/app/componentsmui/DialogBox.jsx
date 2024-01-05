import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Card, CardActions, CardContent } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext, useThemeContext } from '../Contexts/ThemeContext';

const DialogBox = ({ content, openBtn }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const { theme } = useThemeContext();
  return (
    <>
      <Box onClick={handleOpen}>{openBtn}</Box>
      <Dialog open={open} onClose={handleClose}>
        <Card
          sx={{
            minWidth: 500,
            bgcolor: theme.palette.background.default,
            color: '#3b4a54',
            color: theme.palette.text.primary,
            padding: '30px',
          }}
        >
          <CardContent>{content}</CardContent>
          <CardActions
            sx={{ display: 'flex', justifyContent: 'flex-end' }}
          ></CardActions>
        </Card>
      </Dialog>
    </>
  );
};

export default DialogBox;
