import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/system';
import { useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  DialogActions,
  DialogContent,
} from '@mui/material';
import { useContext } from 'react';
import { ThemeContext, useThemeContext } from '../Contexts/ThemeContext';
import { useLoggedUserContext } from '../Contexts/GetLoggedUser';

const DialogBox = ({
  content,
  openBtn,
  yesFunction,
  additionalFunctionAfterYes,
}) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleYesClick = async () => {
    try {
      if (yesFunction && typeof yesFunction === 'function') {
        // If yesFunction is a function, call it
        await yesFunction();
        console.log('executed yesFunction:',);
      }

      // Close the dialog regardless of the type of yesFunction
      handleClose();
    } catch (error) {
      // Handle errors that may occur during the execution of yesFunction
      console.error('Error during yesFunction execution:', error);
    }
  };

  const { theme } = useThemeContext();
  return (
    <>
      <Box onClick={handleOpen}>{openBtn}</Box>
      <Dialog open={open} onClose={handleClose}>
        <CardContent sx={{ bgcolor: theme.palette.background.default }}>
          <DialogContent
            sx={{
              minWidth: 500,
              bgcolor: theme.palette.background.default,
              color: '#3b4a54',
              color: theme.palette.text.primary,
              padding: '30px',
            }}
          >
            {content}
          </DialogContent>

          <DialogActions
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              bgcolor: theme.palette.background.default,
            }}
          >
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
              onClick={handleYesClick}
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
          </DialogActions>
        </CardContent>
      </Dialog>
    </>
  );
};

export default DialogBox;
