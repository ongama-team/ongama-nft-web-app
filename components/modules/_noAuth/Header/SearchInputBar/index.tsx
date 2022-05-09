import React, { ChangeEventHandler, useState } from "react";
import { CrossVector, VSearch } from "../../../__modules__/_vectors";

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
      className={`w-[95%] pr-5 pl-3 mx-auto flex items-center bg-gray-200 rounded-full transition-all ease-in-out duration-300 hover:border px-5 border-gray-300 ${
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
        className="w-full py-2  bg-transparent placeholder:text-gray-500 outline-none px-2 font-ibmPlexSans "
      />
      {inputValue && (
        <div onClick={cleanInputVlaue}>
          <CrossVector className="h-4 w-4 cursor-pointer text-gray-600" />
        </div>
      )}
    </div>
  );
};

export default SearchInputBar;
