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
} from '../firebase/friebaseConfig';
import { createContext } from 'react';

export const GetAddedUsers = createContext();

const GetRegUsersProvider = ({ children }) => {
  const [addedUsers, setAddedUsers] = useState([]);

  const addNewUser = (addUser) => {
    console.log(addUser);
    onAuthStateChanged(auth, (loggedInUser) => {
      if (loggedInUser) {
        
        const addUserRef = doc(
          db,
          'users',
          loggedInUser.uid,
          'contactedUsers',
          addUser.id
        );
        setDoc(addUserRef, addUser)
          .then((docRef) => {
            console.log('Document written with ID: ', docRef);
          })
          .catch((error) => {
            console.error('Error adding document: ', error);
          });
      }
    });
  };

  return (
    <GetAddedUsers.Provider value={{ addNewUser, addedUsers }}>
      {children}
    </GetAddedUsers.Provider>
  );
};

export default GetRegUsersProvider;
