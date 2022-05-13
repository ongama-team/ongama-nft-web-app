import CollectionCard from "./CollectionCard";

const index = () => {
  const topCollections = new Array(8).fill({
    id: Math.random() * Math.random(), //this will act as a key while looping through the array
    rank: 1,
    collectionName: "MutantApeYatchClub",
    collectionProfile:
      "https://i.insider.com/61b36edd0e2e8d001846a6c7?width=962&format=jpeg",
    volumeTraded: 466748,
  });

  return (
    <div>
      <div className="font-bold text-xl text-white font-ibmPlexSans md:text-2xl lg:text-3xl px-8">
        Top collections in
        <select
          name="days"
          className="bg-transparent font-bold border-none outline-none text-blue-500 px-1"
        >
          <option defaultChecked value="1">
            1 day
          </option>
          <option value="7"> 7 days</option>
          <option value="30">30 days</option>
        </select>
      </div>
      <div className="h-72 flex flex-col flex-wrap font-ibmPlexSans overflow-x-scroll  px-8 py-6 scrollbar-hide">
        {topCollections?.map(
          ({ id, rank, collectionName, collectionProfile, volumeTraded }) => (
            <CollectionCard
              key={id}
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

export default index;
