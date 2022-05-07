import React, { useState } from "react";
import Menu from "./Menu";
import SearchInputBar from "./SearchInputBar";
import MoonVector from "../vectors/moonVector";
import SunVector from "../vectors/sunVector";
import SearchVector from "../vectors/searchVector";
import MenuVector from "../vectors/menuVector";

const Header = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <div className="flex justify-between items-center px-5 py-3 fixed top-0 left-0 right-0 backdrop-blur-lg z-10">
      <div>
        <p className="flex items-center text-3xl font-IBEM_Plex_Sans">
          <span className="text-blue-500">O</span>ngama
        </p>
      </div>
      <div className="grid grid-cols-2 min_lg:flex min_lg:justify-start justify-center items-center w-full">
        <SearchInputBar />
        <Menu />
      </div>
      <div className="flex items-center">
        <button className="border border-gray-300 transition-all duration-300 ease-in-out hover:border-gray-400 px-3 py-3 mx-1 rounded-full min_lg:block hidden">
          <SearchVector />
        </button>
        <button className="border-none px-2 py-3 mx-1 w-20 rounded-full text-white transition-all duration-500 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-blue-400 hover:to-blue-600 font-IBEM_Plex_Sans min_md:hidden">
          Create
        </button>
        <button className="border border-gray-300 transition-all duration-300 ease-in-out hover:border-gray-400 px-2 py-3 mx-1 w-20  rounded-full font-IBEM_Plex_Sans min_md:hidden">
          Sign in
        </button>
        <button
          className="border border-gray-300 transition-all duration-300 ease-in-out hover:border-gray-400 px-3 py-3 mx-1 rounded-full"
          onClick={toggleTheme}
        >
          {isLightTheme ? (
            <MoonVector className="w-5 h-5" />
          ) : (
            <SunVector className="w-5 h-5" />
          )}
        </button>
        <button className="border border-gray-300 transition-all duration-300 ease-in-out hover:border-gray-400 px-3 py-3 mx-1 rounded-full min_md:block hidden">
          <MenuVector />
        </button>
      </div>
    </div>
  );
};

export default Header;
