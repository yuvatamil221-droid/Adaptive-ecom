import { createContext, useContext } from "react";
import { UserContext } from "./UserContext";
import themes from "../config/themes";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const { userConfig } = useContext(UserContext);

  const theme =
    themes[userConfig.theme] || themes.minimal;

  return (
    <ThemeContext.Provider
      value={{
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;