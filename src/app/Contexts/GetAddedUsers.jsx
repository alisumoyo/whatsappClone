import { useContext, useState } from 'react';
import {
  db,
  collection,
  query,
  where,
  onSnapshot,
  doc,
  setDoc,
  addDoc,
  onAuthStateChanged,
  auth,
  getDoc,
} from '../firebase/friebaseConfig';
import { createContext } from 'react';
import { useEffect } from 'react';

export const GetAddedUsers = createContext();

const GetAddedUsersProvider = ({ children }) => {
  const [addedUsers, setAddedUsers] = useState([]);
  const [currentChatUser,setCurrentChatUser]=useState({})

  const addNewUser = (addUser) => {
    console.log(addUser);
    onAuthStateChanged(auth, (loggedInUser) => {
      if (loggedInUser) {
        const contactedUsersRef = doc(
          db,
          'users',
          loggedInUser.uid,
          'contactedUsers',
          addUser.id
        );
        setDoc(contactedUsersRef, addUser)
          
          .then((docRef) => {
            console.log('Document written with ID: ', docRef);
          })
          .catch((error) => {
            console.error('Error adding document: ', error);
          });
      }
    });
  };

  const GetAddeUserCollection = () => {
    onAuthStateChanged(auth, (loggedInUser) => {
      if (loggedInUser) {
        const q = query(
          collection(db, 'users', loggedInUser.uid, 'contactedUsers')
        );

        onSnapshot(q, (querySnapshot) => {
          const getSubCollection = [];
          querySnapshot.forEach((doc) => {
            getSubCollection.push({ ...doc.data(), id: doc.id });
          });
          setAddedUsers(getSubCollection);
        });
      }
    });
  };
  useEffect(() => {
    GetAddeUserCollection();
  }, []);

  return (
    <GetAddedUsers.Provider value={{ addNewUser, addedUsers ,currentChatUser,setCurrentChatUser}}>
      {children}
    </GetAddedUsers.Provider>
  );
};

export default GetAddedUsersProvider;
