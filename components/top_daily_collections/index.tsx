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
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </div>
    </div>
  );
};

export default index;
