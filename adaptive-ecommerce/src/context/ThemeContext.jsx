import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import themes from "../config/themes";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const { userConfig } = useContext(UserContext);

  const [darkMode, setDarkMode] = useState(false);

  const themeName = darkMode ? "dark" : userConfig.theme;

  const theme = themes[themeName] || themes.minimal;

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;