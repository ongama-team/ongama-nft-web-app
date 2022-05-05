import React from "react";
import Menu from "./Menu";
import SearchInputBar from "./SearchInputBar";
import MoonVector from "../vectors/moonVector";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-5 py-3">
      <div>
        <p>Ongama</p>
      </div>
      <div className="grid grid-cols-2 justify-center items-center w-full">
        <SearchInputBar />
        <Menu />
      </div>
      <div className="flex items-center">
        <button className="border border-gray-300 px-2 py-2 mx-1 w-20 text-xs rounded-full font-IBEM_Plex_Sans">
          Create
        </button>
        <button className="border border-gray-300 hover:border-gray-400 px-2 py-2 mx-1 w-20 text-xs rounded-full font-IBEM_Plex_Sans">
          Sign in
        </button>
        <button className="border border-gray-300 hover:border-gray-400 px-2 py-2 mx-1 rounded-full">
          <MoonVector className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Header;
