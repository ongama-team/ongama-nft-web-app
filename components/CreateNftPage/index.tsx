/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import {
  CrossVector,
  VPlusCircleFill,
  VQuestionMark,
  VSpinner,
} from "@components/modules/__modules__/_vectors";
import { useRecoilValue, useSetRecoilState } from "recoil";
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
import { web3Actions, Web3Service } from "@lib/web3";
import MintingProcessModal from "./MintingProcessModal";
import { backendApiService } from "@lib/services/BackendApiService";
import LocalStorage from "@lib/helper/LocalStorage";

const CreateNftPage = () => {
  const [isFreeMinting, setIsFreeMinting] = useState(true);
  const [isAdvancedForm, setIsAdvancedForm] = useState(false);
  const [nftData, setNftData] = useState<NFT>({
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
    urlCompressed: "",
    urlMedium: "",
    urlThumbnail: "",
  });
  const [previewUrl, setPreviewUrl] = useState("");
  const [isImage, setIsImage] = useState(true);
  const [mintProcess, setMintProcess] = useState({
    isUploading: false,
    isUploadingSucceed: false,
    isWaitingForStorageFee: false,
    isWaitingForStorageSucceed: false,
    isMinting: false,
    isProcessFailed: false,
    isMintingSucceed: false,
  });
  const {
    isUploading,
    isUploadingSucceed,
    isWaitingForStorageFee,
    isWaitingForStorageSucceed,
    isMinting,
    isMintingSucceed,
    isProcessFailed,
  } = mintProcess;
  const [isMintProcessModal, setIsMintProcessModal] = useState(false);
  const [fileUploadProcessing, setFileUploadProcessing] = useState(false);
  const [fileUploadingError, setFileUploadingError] = useState(false);
  const { address } = useRecoilValue(walletAddressAtom);
  const truncatedWalletAddress = truncateAddress(address, 10, 4);
  const inputFileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const tokenUri = generateTokenUri();
    setNftData({
      ...nftData,
      ownerAddress: LocalStorage.getItem("ongama_signer_address")!,
      tokenUri: tokenUri,
    });
  }, []);

  useEffect(() => {
    console.log("track nft data", nftData);
  }, [nftData]);

  const onChooseFile = () => {
    inputFileRef.current?.click();
  };

  const onFileChange = async (event: { target: any }) => {
    const { files } = event.target;
    setIsImage((files[0].type as string).includes("image"));

    setMintProcess({
      ...mintProcess,
      isUploading: true,
      isUploadingSucceed: false,
    });
    setFileUploadProcessing(true);
    const fileUrl = await saveFileWithIpfs(files);
    const filePreviewUrl = URL.createObjectURL(files[0]);
    setPreviewUrl(filePreviewUrl);
    console.log("file url", fileUrl);
    setMintProcess({
      ...mintProcess,
      isUploading: false,
      isUploadingSucceed: true,
    });

    if (fileUrl) {
      setNftData({
        ...nftData,
        fileSize: files[0].size,
        fileType: files[0].type,
        url: fileUrl,
        urlCompressed: fileUrl,
        urlMedium: fileUrl,
        urlThumbnail: fileUrl,
      });
    } else {
      setFileUploadProcessing(false);
      setFileUploadingError(true);
    }
  };

  const onNftDetailsChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;
    setNftData({ ...nftData, [name]: value });
  };

  const onCancel = () => {
    setPreviewUrl("");
  };

  const sendStorageFee = async () => {
    try {
      setMintProcess({
        ...mintProcess,
        isWaitingForStorageFee: true,
        isWaitingForStorageSucceed: false,
      });
      const web3Service = new Web3Service();
      const transaction = await web3Service.sendStorageFee();
      setNftData({
        ...nftData,
        storageFeeTransaction: transaction.transactionHash,
        storageFee: 0.001,
      });
      setMintProcess({
        ...mintProcess,
        isWaitingForStorageFee: false,
        isWaitingForStorageSucceed: true,
      });
    } catch (err) {
      setMintProcess({
        ...mintProcess,
        isWaitingForStorageFee: true,
        isWaitingForStorageSucceed: false,
      });
    }
  };

  const mintNft = async () => {
    try {
      setMintProcess({
        ...mintProcess,
        isMinting: true,
        isMintingSucceed: false,
      });
      console.log("nft data on minting event", nftData);
      const uploadedonBd = await backendApiService.mintNft(nftData);
      console.log("nft uploaded on Bd", uploadedonBd);

      const mintedNft = await web3Actions.mintNft(
        nftData.tokenUri,
        nftData.ownerAddress,
        nftData.price
      );
      console.log("minted nft", mintedNft);
      setMintProcess({
        ...mintProcess,
        isMinting: false,
        isMintingSucceed: true,
      });
    } catch (err) {
      throw err;
    }
  };

  const onCreateNft = async (e) => {
    e.preventDefault();
    if (
      !nftData.url ||
      !nftData.name ||
      !nftData.ownerAddress ||
      !nftData.description ||
      !nftData.price ||
      !nftData.tokenUri ||
      !nftData.storageFee ||
      !nftData.storageFeeTransaction
    )
      return;
    setIsMintProcessModal(!isMintProcessModal);
    try {
      await sendStorageFee();
      await mintNft();
    } catch {
      return;
    }
    setIsMintProcessModal(!isMintProcessModal);
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
                    !previewUrl && "hidden"
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
                <div
                  className={`${
                    previewUrl ? "hidden" : ""
                  } flex flex-col items-center justify-center relative`}
                >
                  <div
                    className={
                      fileUploadProcessing
                        ? "absolute bg-white bg-opacity-40 backdrop-blur-2xl w-full h-full flex flex-col gap-7 justify-center items-center"
                        : "hidden"
                    }
                  >
                    <VSpinner className="text-3xl animate-spin text-blue-600" />
                  </div>
                  {fileUploadingError ? (
                    <div>
                      <VPlusCircleFill className="float-right text-2xl mx-3" />
                      <p className="text-red-600 text-sm text-center px-3">
                        Error accured when trying to upload file
                      </p>
                    </div>
                  ) : (
                    <div>
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
                  )}
                </div>
              </div>
            </div>
            <PutOnMarketMenu
              onNftPriceChange={(e) =>
                setNftData({ ...nftData, price: Number(e.target.value) })
              }
              nftPrice={nftData.price.toString()}
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
                onClick={onCreateNft}
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
              previewName={nftData.name}
              previewPrice={nftData.price.toString()}
              isImage={isImage}
            />
          </div>
        </div>
      </div>
      <ProfileMenu />
      {isMintProcessModal && (
        <MintingProcessModal
          isUploading={isUploading}
          isUploadingSucceed={isUploadingSucceed}
          isWaitingForStorageFee={isWaitingForStorageFee}
          isWaitingForStorageSucceed={isWaitingForStorageSucceed}
          isMinting={isMinting}
          isProcessFailed={isProcessFailed}
          isMintingSucceed={isMintingSucceed}
        />
      )}
    </>
  );
};

export default CreateNftPage;
