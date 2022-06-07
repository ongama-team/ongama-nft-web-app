import { useCallback, useEffect, useRef } from "react";

const useClickOutside = (callback) => {
  const currentRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event) => {
      if (currentRef.current && !currentRef.current.contains(event.target)) {
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
