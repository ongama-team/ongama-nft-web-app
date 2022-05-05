import React from "react";

const SearchInputBar = () => {
  return (
    <div className="w-full pr-5 pl-3">
      <input
        type="search"
        placeholder="Collections, items, user"
        className="w-full bg-gray-200 py-2 rounded-full placeholder:text-gray-500 outline-none px-5"
      />
    </div>
  );
};

export default SearchInputBar;
