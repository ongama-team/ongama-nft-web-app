/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { dummy_data } from "../dummy_data";

const StoryPresentation = () => {
  const { story } = dummy_data;
  let storyIndex = useRef(0);
  const storyDuration = 5000; //story duration in miliseconds
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  useEffect(() => {
    const callback = () => {
      setCurrentStoryIndex(storyIndex.current - 1);
    };
    const timer = setTimeout(callback, storyDuration);

    if (storyIndex.current === story.length) {
      storyIndex.current = 0;
    }
    storyIndex.current += 1;

    return () => clearTimeout(timer);
  }, [story, storyIndex.current]);

  return (
    <div className="relative">
      <div className="relative">
        <img
          src={story[currentStoryIndex].url as string}
          alt={story[currentStoryIndex].name}
          className="2xl:w-[33rem] 2xl:h-[33rem] xl:h-[29rem] xl:w-[29rem] lg:w-[23rem] lg:h-[23rem] md:w-[17rem] md:h-[17rem] w-[-webkit-fill-available] h-96 object-cover rounded-2xl cursor-pointer"
        />
        <p className="absolute top-0 text-white px-5 py-5 text-3xl font-ibmPlexSans transition-all ease-in-out duration-500 w-full rounded-t-2xl text-shadow">
          {story[currentStoryIndex].name}
        </p>
      </div>
    </div>
  );
};

export default StoryPresentation;
