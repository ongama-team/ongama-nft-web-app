import HotCollectionCard from "@components/modules/__modules__/Card/HotCollectionCard";
import { dummy_data } from "../../__noAuth/Presentation/dummy_data";
import Carousel from "@components/modules/__modules__/Carousel/Carousel";

const HotCollections = () => {
  return (
    <div className=" 2xl:w-[80%] xl:w-[85%] lg:w-[90%] md:w-[95%] mx-auto h-fit px-6">
      <h2 className="font-bold text-xl text-black font-ibmPlexSans md:text-2xl lg:text-3xl dark:text-white">
        Hot collections 💥
      </h2>

      <div className="flex items-center mx-auto h-fit">
        <Carousel>
          <div className="flex font-ibmPlexSans py-6">
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
        </Carousel>
      </div>
    </div>
  );
};

export default HotCollections;
