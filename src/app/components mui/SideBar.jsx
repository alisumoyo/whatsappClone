import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
const SideBar = () => {
  return (
    <>
      <Box component='section' sx={{ height: '30vh' }}>
        <Button color='primary' variant='contained'>
          Button
        </Button>
        <Button color='primary' variant='contained'>
          Button
        </Button>
      </Box>
    </>
  );
};

export default SideBar;
