'use client';
import { useContext, useState, useEffect } from 'react';
import {
  Box,
  IconButton,
  InputBase,
  Tooltip,
  Typography,
  MenuItem,
  Menu,
  ListItemIcon,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import Button from '@mui/material/Button';
import VideocamIcon from '@mui/icons-material/Videocam';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import AddIcon from '@mui/icons-material/Add';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import DescriptionIcon from '@mui/icons-material/Description';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PersonIcon from '@mui/icons-material/Person';
import PollIcon from '@mui/icons-material/Poll';
import LabelIcon from '@mui/icons-material/Label';
import { pink, purple, yellow } from '@mui/material/colors';
import { getLoggedUser } from '../Contexts/GetLoggedUser';
import { GetAddedUsers } from '../Contexts/GetAddedUsers';
import {
  doc,
  addDoc,
  db,
  serverTimestamp,
  setDoc,
  collection,
  getDocs,
  query,
  where,
} from '../firebase/friebaseConfig';

const Message = ({ message, userId }) => {
  const isSentByMe = message.senderId === userId;

  const messageStyle = {
    borderRadius: isSentByMe ? '16px 0px 16px 16px' : '0px 16px 16px 16px',
    padding: '6px 12px 6px 8px',
    marginBottom: '20px',
    bgcolor: isSentByMe ? '#d9fdd3' : '#f5f7fa',
    maxWidth: '300px',
    width: 'fit-content',
    position:'relative',
    top:'10px',
    left: isSentByMe ? '75%;' : '12px', // Align right for user's messages
    // right: isSentByMe ? ' -468px;' : '12px', // Align right for user's messages
  };

  return (
    <Box sx={messageStyle}>
      <Typography variant='h3' sx={{ fontSize: '14px' }}>
        {message.messageText}
      </Typography>
    </Box>
  );
};

const Chat = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [send, setSend] = useState(null);

  const [message, setMessage] = useState('');
  const { user } = useContext(getLoggedUser);
  const { currentChatUser, setCurrentChatUser } = useContext(GetAddedUsers);
  const [chatMessages, setChatMessages] = useState([]);

  const getChatmessages = async () => {
    try {
      const collectionRef = collection(db, 'chats');

      // Query messages sent by the user to currentChatUser
      const sentMessagesSnapshot = await getDocs(
        query(
          collectionRef,
          where('senderId', '==', user.userId),
          where('receiverId', '==', currentChatUser.id)
        )
      );

      const receivedMessagesSnapshot = await getDocs(
        query(
          collectionRef,
          where('senderId', '==', currentChatUser.id),
          where('receiverId', '==', user.userId)
        )
      );

      const allMessages = [
        ...sentMessagesSnapshot.docs.map((doc) => doc.data()),
        ...receivedMessagesSnapshot.docs.map((doc) => doc.data()),
      ].sort((a, b) => a.date - b.date);

      setChatMessages(allMessages);

      return allMessages;
    } catch (error) {
      console.error('Error fetching chat messages:', error);
      return [];
    }
  };

  useEffect(() => {
    getChatmessages();
  }, [currentChatUser]);

  const date = new Date();
  const sendMessage = async (e) => {
    if (e.key === 'Enter' && currentChatUser.id && user.userId) {
      const chat = {
        senderId: user.userId,
        receiverId: currentChatUser.id,
        messageText: message,
        date: date,
      };
      // console.log("Chat object:", chat);
      try {
        const collectionRef = collection(db, 'chats');
        await addDoc(collectionRef, chat);
        setMessage('');
        await getChatmessages();
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  const open = Boolean(anchorEl);
  const openDoc = Boolean(send);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickDoc = (event) => {
    setSend(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSend(null);
  };
  const handleCloseChat = () => {
    setCurrentChatUser(null);
  };
  const chatbg =
    'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png';
  return (
    <>
      <Box
        sx={{
          width: '100%',
          padding: '8px 16px ',
          bgcolor: '#f0f2f5',
          minHeight: '54px',
          maxHeight: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Avatar alt='User' src={currentChatUser.proImgLink} />
          <Box sx={{ fontSize: '14px', color: '#111b21' }}>
            <Typography variant='h6'>{currentChatUser.name}</Typography>
            <Typography variant='p'>
              <small>Last seen today at 13:08</small>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ color: '#54656f' }}>
          <Tooltip title='Get the App for calling'>
            <Button
              variant='filledTonal'
              sx={{
                borderRadius: '25px',
              }}
            >
              <VideocamIcon />
              <ExpandMoreIcon />
            </Button>
          </Tooltip>
          <Tooltip title='Seacrh...'>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='Menu'>
            <IconButton
              id='basic-button'
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MoreVertOutlinedIcon fontSize='md' />
            </IconButton>
          </Tooltip>
          <Menu
            className='moreIcon-sub'
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              Contact info
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              Select messages
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleCloseChat}>
              Close chat
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              Mute notifications
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              Disappering messages
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              Clear chat
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              Delete chat
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              Report
            </MenuItem>
            <MenuItem className='moreIcon-sub' onClick={handleClose}>
              Block
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      <Box
        sx={{
          flexGrow: '1',
          display: 'flex',
          flexDirection: 'column',
          // backgroundImage: `url(${chatbg})`,
          bgcolor:'#333',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          overflowY: 'hidden',
          width: '100%',
          height: '300px',
          position: 'relative',
        }}
      >
        {chatMessages.map((message, index) => (
          <Message key={index} message={message} userId={user.userId} />
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          bgcolor: '#f0f2f5',
          width: '100%',
          padding: '8px 16px 8px 30px ',
          color: '#8696a0',
          maxHeight: '54px',
        }}
      >
        <IconButton>
          <SentimentSatisfiedAltOutlinedIcon />
        </IconButton>
        <IconButton
          id='basic-button'
          aria-controls={openDoc ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={openDoc ? 'true' : undefined}
          onClick={handleClickDoc}
        >
          <AddIcon
            sx={
              openDoc
                ? { transform: 'rotate(135deg)', transition: 'all 0.3s' }
                : { transition: 'all 0.3s' }
            }
          />
        </IconButton>
        <Menu
          sx={{
            '.css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
              borderRadius: ' 16px',
              bottom: '75px !important',
              left: '480px !important',
              top: 'unset !important',
            },
          }}
          className='moreIcon-sub'
          id='basic-menu'
          anchorEl={send}
          open={openDoc}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem className='moreIcon-sub' onClick={handleClose}>
            <ListItemIcon>
              <DescriptionIcon color='secondary' />
            </ListItemIcon>
            Document
          </MenuItem>
          <MenuItem className='moreIcon-sub' onClick={handleClose}>
            <ListItemIcon>
              <PhotoLibraryIcon color='success' />
            </ListItemIcon>
            Photos & Videos
          </MenuItem>
          <MenuItem className='moreIcon-sub' onClick={handleClose}>
            <ListItemIcon>
              <CameraAltIcon sx={{ color: pink[500] }} />
            </ListItemIcon>
            Photos & Videos
          </MenuItem>
          <MenuItem className='moreIcon-sub' onClick={handleClose}>
            <ListItemIcon>
              <PersonIcon sx={{ color: purple[500] }} />
            </ListItemIcon>
            Contact
          </MenuItem>
          <MenuItem className='moreIcon-sub' onClick={handleClose}>
            <ListItemIcon>
              <PollIcon sx={{ color: yellow[500] }} />
            </ListItemIcon>
            Poll
          </MenuItem>
          <MenuItem className='moreIcon-sub' onClick={handleClose}>
            <ListItemIcon>
              <LabelIcon color='primary' />
            </ListItemIcon>
            Label
          </MenuItem>
        </Menu>

        <InputBase
          size='small'
          placeholder='Type a Message'
          sx={{
            width: '100%',
            padding: '6px 14px',
            bgcolor: '#fff',
            borderRadius: '25px',
            flexGrow: '1',
          }}
          variant='outlined'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={sendMessage}
        />
        <IconButton>
          <KeyboardVoiceIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default Chat;
