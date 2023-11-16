import Box from '@mui/material/Box';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const Sidebar = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 16px 8px 30px ',
          color: '#fff',
          bgcolor: '#333',
          minHeight: '58px',
        }}
      >
        <Box>
          <AccountCircleOutlinedIcon fontSize='large' />
        </Box>
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <GroupsOutlinedIcon />
          <DonutLargeOutlinedIcon />
          <RadioButtonCheckedOutlinedIcon />
          <AddBoxOutlinedIcon />
          <MoreVertOutlinedIcon />
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
