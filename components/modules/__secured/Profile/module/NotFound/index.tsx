import React from "react";
import { useRouter } from "next/router";

interface IProps {
  content: string;
}

const NotFound = ({ content }: IProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <h2 className="font-bold text-2xl font-ibmPlexSans dark:text-white">
        Nothing Yet
      </h2>
      <p className="text-gray-400 font-ibmPlexSans py-2 w-56 text-center font-bold">
        Looks like there&apos;s still nothing.
        {content} will be shown here
      </p>
      <button
        onClick={() => router.push("/")}
        className="bg-gray-100 dark:text-darkPrimary py-2 px-5 rounded-lg font-semibold my-1 hover:bg-gray-200 transition-all"
      >
        Explore Ongama
      </button>
    </div>
  );
};

export default NotFound;
