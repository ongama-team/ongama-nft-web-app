import { DotsVector, Ethereum, HeartVector } from "../_vectors";
import Image from "next/image";
import pic from "../../assets/pic1.png";
import nft from "../../assets/nft.png";

function Card() {
  return (
    <div className="flex w-[500px] shadow-lg mx-auto p-8 rounded-xl flex-col bg-white">
      <div className="flex mx-4 items-center justify-between">
        <div className="rounded-full overflow-hidden w-12 h-12">
          <Image src={pic} alt="profile" className="w-full object-cover" />
        </div>
        <DotsVector className="w-8 h-8 opacity-70" />
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

      <div className="mt-4 flex justify-between">
        <p className="text-3xl font-bold">Derick #3214</p>
        <Ethereum className="h-10 w-10" />
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-3xl font-bold">
            2.5 ETH{" "}
            <label className="text-gray-500  text-3xl font-bold">1/1</label>
          </p>
          <button className="text-blue-500 font-bold text-3xl pt-4">
            Buy now
          </button>
        </div>
        <div className="flex opacity-80">
          <HeartVector className="h-10 w-10" />
          <p className="text-3xl ml-2 font-bold">3</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
