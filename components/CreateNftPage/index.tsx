/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import {
  CrossVector,
  VQuestionMark,
} from "@components/modules/__modules__/_vectors";
import { useRecoilValue } from "recoil";
import { walletAddressAtom } from "@lib/atoms";
import truncateAddress from "@lib/helper/truncateAddress";
import { Switch } from "antd";
import DetailsForm from "./DetailsForm";
import AdvancedSettingForm from "./AdvanceSettingForm";
import Header from "@components/modules/__noAuth/Header";
import PutOnMarketMenu from "./PutOnMarketMenu";
import ChooseCollection from "./ChooseCollection";
import NftPreview from "./NftPreview";
import WalletInfoCard from "@components/modules/__modules__/Card/WalletInfoCard";
import ProfileMenu from "@components/modules/__secured/ProfileMenu";
import { NFT } from "@lib/models/GeneralModel";
import { saveFileWithIpfs } from "@lib/ipfsClient";
import { generateTokenUri } from "@lib/Utils";

const CreateNftPage = () => {
  const [isFreeMinting, setIsFreeMinting] = useState(true);
  const [isAdvancedForm, setIsAdvancedForm] = useState(false);
  const [nftDetails, setNftDetails] = useState<NFT>({
    category: "",
    oldDropID: "",
    dropId: 0,
    tokenUri: "",
    description: "",
    fileSize: 0,
    fileType: "",
    name: "",
    ownerAddress: "",
    price: 0,
    storageFee: 0,
    storageFeeTransaction: "",
    url: "",
  });
  const [previewUrl, setPreviewUrl] = useState("");
  const [inputFile, setInputFile] = useState();
  const [isImage, setIsImage] = useState(true);
  const { address } = useRecoilValue(walletAddressAtom);
  const truncatedWalletAddress = truncateAddress(address, 10, 4);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const onChooseFile = () => {
    inputFileRef.current?.click();
  };

  const onFileChange = async (event: { target: any }) => {
    const { files } = event.target;
    setIsImage((files[0].type as string).includes("image"));
    setInputFile(files[0]);
    const fileUrl = await saveFileWithIpfs(files);
    const filePreviewUrl = URL.createObjectURL(files[0]);
    if (fileUrl) setNftDetails({ ...nftDetails, url: fileUrl });
    setPreviewUrl(filePreviewUrl);
  };

  const onNftDetailsChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;
    setNftDetails({ ...nftDetails, [name]: value });
  };

  const onCancel = () => {
    setPreviewUrl("");
  };

  const onMintNft = () => {
    const tokenUri = generateTokenUri();
    console.log("NFT token URI", tokenUri);
  };

  return (
    <>
      <Header />
      <div className="py-20 font-ibmPlexSans 2xl:w-2/4 lg:w-3/4 md:w-5/6 min-md:w-full min-lg:px-5 m-auto">
        <h1 className="text-4xlimport font-semibold text-4xl min-md:w-full min-lg:w-full min-lg:text-3xl">
          Create Single item on Ethereum
        </h1>
        <div className="flex mt-10 min-lg:w-full min-md:block">
          <div className="flex flex-col">
            <p className="font-bold">Choose wallet</p>
            <WalletInfoCard truncatedWalletAddress={truncatedWalletAddress} />
            <div>
              <p className="font-bold">Upload file</p>
              <div className="border-2 border-dashed border-gray-300 my-5 py-10 rounded-xl text-center">
                <div
                  className={`flex justify-center w-3/4 m-auto ${
                    !nftDetails.url && "hidden"
                  }`}
                >
                  {isImage ? (
                    <img
                      src={previewUrl}
                      alt="nft-preview"
                      className="rounded-2xl"
                    />
                  ) : (
                    <audio controls>
                      <source src={previewUrl} type="audio/mpeg" />
                    </audio>
                  )}
                  <div>
                    <CrossVector
                      onClick={onCancel}
                      className="text-gray-500 w-10 cursor-pointer h-10 p-2 ml-1 -mt-5 hover:border-gray-500 transition-all border border-gray-300 rotate-45 rounded-full"
                    />
                  </div>
                </div>
                <div className={`${nftDetails.url ? "hidden" : ""}`}>
                  <p className="text-gray-500 font-semibold">
                    PNG, GIF, WEBP, MP4 or MP3. Max 100mb
                  </p>
                  <input
                    ref={inputFileRef}
                    type="file"
                    className="hidden"
                    id="input-file"
                    onChange={onFileChange}
                  />
                  <button
                    onClick={onChooseFile}
                    className="font-bold bg-blue-100 text-blue-600 py-2 px-5 my-3 rounded-3xl hover:bg-blue-200 transition-all"
                  >
                    Choose file
                  </button>
                </div>
              </div>
            </div>
            <PutOnMarketMenu
              onNftPriceChange={(e) =>
                setNftDetails({ ...nftDetails, price: Number(e.target.value) })
              }
              nftPrice={nftDetails.price.toString()}
            />
            <ChooseCollection />
            <div className="flex justify-between">
              <p className="flex flex-col">
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 text-[18px]">
                  Free minting
                </span>
                <span className="text-gray-500 font-semibold">
                  Buyer will pay gas fees for minting
                </span>
              </p>
              <Switch
                className={`${isFreeMinting ? "bg-blue-500" : "bg-blue-200"}`}
                checked={isFreeMinting}
                onClick={() => setIsFreeMinting(!isFreeMinting)}
              />
            </div>
            <DetailsForm onNftDetailsChange={onNftDetailsChange} />
            <button
              onClick={() => setIsAdvancedForm(!isAdvancedForm)}
              className="my-5 w-full py-3 border border-gray-300 rounded-3xl font-bold hover:border-gray-400 transition-all"
            >
              {isAdvancedForm
                ? "Hide advanced settings"
                : "Show advanced settings"}
            </button>
            <div className={`${!isAdvancedForm && "hidden"}`}>
              <AdvancedSettingForm />
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={onMintNft}
                className="bg-blue-600 px-8 py-3 rounded-full text-white font-bold hover:bg-blue-500 transition-all"
              >
                Create Item
              </button>
              <p className="flex py-5 items-center text-gray-500 font-semibold">
                Unsaved changes
                <span className="px-3">
                  <VQuestionMark className="font-bold bg-gray-100 py-1 px-1 text-2xl rounded-full" />
                </span>
              </p>
            </div>
          </div>
          <div className="min-md:hidden">
            <NftPreview
              previewUrl={previewUrl}
              previewName={nftDetails.name}
              previewPrice={nftDetails.price.toString()}
              isImage={isImage}
            />
          </div>
        </div>
      </div>
      <ProfileMenu />
    </>
  );
};

export default CreateNftPage;
