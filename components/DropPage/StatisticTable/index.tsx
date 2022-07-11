import convertNumber from "@lib/helper/covertNumber";
import React, { FC } from "react";

interface IProps {
  statisticDtata: {
    title: string;
    value: number;
    type: string;
  }[];
}

const StatisticTable: FC<IProps> = ({ statisticDtata }) => {
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="flex flex-wrap my-6 mobile:my-2 mx-auto rounded-2xl justify-center font-ibmPlexSans">
        {statisticDtata.map((stat, index) => {
          return (
            <div
              key={index}
              className="py-3 flex  flex-col justify-center items-center w-32 border borde-gray-300 dark:border-gray-500"
            >
              <p className="text-gray-400">{stat.title}</p>
              <p className="font-semibold dark:text-white">
                {stat.type === "price"
                  ? `$${convertNumber(stat.value)}`
                  : `${convertNumber(stat.value)}`}
              </p>
            </div>
          );
        })}
      </div>
      <p className="w-96 mx-auto text-center font-ibmPlexSans text-gray-400 mobile:my-3 mobile:w-full">
        A community-driven collectibles project featuring art by Burnt Toast.
        Doodles come in a joyful range of colors, traits and sizes with a
        collection size of 10,000. Each Doodle allows its owner to vote for
        experiences and activations paid.
      </p>
    </div>
  );
};

export default StatisticTable;
