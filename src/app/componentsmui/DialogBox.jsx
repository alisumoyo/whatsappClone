import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/system';
import { useState } from 'react';


const DialogBox = ({ button, content }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Box onClick={handleOpen}>{button}</Box>
      <Dialog  open={open} onClose={handleClose}>
        {content}
      </Dialog>
    </>
  );
};

export default DialogBox;
