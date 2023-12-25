import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

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

const InputFileUpload = ({ text, icon, fileType, accept, onChange }) => {
  const handleChange = (e) => {
    onChange(e);
  };
  return (
    <Button
      component='label'
      startIcon={icon}
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'start',
        color: '#333',
      }}
    >
      {text}
      <VisuallyHiddenInput
        type={fileType}
        accept={accept}
        onChange={handleChange}
      />
    </Button>
  );
};

export default InputFileUpload;
