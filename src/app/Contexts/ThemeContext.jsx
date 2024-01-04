import React, { createContext, useState, useContext } from 'react';
import { lightTheme, darkTheme } from '@/app/componentsmui/ThemeColors';

export const ThemeContext = createContext();

// export const useThemeContext = () => {
//   return useContext(ThemeContext);
// };

const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleDarkMode,isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
