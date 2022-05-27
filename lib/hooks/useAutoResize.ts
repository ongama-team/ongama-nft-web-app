import React, { useEffect, useRef, useState } from "react";

const useAutoResize = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [textAreaValue, setTextAreaValue] = useState("");

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "0px";
      const scrollHeight = textAreaRef.current?.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaValue]);

  return {
    setTextAreaValue,
    textAreaRef,
  };
};

export default useAutoResize;
