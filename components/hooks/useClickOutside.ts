import { Ref, useCallback, useEffect, useRef } from "react";

const useClickOutside = (callback) => {
  const currentRef = useRef<HTMLDivElement>(null);

  console.log("this ref", currentRef);

  const handleClickOutside = useCallback(
    (event) => {
      console.log("event", event);
      console.log("current Ref", currentRef.current);
      if (currentRef.current && !currentRef.current.contains(event.target)) {
        console.log("out click handled");
        callback();
      }
    },
    [callback, currentRef]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return currentRef;
};

export default useClickOutside;
