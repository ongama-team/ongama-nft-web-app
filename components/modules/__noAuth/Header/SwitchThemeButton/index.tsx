import { useTheme } from "@components/context/ThemeProvider";
import { MoonVector, VSun } from "@components/modules/__modules__/_vectors";
import React from "react";

const SwitchThemeButton = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <button
      className="border border-gray-300 transition-all duration-300 ease-in-out hover:border-gray-400 px-3 py-3 mx-1 rounded-full dark:text-white"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <MoonVector className="w-5 h-5" />
      ) : (
        <VSun className="w-5 h-5" />
      )}
    </button>
  );
};

export default SwitchThemeButton;
