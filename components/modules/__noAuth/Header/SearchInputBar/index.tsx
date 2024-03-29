import React, { ChangeEventHandler, useState } from "react";
import { CrossVector, VSearch } from "@components/modules/__modules__/_vectors";

const SearchInputBar = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onInputSeachChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    const { value } = target;
    setInputValue(value);
  };

  const onInputSeachFocus = () => {
    setIsInputFocused(true);
  };

  const onInputSearchBlur = () => {
    setIsInputFocused(false);
  };

  const cleanInputVlaue = () => {
    setInputValue("");
  };

  return (
    <div
      className={`w-[60%] pr-5 pl-3 mx-auto flex items-center bg-gray-100 dark:bg-darkLight dark:text-white rounded-full transition-all ease-in-out duration-300 hover:border px-5 border-gray-300 dark:border-darkPrimary ${
        isInputFocused && "bg-white shadow-md"
      } min-lg:hidden`}
    >
      <VSearch className="text-gray-500 h-6 w-6" />
      <input
        type="search"
        onChange={onInputSeachChange}
        onFocus={onInputSeachFocus}
        onBlur={onInputSearchBlur}
        value={inputValue}
        placeholder="Collections, items, user"
        className="w-full py-3  bg-transparent placeholder:text-gray-500 outline-none px-2 font-ibmPlexSans "
      />
      {inputValue && (
        <button onClick={cleanInputVlaue}>
          <CrossVector className="h-4 w-4 cursor-pointer text-gray-600 rotate-45" />
        </button>
      )}
    </div>
  );
};

export default SearchInputBar;
