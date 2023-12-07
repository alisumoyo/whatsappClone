import { useContext, useState } from 'react';
import {
  db,
  collection,
  query,
  where,
  onSnapshot,
} from '../firebase/friebaseConfig';
import { createContext } from 'react';

export const GetRegUsersContext = createContext();

const GetRegUsersProvider = ({ children }) => {
  const [userCollection, setUserCollection] = useState([]);

  const fetchData = async (newUserQuery, user) => {
    let path = '';
    if (user) {
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
    }
  };

  return (
    <GetRegUsersContext.Provider value={{ userCollection, fetchData }}>
      {children}
    </GetRegUsersContext.Provider>
  );
};

export default GetRegUsersProvider;
