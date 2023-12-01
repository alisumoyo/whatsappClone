import React, { useState, createContext } from 'react';

const ThemeContext = createContext({
  currentTheme: 'light',
  setCurrentTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
