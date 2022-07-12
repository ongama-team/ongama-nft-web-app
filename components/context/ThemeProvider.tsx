import LocalStorage from "@lib/helper/LocalStorage";
import React, {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

interface ISwitchTheme {
  theme: string | undefined;
  setTheme: Dispatch<SetStateAction<string | undefined>>;
}

const defaultContext: ISwitchTheme = {
  theme: "light",
  setTheme: () => null,
};

const SwitchThemeContext = createContext(defaultContext);
export const useTheme = () => useContext(SwitchThemeContext);

const ThemeProvider = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    const currentTheme = LocalStorage.getItem("ongama_current_theme");
    if (currentTheme) return currentTheme;
    LocalStorage.setItem("ongama_current_theme", "light");
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    LocalStorage.setItem("ongama_current_theme", theme!);
  }, [theme]);

  return (
    <SwitchThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${hasMounted && theme}`}>{children}</div>
    </SwitchThemeContext.Provider>
  );
};

export default ThemeProvider;
