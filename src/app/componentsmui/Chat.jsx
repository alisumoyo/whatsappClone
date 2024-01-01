/* eslint-disable react-hooks/exhaustive-deps */
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
  setDoc,
  db,
  serverTimestamp,
  collection,
  query,
  where,
  deleteDoc,
  onSnapshot,
  ref,
  uploadBytes,
  getDownloadURL,
  storage,
} from '../firebase/friebaseConfig';
import InputFileUpload from './ChatInput';
import Loader from './Loader';
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
    // {
    //   message.filesObj.fileDownloadLink;
    // }
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
                {/* <Box
                  component='img'
                  sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                  }}
                  alt='The house from the offer.'
                src={message.filesObj.fileDownloadLink}
                /> */}
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
                  {/* <Typography
                  variant='h6'
                  sx={{ fontSize: '12px', color: '#333' }}
                >
                  {message.filesObj.fileSize}
                </Typography> */}
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
            <MenuItem onClick={() => onDelete(message.msgDocId)}>
              Delete Msg
            </MenuItem>
            <MenuItem>Edit Msg</MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

const Chat = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [send, setSend] = useState(null);

  const [message, setMessage] = useState('');
  const { user } = useContext(getLoggedUser);
  const [chatMessages, setChatMessages] = useState([]);

  const [addedFile, setAddedFile] = useState(null);
  const [attachment, setAttachemnt] = useState(null);

  const { currentChatUser, setCurrentChatUser } = useContext(GetAddedUsers);

  const getChatmessages = async () => {
    try {
      onSnapshot(
        query(
          collection(db, 'chats'),
          where('senderId', 'in', [user.userId, currentChatUser.id]),
          where('receiverId', 'in', [user.userId, currentChatUser.id])
        ),
        (querySnapshot) => {
          const allMessages = [];
          setChatMessages([]);
          querySnapshot.forEach((doc) => {
            const messageData = doc.data();
            const msgDocId = doc.id;
            const dateObject = serverTimestamp(messageData.date);
            allMessages.push({ ...messageData, dateObject, msgDocId });
          });
          allMessages.sort((a, b) => a.date - b.date);
          setChatMessages(allMessages);
        }
      );
    } catch (error) {
      console.error('Error fetching chat messages:', error);
      return [];
    }
  };

  const sendMessage = async (e) => {
    if (e.key !== 'Enter' || !currentChatUser.id || !user.userId) return;
    if (addedFile) {
      try {
        const fileType = addedFile.type.split('/')[0];
        const storageRef = ref(storage, `files/${fileType}/${addedFile.name}`);

        await uploadBytes(storageRef, addedFile);

        const downloadURL = await getDownloadURL(storageRef);
        await setAttachemnt({
          fileType: addedFile.type,
          fileName: addedFile.name,
          fileSize: addedFile.size,
          fileDownloadLink: downloadURL,
        });
        setAddedFile();
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
    const chat = {
      senderId: user.userId,
      receiverId: currentChatUser.id,
      messageText: message,
      filesObj: attachment,
      date: serverTimestamp(),
    };

    try {
      const collectionRef = collection(db, 'chats');
      await addDoc(collectionRef, chat);
      setChatMessages((prevMessages) => [...prevMessages, chat]);
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleDelete = async (deltedMsgId) => {
    try {
      const deleteMsgRef = doc(db, 'chats', deltedMsgId);
      deleteDoc(deleteMsgRef);
    } catch (error) {
      console.error('Error deleting message:', error);
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
  const handleCloseDropDown = () => {
    setAnchorEl(null);
    setSend(null);
  };
  const handleCloseChat = () => {
    setCurrentChatUser(null);
  };
  useEffect(() => {
    getChatmessages();
  }, [currentChatUser.id]);

  const chatbg =
    'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png';

  const handleChange = async (e) => {
    const selectedFile = e.target.files[0];
    // console.log(selectedFile);
    setAddedFile(selectedFile);
    // if (selectedFile) {
    //   try {
    //     const fileType = selectedFile.type.split('/')[0];
    //     const storageRef = ref(
    //       storage,
    //       `files/${fileType}/${selectedFile.name}`
    //     );

    //     await uploadBytes(storageRef, selectedFile);

    //     const downloadURL = await getDownloadURL(storageRef);
    //     await setAttachemnt({
    //       fileType: selectedFile.type,
    //       fileName: selectedFile.name,
    //       fileSize: selectedFile.size,
    //       fileDownloadLink: downloadURL,
    //     });
    //   } catch (error) {
    //     console.error('Error uploading file:', error);
    //   }
    // }
  };

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
          <Tooltip title='Search...'>
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
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem>Contact info</MenuItem>
            <MenuItem>Select messages</MenuItem>
            <MenuItem onClick={handleCloseChat}>Close chat</MenuItem>
            <MenuItem>Mute notifications</MenuItem>
            <MenuItem>Disappering messages</MenuItem>
            <MenuItem>Clear chat</MenuItem>
            <MenuItem>Delete chat</MenuItem>
            <MenuItem>Report</MenuItem>
            <MenuItem>Block</MenuItem>
          </Menu>
        </Box>
      </Box>

      <Box
        sx={{
          flexGrow: '1',
          // display: 'flex',
          // flexDirection: 'column',
          // backgroundImage: `url(${chatbg})`,
          // backgroundPosition: 'center',
          // backgroundSize: 'cover',
          // backgroundRepeat: 'no-repeat',
          overflowX: 'auto',
          overflowX: 'hidden',
          bgcolor: 'red',
        }}
        onClick={handleCloseDropDown}
      >
        {chatMessages.map((message, index) => (
          <Message
            key={index}
            message={message}
            userId={user?.userId}
            onDelete={handleDelete}
          />
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
            '.MuiPaper-root': {
              borderRadius: '16px !important',
              bottom: '75px !important',
              left: '480px !important',
              top: 'unset !important',
              minWidth: '220px',
              bgcolor: 'pink',
            },
          }}
          id='basic-menu'
          anchorEl={send}
          open={openDoc}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem sx={{ padding: '0px 16px', width: '100%' }}>
            <InputFileUpload
              text='Document'
              icon={
                <ListItemIcon>
                  <DescriptionIcon color='secondary' />
                </ListItemIcon>
              }
              onChange={handleChange}
              fileType='file'
              accept='.doc,.docx,.pdf'
            />
          </MenuItem>
          <MenuItem sx={{ padding: '0px 16px' }}>
            <InputFileUpload
              text='Photos'
              icon={
                <ListItemIcon>
                  <PhotoLibraryIcon color='success' />
                </ListItemIcon>
              }
              onChange={handleChange}
              fileType='file'
              accept='image/*'
            />
          </MenuItem>
          <MenuItem sx={{ padding: '0px 16px' }}>
            <InputFileUpload
              text='Video'
              icon={
                <ListItemIcon>
                  <CameraAltIcon sx={{ color: pink[500] }} />
                </ListItemIcon>
              }
              onChange={handleChange}
              fileType='file'
              accept='video/*'
            />
          </MenuItem>
          <MenuItem sx={{ padding: '0px 16px' }}>
            <InputFileUpload
              text='Contact'
              icon={
                <ListItemIcon>
                  <PersonIcon sx={{ color: purple[500] }} />
                </ListItemIcon>
              }
              onChange={handleChange}
              fileType='file'
              accept='.csv'
            />
          </MenuItem>
          <MenuItem sx={{ padding: '0px 16px' }}>
            <InputFileUpload
              text='Poll'
              icon={
                <ListItemIcon>
                  <PollIcon sx={{ color: yellow[500] }} />
                </ListItemIcon>
              }
              onChange={handleChange}
              fileType='file'
              accept='.txt'
            />
          </MenuItem>
          <MenuItem sx={{ padding: '0px 16px' }}>
            <InputFileUpload
              text='Label'
              icon={
                <ListItemIcon>
                  <LabelIcon color='primary' />
                </ListItemIcon>
              }
              onChange={handleChange}
              fileType='file'
              accept='.txt,.csv'
            />
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
