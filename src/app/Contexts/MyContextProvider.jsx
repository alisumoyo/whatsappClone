'use client';
import { createContext, useState } from 'react';

export const DataContext = createContext('');

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [openSettings, setOpenSettings] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <>
      <DataContext.Provider
        value={{
          data,
          setData,
          openSettings,
          setOpenSettings,
          openProfile,
          setOpenProfile,
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
};

export default MyContextProvider;
