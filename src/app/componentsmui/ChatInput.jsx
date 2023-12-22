import { styled } from '@mui/material/styles';
import { Button, Box } from '@mui/material';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const InputFileUpload = ({ text, icon, onClick, fileType, accept }) => {
  return (
    <Button
      component='label'
      startIcon={icon}
      onClick={onClick}
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'start',
        color: '#333',
      }}
    >
      {text}
      <VisuallyHiddenInput type={fileType} accept={accept} />
    </Button>
  );
};

export default InputFileUpload;
