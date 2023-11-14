import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
const Sidebar = () => {
  return (
    <>
      <Box
        component='section'
        sx={{ height: '100vh', bgcolor: 'purple', width: '442px' }}
      >
        <div>
          <Button color='primary' variant='contained'>
            Button
          </Button>
          <Button color='primary' variant='contained'>
            Button
          </Button>
          <Button color='primary' variant='oulined'>
            b3
          </Button>
        </div>
        NOTHING
      </Box>
    </>
  );
};

export default Sidebar;
