'use client';

import { createContext, useState } from 'react';

export const DataContext = createContext('');

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [openSettings,setOpenSettings]=useState(false)

  return (
    <>
      <DataContext.Provider value={{ data, setData ,openSettings,setOpenSettings}}>
        {children}
      </DataContext.Provider>
    </>
  );
};

export default MyContextProvider;
