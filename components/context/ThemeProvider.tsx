import React, {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface ISwitchTheme {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

const defaultContext: ISwitchTheme = {
  theme: "light",
  setTheme: () => null,
};

const SwitchThemeContext = createContext(defaultContext);
export const useTheme = () => useContext(SwitchThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <SwitchThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>{children}</div>
    </SwitchThemeContext.Provider>
  );
};

export default ThemeProvider;
