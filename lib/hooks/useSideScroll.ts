const useSideScroll = () => {
  const sideScroll = (
    element: HTMLDivElement,
    speed: number,
    distance: number,
    step: number | undefined
  ) => {
    let scrollAmount = 0;

    const slideTimer = setInterval(() => {
      element.scrollLeft += step as number;
      scrollAmount += Math.abs(step as number);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  return sideScroll;
};

export default useSideScroll;
