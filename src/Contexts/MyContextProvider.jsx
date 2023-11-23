'use client';

import { createContext, useState } from 'react';

export const DataContext = createContext('');

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState(null);

  return (
    <>
      <DataContext.Provider value={{ data, setData }}>
        {children}
      </DataContext.Provider>
    </>
  );
};

export default MyContextProvider;
