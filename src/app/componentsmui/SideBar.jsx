import Box from '@mui/material/Box';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { IconButton } from '@mui/material';

const Sidebar = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 16px 8px 30px ',
          color: '#54656f',
          bgcolor: '#f0f2f5',
          minHeight: '54px',
        }}
      >
        <Box>
          <AccountCircleOutlinedIcon fontSize='large' />
        </Box>
        <Box sx={{ display: 'flex', gap: '2px', cursor: 'pointer' }}>
          <IconButton>
            <GroupsOutlinedIcon />
          </IconButton>
          <IconButton>
            <DonutLargeOutlinedIcon />
          </IconButton>
          <IconButton>
            <RadioButtonCheckedOutlinedIcon />
          </IconButton>
          <IconButton>
            <AddBoxOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
