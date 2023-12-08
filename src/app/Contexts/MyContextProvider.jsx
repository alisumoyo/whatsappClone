'use client';
import { createContext, useState } from 'react';

export const DataContext = createContext('');

const MyContextProvider = ({ children }) => {
  const [openSettings, setOpenSettings] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openNewChat, setOpenNewChat] = useState(false);

  return (
    <>
      <DataContext.Provider
        value={{
          openSettings,
          setOpenSettings,
          openProfile,
          setOpenProfile,
          openNewChat,
          setOpenNewChat,
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
};

export default MyContextProvider;
