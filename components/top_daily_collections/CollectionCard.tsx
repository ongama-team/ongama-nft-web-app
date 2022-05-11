const CollectionCard = () => {
  return (
    <div className=" flex-none h-14 w-[250px] bg-none flex items-center mx-1 my-2">
      <span className="text-gray-400">1</span>
      <div className="flex">
        <section className="relative">
          <img
            src="https://i.insider.com/61b36edd0e2e8d001846a6c7?width=962&format=jpeg"
            alt="profile"
            className="h-12 w-12 rounded-full ml-4 mr-4"
          />
          <img
            src="/images/rarible-checkmark.png"
            alt="checkmark"
            className="h-8 absolute bottom-[-8px] right-0"
          />
        </section>

        <section>
          <h4 className="text-white text-sm font-bold">MutantApeYachtClub</h4>
          <span className="text-sm font-semibold text-gray-400">
            $9,015,192
          </span>
        </section>
      </div>
    </div>
  );
};

export default CollectionCard;
