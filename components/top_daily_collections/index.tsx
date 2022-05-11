import CollectionCard from "./CollectionCard";

const index = () => {
  return (
    <div>
      <div className="font-bold text-xl text-white font-plex md:text-2xl lg:text-3xl px-8">
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
      <div className="h-72 flex flex-col flex-wrap font-plex overflow-x-scroll  px-8 py-6 scrollbar-hide">
        <CollectionCard
          rank={1}
          collectionProfile={
            "https://i.insider.com/61b36edd0e2e8d001846a6c7?width=962&format=jpeg"
          }
          collectionName={"MutantApeYatchClub"}
          volumeTraded={9015192.876}
        />
        <CollectionCard
          rank={2}
          collectionProfile={
            "https://i.insider.com/61b36edd0e2e8d001846a6c7?width=962&format=jpeg"
          }
          collectionName={"MutantApeYatchClub"}
          volumeTraded={9015192}
        />
        <CollectionCard
          rank={3}
          collectionProfile={
            "https://i.insider.com/61b36edd0e2e8d001846a6c7?width=962&format=jpeg"
          }
          collectionName={"MutantApeYatchClub"}
          volumeTraded={90152}
        />
        <CollectionCard
          rank={4}
          collectionProfile={
            "https://i.insider.com/61b36edd0e2e8d001846a6c7?width=962&format=jpeg"
          }
          collectionName={"MutantApeYatchClub"}
          volumeTraded={9015192}
        />
        <CollectionCard
          rank={5}
          collectionProfile={
            "https://i.insider.com/61b36edd0e2e8d001846a6c7?width=962&format=jpeg"
          }
          collectionName={"MutantApeYatchClub"}
          volumeTraded={9015192}
        />
        <CollectionCard
          rank={6}
          collectionProfile={
            "https://i.insider.com/61b36edd0e2e8d001846a6c7?width=962&format=jpeg"
          }
          collectionName={"MutantApeYatchClub"}
          volumeTraded={9015192}
        />
        <CollectionCard
          rank={7}
          collectionProfile={
            "https://i.insider.com/61b36edd0e2e8d001846a6c7?width=962&format=jpeg"
          }
          collectionName={"MutantApeYatchClub"}
          volumeTraded={9015192}
        />
        <CollectionCard
          rank={8}
          collectionProfile={
            "https://i.insider.com/61b36edd0e2e8d001846a6c7?width=962&format=jpeg"
          }
          collectionName={"MutantApeYatchClub"}
          volumeTraded={9015192}
        />
        <CollectionCard
          rank={9}
          collectionProfile={
            "https://i.insider.com/61b36edd0e2e8d001846a6c7?width=962&format=jpeg"
          }
          collectionName={"MutantApeYatchClub"}
          volumeTraded={9015192}
        />
        <CollectionCard
          rank={10}
          collectionProfile={
            "https://i.insider.com/61b36edd0e2e8d001846a6c7?width=962&format=jpeg"
          }
          collectionName={"MutantApeYatchClub"}
          volumeTraded={9015192}
        />
        <CollectionCard
          rank={11}
          collectionProfile={
            "https://i.insider.com/61b36edd0e2e8d001846a6c7?width=962&format=jpeg"
          }
          collectionName={"MutantApeYatchClub"}
          volumeTraded={9015192}
        />
        <CollectionCard
          rank={12}
          collectionProfile={
            "https://i.insider.com/61b36edd0e2e8d001846a6c7?width=962&format=jpeg"
          }
          collectionName={"MutantApeYatchClub"}
          volumeTraded={9015192}
        />
      </div>
    </div>
  );
};

export default index;
