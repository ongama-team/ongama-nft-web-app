/* eslint-disable @next/next/no-img-element */
import UpdateStatusModal from "@components/EditProfilePage/updateStatusModal";
import { currentAccountState, walletAddressAtom } from "@lib/atoms";
import { saveFileWithIpfs } from "@lib/ipfsClient";
import { UserAccount } from "@lib/models/UserAccount";
import { NoCoverImg } from "@lib/Resources";
import { backendApiService } from "@lib/services/BackendApiService";
import { orderObject } from "@lib/Utils";
import { Web3Service } from "@lib/web3";
import { useRouter } from "next/router";
import { userInfo } from "os";
import React, { useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import UserAvatarCard from "../UserAvatarCard";

interface IProps {
  isEditable: boolean;
  user?: UserAccount;
}

const AvatarAndCoverCard = ({ isEditable, user }: IProps) => {
  const [isAddCover, setIsAddCover] = useState(false);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [currentAccount, setCurrentAccount] =
    useRecoilState(currentAccountState);
  const currentSigner = useRecoilValue(walletAddressAtom);
  const [isUpdateSucceed, setIsUpdateSucceed] = useState(false);
  const [isUpdatePending, setIsUpdatePending] = useState(false);
  const [isUpdateModal, setIsUpdateModal] = useState(false);
  const router = useRouter();

  const onSelectNewCover = () => {
    inputFileRef.current?.click();
  };

  const updateCover = async (coverUrl: string, signature: string) => {
    const updateCoverResponse = await backendApiService.updateProfile({
      walletAddress: currentSigner.address,
      coverThumbnailUrl: coverUrl,
      coverUrl: coverUrl,
      signature,
    });

    console.log("update cover response in update", updateCoverResponse);

    return updateCoverResponse;
  };

  const getSignature = async () => {
    const web3Services = new Web3Service();
    const userSignature = await web3Services.signPersonalMessage(
      JSON.stringify(
        orderObject({
          walletAddress: currentSigner.address,
          username: currentAccount?.username,
          userBio: currentAccount?.userBio,
          avatarUrl: currentAccount?.avatarUrl,
          avatarUrlCompressed: currentAccount?.avatarUrlCompressed,
          avatarUrlThumbnail: currentAccount?.avatarUrlThumbnail,
          coverThumbnailUrl: currentAccount?.coverThumbnailUrl,
          coverUrl: currentAccount?.coverUrl,
        })
      ),
      `${currentSigner.address}`
    );

    return userSignature?.signature;
  };

  const onCoverChange = async (e) => {
    const { files } = e.target;
    console.log("cover file", files);
    setIsAddCover(false);
    setIsUpdateModal(!isUpdateModal);
    setIsUpdatePending(true);
    const fileUrl = await saveFileWithIpfs(files);
    console.log("file url", fileUrl);

    if (fileUrl) {
      const signature = await getSignature();

      if (signature) {
        const updateCoverResponse = await updateCover(fileUrl, signature);
        console.log("update cover response", updateCoverResponse);

        if (!updateCoverResponse) {
          setIsUpdateSucceed(false);
          setIsUpdatePending(false);
          return;
        } else {
          setIsUpdatePending(false);
          setIsUpdateSucceed(true);
        }
      }
    }
  };

  return (
    <div className="relative">
      <img
        src={
          isEditable
            ? currentAccount?.coverUrl ||
              currentAccount?.coverThumbnailUrl ||
              NoCoverImg.src
            : user?.coverUrl || user?.coverThumbnailUrl || NoCoverImg.src
        }
        alt={currentAccount?.username}
        className="h-[260px] w-full object-cover rounded-2xl"
        onMouseOver={() => setIsAddCover(true)}
        onMouseOut={() => setIsAddCover(false)}
      />
      <div
        onMouseOver={() => setIsAddCover(true)}
        onMouseOut={() => setIsAddCover(false)}
        className={`absolute top-0 right-0 m-5 ${
          isAddCover && isEditable
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
            isEditable &&
            router.push(`/profile/${currentAccount?.walletAddress}`)
          }
          identiconContainerClassName={
            "rounded-full overflow-hidden -mt-20 border-2 shadow-xl bg-white border-gray-100"
          }
          userAvatarClassName={
            "h-[120px] w-[120px] -mt-20 object-cover border-4 border-white border-solid rounded-full relative"
          }
          user={isEditable ? currentAccount! : user!}
        />
      </div>
      {isUpdateModal && (
        <UpdateStatusModal
          onCloseStatusModal={() => setIsUpdateModal(false)}
          onTryAgain={async () => {
            setIsUpdateModal(false);
            onSelectNewCover();
          }}
          isProcessing={isUpdatePending}
          updateSuccess={isUpdateSucceed}
        />
      )}
    </div>
  );
};

export default AvatarAndCoverCard;
