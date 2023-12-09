'use client';
import { createContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  auth,
  db,
  doc,
  onSnapshot,
} from '../firebase/friebaseConfig';

export const getLoggedUser = createContext();

const LoggedUser = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (loginUser) => {
      if (loginUser) {
        const userDocRef = doc(db, 'users', loginUser.uid);
        const unsubscribe = onSnapshot(
          userDocRef,
          (docSnapshot) => {
            if (docSnapshot.exists()) {
              const data = docSnapshot.data();
              // console.log('Document Data:', data);
              setUser(data);
            } else {
              //   console.log('Document does not exist');
              setUser(null);
            }
          },
          (error) => {
            console.error('Error fetching document:', error);
          }
        );

        return () => {
          unsubscribe();
        };
      } else {
        // console.log('Logged Out');
        setUser(null);
      }
    });
  }, []);

  return (
    <getLoggedUser.Provider value={{ user, setUser }}>
      {children}
    </getLoggedUser.Provider>
  );
};

export default LoggedUser;
