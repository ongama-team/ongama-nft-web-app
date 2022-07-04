/* eslint-disable @next/next/no-img-element */
import { currentAccountState, walletAddressAtom } from "@lib/atoms";
import { saveFileWithIpfs } from "@lib/ipfsClient";
import { UserAccount } from "@lib/models/UserAccount";
import { NoCoverImg } from "@lib/Resources";
import { backendApiService } from "@lib/services/BackendApiService";
import { orderObject } from "@lib/Utils";
import { Web3Service } from "@lib/web3";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import UserAvatarCard from "../UserAvatarCard";

interface IProps {
  user: UserAccount;
}

const AvatarAndCoverCard = () => {
  const [isAddCover, setIsAddCover] = useState(false);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [currentAccount, setCurrentAccount] =
    useRecoilState(currentAccountState);
  const currentSigner = useRecoilValue(walletAddressAtom);
  const router = useRouter();

  const onSelectNewCover = () => {
    inputFileRef.current?.click();
  };

  const updateCover = async (coverUrl: string, signature: string) => {
    const updateCoverResponse = await backendApiService.updateProfile({
      walletAddress: currentSigner.address,
      coverUrl: coverUrl,
      coverThumbnailUrl: coverUrl,
      signature,
    });

    console.log("update cover response", updateCoverResponse);
    if (!updateCoverResponse) {
    }

    return updateCoverResponse;
  };

  const getSignature = async () => {
    const web3Services = new Web3Service();
    const userSignature = await web3Services.signPersonalMessage(
      JSON.stringify(
        orderObject({
          ...currentAccount,
        })
      ),
      `${currentSigner.address}`
    );

    return userSignature?.signature;
  };

  const onCoverChange = async (e) => {
    const { files } = e.target;
    const fileUrl = await saveFileWithIpfs(files);
    console.log("file url", fileUrl);

    if (fileUrl) {
      const signature = await getSignature();
      if (signature) {
        await updateCover(fileUrl, signature);
      }
    }
  };

  return (
    <div className="relative">
      <img
        src={
          currentAccount?.coverUrl ||
          currentAccount?.coverThumbnailUrl ||
          NoCoverImg.src
        }
        alt={currentAccount?.username}
        className="h-[260px] w-full object-cover rounded-2xl"
        onMouseOver={() => setIsAddCover(!isAddCover)}
      />
      <div
        className={`absolute top-0 right-0 m-5 ${
          isAddCover
            ? "translate-y-0 transition-all"
            : "-translate-y-[2000px] transition-all"
        }`}
      >
        <input
          ref={inputFileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onCoverChange}
        />
        <button
          onClick={onSelectNewCover}
          className="bg-white px-5 py-2 rounded-md font-bold hover:scale-105 transition-all"
        >
          Add Cover
        </button>
      </div>
      <div className="w-full flex justify-center">
        <UserAvatarCard
          identiconSize={150}
          allowVerifiedIcon={true}
          onUserAvatarClicked={() =>
            router.push(`/profile/${currentAccount?.walletAddress}`)
          }
          identiconContainerClassName={
            "rounded-full overflow-hidden -mt-20 border-2 shadow-xl bg-white border-gray-100"
          }
          userAvatarClassName={
            "h-[120px] w-[120px] -mt-20 object-cover border-4 border-white border-solid rounded-full relative"
          }
          user={currentAccount!}
        />
      </div>
      <div></div>
    </div>
  );
};

export default AvatarAndCoverCard;
