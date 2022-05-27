/* eslint-disable @next/next/no-img-element */
import { formatToDollars } from "helpers/numberFormatter";
import { dummy_data } from "../../../__noAuth/TopSellers/dummy_data";
import { VerifiedImg } from "@lib/Resources";

const TopSellersCard = () => {
  const { topSellersData } = dummy_data;
  return (
    <>
      {topSellersData.map((seller) => {
        return (
          <div
            className=" flex-none h-14 w-[250px] bg-none flex items-center mx-1 my-2"
            key={seller.id}
          >
            <span className="text-gray-400">{seller.id}</span>
            <div className="flex">
              <section className="relative">
                <img
                  src={seller.url}
                  alt="profile"
                  className="h-12 w-12 rounded-full ml-4 mr-4"
                />
                <img
                  src={VerifiedImg}
                  alt="checkmark"
                  className="h-8 absolute bottom-[-7px] right-2"
                />
              </section>

              <section>
                <h4 className="text-black text-sm font-bold">{seller.title}</h4>
                <span className="text-sm font-semibold text-gray-400">
                  {formatToDollars(seller.price)}
                </span>
              </section>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TopSellersCard;
