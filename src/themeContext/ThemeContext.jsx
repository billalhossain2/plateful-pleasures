import { createContext, useState } from "react";
export const themeContext = createContext();
const ThemeContext = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <themeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContext;
