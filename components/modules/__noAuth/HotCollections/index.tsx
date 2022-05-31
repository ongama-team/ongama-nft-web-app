import HotCollectionCard from "@components/modules/__modules__/Card/HotCollectionCard";
import { dummy_data } from "../../__noAuth/Presentation/dummy_data";

const HotCollections = () => {
  return (
    <div className="flex flex-col justify-center 2xl:w-[80%] xl:w-[85%] lg:w-[90%] md:w-[95%] mx-auto px-5 my-10">
      <h2 className="font-bold text-xl text-black font-ibmPlexSans md:text-2xl lg:text-3xl">
        Hot collections 💥
      </h2>
      <div className="flex flex-col font-ibmPlexSans overflow-x-scroll px-0 py-6 scrollbar-hide">
        {dummy_data?.hotCollections.map(
          ({ name, profileUrl, bannerUrl, volumeTraded, isVerified }) => (
            <HotCollectionCard
              key={name}
              profileUrl={profileUrl}
              bannerUrl={bannerUrl}
              name={name}
              volumeTraded={volumeTraded}
              isVerified={isVerified}
            />
          )
        )}
      </div>
    </div>
  );
};

export default HotCollections;
