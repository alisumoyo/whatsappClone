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
} from '../firebase/friebaseConfig';
import { createContext } from 'react';
import { getLoggedUser } from './GetLoggedUser';

export const GetRegUsersContext = createContext();

const GetRegUsersProvider = ({ children }) => {
  const [userCollection, setUserCollection] = useState([]);

  // const { user } = useContext(getLoggedUser);
  const fetchData = async (newUserQuery) => {
    let path = '';

    try {
      if (newUserQuery === 'all') {
        path = query(collection(db, 'users'));
      } else {
        const isEmailSearch = newUserQuery.trim().endsWith('@gmail.com');

        if (isEmailSearch) {
          path = query(
            collection(db, 'users'),
            where('email', '==', newUserQuery.trim())
          );
        } else {
          path = query(
            collection(db, 'users'),
            where('name', '==', newUserQuery.trim())
          );
        }
      }

      onSnapshot(path, (querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });
        setUserCollection(users);
      });
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const addNewUser = (user) => {
    // // const userDocRef = doc(db, `users/${user.ui}`);

    // addDoc(userDocRef, { name: '' }).then('doc added');
  };

  return (
    <GetRegUsersContext.Provider
      value={{ userCollection, fetchData, addNewUser }}
    >
      {children}
    </GetRegUsersContext.Provider>
  );
};

export default GetRegUsersProvider;
