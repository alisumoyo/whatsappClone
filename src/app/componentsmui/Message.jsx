import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Download } from '@mui/icons-material';

const Message = ({ message, userId, onDelete }) => {
  const isSentByMe = message.senderId === userId;

  const messageStyle = {
    borderRadius: isSentByMe ? '8px 0px 8px 8px' : '0px 8px 8px 8px',
    bgcolor: isSentByMe ? '#d9fdd3' : '#f5f7fa',
    maxWidth: '340px',
    width: 'fit-content',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    wordWrap: 'break-word',
    overflow: 'hidden',
    marginBottom: '10px',
    lineHeight: '19px',
    justifySelf: isSentByMe ? 'end' : 'start',
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const downloadFile = () => {
    console.log('Downloaded');
  };
  return (
    <Box
      sx={{
        width: '100%',
        padding: '8px 10px 8px 10px',
        display: 'grid',
      }}
    >
      <Box sx={messageStyle}>
        <Typography
          variant='h6'
          sx={{
            fontSize: '14px',
            position: 'relative',
            padding: '10px 4px 0px 10px',
          }}
        >
          {message.filesObj && (
            <Box
              sx={{
                width: '300px',
                height: '192px',
              }}
            >
              <Box sx={{ width: '300px', height: '124px' }}>
                <Avatar
                  src={message.filesObj.fileDownloadLink}
                  sx={{ width: '100%', height: '100%' }}
                  variant='square'
                />
              </Box>
              <Box sx={{ bgcolor: 'pink', flexGrow: 1 }}>
                <Typography
                  variant='h3'
                  sx={{ fontSize: '16px', color: '#333' }}
                >
                  {message.filesObj.fileName}
                </Typography>
                <Box sx={{ display: 'flex' }}>
                  <Download onClick={downloadFile} />
                  <Typography
                    variant='h6'
                    sx={{ fontSize: '12px', color: '#333' }}
                  >
                    {message.filesObj.fileType}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
          {message.messageText}
          <IconButton
            id='basic-button'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MoreVertOutlinedIcon sx={{ fontSize: '11px' }} />
          </IconButton>
        </Typography>
        <Box
          sx={{
            marginTop: '6px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem
              onClick={() => onDelete(message.msgDocId)}
              onClose={handleClose}
            >
              Delete Msg
            </MenuItem>
            <MenuItem>Edit Msg</MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default Message;
