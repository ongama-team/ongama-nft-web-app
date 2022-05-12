import { DotsVector, Ethereum, HeartVector } from "../_vectors";
import Image from "next/image";
import pic from "../../assets/pic1.png";
import nft from "../../assets/nft.png";

function Card() {
  return (
    <div className="flex w-full shadow-lg mx-auto p-5 rounded-xl flex-col bg-white">
      <div className="flex mx-1 items-center justify-between">
        <div className="rounded-full overflow-hidden w-7 h-7">
          <Image src={pic} alt="profile" className="w-full object-cover" />
        </div>
        <DotsVector className="w-4 h-4 opacity-70" />
      </div>

      <div className="rounded-3xl mt-4 overflow-hidden">
        <Image
          width={500}
          height={500}
          src={nft}
          alt="nft"
          className="object-cover"
        />
      </div>

      <div className="mt-1 flex justify-between">
        <p className="text-sm font-bold">Derick #3214</p>
        <Ethereum className="h-6 w-6" />
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-sm font-bold">
            2.5 ETH{" "}
            <label className="text-gray-500 text-sm font-bold">1/1</label>
          </p>
          <button className="text-blue-500 font-bold text-sm pt-1">
            Buy now
          </button>
        </div>
        <div className="flex opacity-80">
          <HeartVector className="h-6 w-6" />
          <p className="text-xl ml-2 font-bold">3</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
