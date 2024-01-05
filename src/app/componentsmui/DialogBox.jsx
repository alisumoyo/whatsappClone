import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Button, Card, CardActions, CardContent } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext, useThemeContext } from '../Contexts/ThemeContext';
import { useLoggedUserContext } from '../Contexts/GetLoggedUser';

const DialogBox = ({ content, openBtn, yesFunction }) => {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

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
          <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              onClick={handleClose}
              variant='text'
              sx={{
                bgcolor: theme.palette.background.primary,
                color: '#008069',
                borderRadius: '25px',
              }}
            >
              No
            </Button>
            <Button
              onClick={yesFunction}
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
            </Button>
          </CardActions>
        </Card>
      </Dialog>
    </>
  );
};

export default DialogBox;
