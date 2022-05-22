import React, { useState } from "react";
import {
  VSun,
  MoonVector,
  VSearch,
  VMenu,
} from "@components/modules/__modules__/_vectors";
import Menu from "./Menu";
import SearchInputBar from "./SearchInputBar";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { walletAtom } from "@lib/atoms";

const Header = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [isWalletsDisplayed, setIsWalletsDisplayed] =
    useRecoilState(walletAtom);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  const toggleWallets = () => {
    setIsWalletsDisplayed(!isWalletsDisplayed);
  };

  return (
    <div className="flex justify-between items-center px-5 py-3 fixed top-0 left-0 right-0 backdrop-blur-lg z-20">
      <div>
        <Link passHref href="/">
          <p className="flex items-center text-3xl font-ibmPlexSans hover:cursor-pointer">
            <span className="text-blue-500">O</span>ngama
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-2 min-lg:flex min-lg:justify-start justify-center items-center w-full">
        <SearchInputBar />
        <Menu />
      </div>
      <div className="flex items-center">
        <button className="border border-gray-300 transition-all duration-300 ease-in-out hover:border-gray-400 px-3 py-3 mx-1 rounded-full min-lg:block hidden">
          <VSearch className="w-6 h-6" />
        </button>
        <button className="border-none px-2 py-3 mx-1 w-20 rounded-full text-white transition-all duration-500 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-blue-400 hover:to-blue-600 font-ibmPlexSans min-md:hidden">
          Create
        </button>
        <button
          onClick={toggleWallets}
          className="border border-gray-300 transition-all duration-300 ease-in-out hover:border-gray-400 px-2 py-3 mx-1 w-20  rounded-full font-ibmPlexSans min-md:hidden"
        >
          Sign in
        </button>
        <button
          className="border border-gray-300 transition-all duration-300 ease-in-out hover:border-gray-400 px-3 py-3 mx-1 rounded-full"
          onClick={toggleTheme}
        >
          {isLightTheme ? (
            <MoonVector className="w-5 h-5" />
          ) : (
            <VSun className="w-5 h-5" />
          )}
        </button>
        <button className="border border-gray-300 transition-all duration-300 ease-in-out hover:border-gray-400 px-3 py-3 mx-1 rounded-full min-md:block hidden">
          <VMenu className="w-6-h-6" />
        </button>
      </div>
    </div>
  );
};

export default Header;
