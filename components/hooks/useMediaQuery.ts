import { useEffect, useState } from "react";

const useMediaQuery = (screen = "(max-width: 768px)") => {
  const [matches, setMatches] = useState<boolean>(false);

  if (typeof window === "undefined") {
    return [false];
  }

  const watchMedia = window.matchMedia(screen);

  const onResizeScreen = (event: MediaQueryListEvent | boolean) => {
    setMatches(typeof event === "boolean" ? event : event.matches);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setMatches(watchMedia.matches);

    try {
      watchMedia.addEventListener("change", onResizeScreen);
    } catch (error) {
      watchMedia.addListener(onResizeScreen);
    }

    return () => {
      try {
        watchMedia.removeEventListener("change", onResizeScreen);
      } catch (error) {
        watchMedia.removeListener(onResizeScreen);
      }
    };
  }, [watchMedia]);

  return [matches, setMatches];
};

export default useMediaQuery;
