import CollectionCard from "../../__modules__/Card/CollectionCard";

const TopCollection = () => {
  const topCollections = new Array(15).fill({
    id: Math.random() * Math.random(), //this will act as a key while looping through the array
    rank: 1,
    collectionName: "MutantApeYatchClub",
    collectionProfile:
      "https://i.insider.com/61b36edd0e2e8d001846a6c7?width=962&format=jpeg",
    volumeTraded: 466748,
  });

  return (
    <div className="flex flex-col justify-center 2xl:w-[80%] xl:w-[85%] lg:w-[90%] md:w-[95%] mx-auto px-5 mt-20">
      <div className="font-bold text-xl text-black font-ibmPlexSans md:text-2xl lg:text-3xl dark:text-white">
        Top collections in
        <select
          name="days"
          className="bg-transparent font-bold border-none outline-none text-blue-500 px-1 rounded-lg mx-2 mobile:mx-0"
        >
          <option defaultChecked value="1" className="text-sm border-none py-2">
            1 day
          </option>
          <option value="7" className="text-black text-sm py-2">
            7 days
          </option>
          <option value="30" className="text-black text-sm py-2">
            30 days
          </option>
        </select>
      </div>
      <div className="h-72 flex flex-col flex-wrap font-ibmPlexSans overflow-x-scroll px-0 py-6 scrollbar-hide">
        {topCollections?.map(
          (
            { id, rank, collectionName, collectionProfile, volumeTraded },
            index
          ) => (
            <CollectionCard
              key={index}
              rank={rank}
              collectionProfile={collectionProfile}
              collectionName={collectionName}
              volumeTraded={volumeTraded}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TopCollection;
