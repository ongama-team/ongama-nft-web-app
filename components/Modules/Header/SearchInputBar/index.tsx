import React, { ChangeEventHandler, useState } from "react";
import PlusVector from "../../vectors/plusVector";
import SearchVector from "../../vectors/searchVector";

const SearchInputBar = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isInputValueEmpty, setIsInputValueEmpty] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const onInputSeachChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
    event.target.value.length > 0
      ? setIsInputValueEmpty(false)
      : setIsInputValueEmpty(true);
  };

  const onInputSeachFocus = () => {
    setIsInputFocused(true);
  };

  const onInputSearchBlur = () => {
    setIsInputFocused(false);
  };

  const cleanInputVlaue = () => {
    setInputValue("");
    setIsInputValueEmpty(true);
  };

  return (
    // <div className="mx-auto">
    <div
      className={`w-[95%] pr-5 pl-3 mx-auto flex items-center bg-gray-200 rounded-full transition-all ease-in-out duration-300 hover:border px-5 border-gray-300 ${
        isInputFocused && "bg-white shadow-md"
      } min_lg:hidden`}
    >
      <SearchVector className="text-gray-500 h-6 w-6" />
      <input
        type="search"
        onChange={onInputSeachChange}
        onFocus={onInputSeachFocus}
        onBlur={onInputSearchBlur}
        value={inputValue}
        placeholder="Collections, items, user"
        className="w-full py-2  bg-transparent placeholder:text-gray-500 outline-none px-2 font-IBEM_Plex_Sans "
      />
      {!isInputValueEmpty && (
        <div onClick={cleanInputVlaue}>
          <PlusVector className="rotate-45 h-8 w-8 text-gray-500 cursor-pointer" />
        </div>
      )}
    </div>
    // </div>
  );
};

export default SearchInputBar;
