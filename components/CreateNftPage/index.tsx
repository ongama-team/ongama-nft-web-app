/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import {
  CrossVector,
  VQuestionMark,
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
import { saveFileWithIpfs } from "@lib/ipfsClient";
import { generateTokenUri } from "@lib/Utils";
import { web3Actions, Web3Service } from "@lib/web3";
import CreateNftProcessModal, {
  ERROR_STATUS,
  PENDING_STATUS,
  SUCCED_STATUS,
} from "./CreateNftProcessModal";
import { backendApiService } from "@lib/services/BackendApiService";
import LocalStorage from "@lib/helper/LocalStorage";
import UploadFileProcessing from "@components/modules/__modules__/Card/UploadFileProcessing";
import UploadFileErrorCard from "@components/modules/__modules__/Card/UploadFileErrorCard";

const CreateNftPage = () => {
  const [nftData, setNftData] = useState({
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
  const [mintProcess, setMintProcess] = useState({
    uploadFileOnIpfsStatus: "",
    sendStorageFeeStatus: "",
    mintNftStatus: "",
  });
  const { sendStorageFeeStatus, mintNftStatus } = mintProcess;

  const [isFreeMinting, setIsFreeMinting] = useState(true);
  const [isAdvancedForm, setIsAdvancedForm] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const [isImage, setIsImage] = useState(true);
  const [isCreateNftProcessModal, setIsCreateNftProcessModal] = useState(false);
  const [uploadFileProcessing, setUploadFileProcessing] = useState(false);
  const [fileUploadingError, setFileUploadingError] = useState(false);
  const [mintEroor, setMintError] = useState(false);

  const { address } = useRecoilValue(walletAddressAtom);
  const truncatedWalletAddress = truncateAddress(address, 10, 4);
  const inputFileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const tokenUri = generateTokenUri();
    setNftData({
      ...nftData,
      ownerAddress: LocalStorage.getItem("ongama_signer_address")!,
      tokenUri,
      storageFee: Number(`${process.env.NEXT_PUBLIC_STORAGE_FEE}`),
    });
  }, []);

  const onChooseFile = () => {
    inputFileRef.current?.click();
  };

  const uploadFileOnIPFS = async (inputFiles) => {
    if (inputFiles) {
      setUploadFileProcessing(true);

      const fileUrl = await saveFileWithIpfs(inputFiles);

      setUploadFileProcessing(false);
      if (fileUrl) {
        setNftData({
          ...nftData,
          url: fileUrl,
          urlCompressed: fileUrl,
          urlMedium: fileUrl,
          urlThumbnail: fileUrl,
          fileSize: inputFiles[0].size,
          fileType: inputFiles[0].type,
        });
        setFileUploadingError(false);
        return fileUrl;
      } else {
        setFileUploadingError(true);
        return null;
      }
    }
  };

  const onFileChange = async (event: { target: any }) => {
    const { files } = event.target;
    setIsImage((files[0].type as string).includes("image"));
    const filePreviewUrl = URL.createObjectURL(files[0]);
    try {
      const uploadResult = await uploadFileOnIPFS(files);

      if (uploadResult) setPreviewUrl(filePreviewUrl);
    } catch (err) {
      setFileUploadingError(true);
      throw err;
    }
  };

  const onNftDetailsChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;

    setNftData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onCancel = () => {
    setPreviewUrl("");
  };

  const sendStorageFee = async () => {
    try {
      setMintProcess({
        ...mintProcess,
        sendStorageFeeStatus: PENDING_STATUS,
      });
      const web3Service = new Web3Service();
      const transaction = await web3Service.sendStorageFee();

      setMintProcess({
        ...mintProcess,
        sendStorageFeeStatus: SUCCED_STATUS,
      });
      return transaction;
    } catch (err) {
      setMintProcess({
        ...mintProcess,
        sendStorageFeeStatus: ERROR_STATUS,
      });
      setIsCreateNftProcessModal(false);
      throw err;
    }
  };

  const mintNft = async () => {
    try {
      setMintProcess({
        ...mintProcess,
        mintNftStatus: PENDING_STATUS,
      });

      const uploadResponse = await backendApiService.mintNft(nftData);

      if (uploadResponse) {
        const mintedNft = await web3Actions.mintNft(
          nftData.tokenUri,
          nftData.ownerAddress,
          nftData.price
        );

        setMintProcess({
          ...mintProcess,
          mintNftStatus: SUCCED_STATUS,
        });
      } else {
        setMintProcess({
          ...mintProcess,
          mintNftStatus: ERROR_STATUS,
        });
      }
    } catch (err) {
      setMintProcess({
        ...mintProcess,
        mintNftStatus: ERROR_STATUS,
      });
      setMintError(true);
      throw err;
    }
  };

  const onPayStorageFee = async () => {
    setIsCreateNftProcessModal(!isCreateNftProcessModal);
    const transaction = await sendStorageFee();
    if (transaction) {
      setNftData({
        ...nftData,
        storageFeeTransaction: transaction.transactionHash,
      });
    }
  };

  const onPutOnMarket = async () => {
    try {
      await mintNft();
      setIsCreateNftProcessModal(!isCreateNftProcessModal);
      setPreviewUrl("");
      setMintProcess({
        ...mintProcess,
        uploadFileOnIpfsStatus: "",
        sendStorageFeeStatus: "",
        mintNftStatus: "",
      });
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="dark:bg-darkPrimary">
      <Header />
      <div className="py-20 font-ibmPlexSans 2xl:w-1/2 lg:w-3/4 md:w-5/6 min-md:w-full min-lg:px-5 m-auto relative  dark:text-white ">
        <h1 className="text-4xl font-semibold min-md:w-full min-lg:w-full min-lg:text-3xl dark:text-white">
          Create Single item on Ethereum
        </h1>
        <div className="flex mt-10 min-lg:w-full min-md:block relative">
          <div className="flex flex-col">
            <p className="font-bold">Choose wallet</p>
            <WalletInfoCard truncatedWalletAddress={truncatedWalletAddress} />
            <div>
              <p className="font-bold">Upload file</p>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-500 my-5 py-10 rounded-xl text-center">
                <div
                  className={`flex justify-center w-full p-5 h-96 m-auto relative ${
                    !previewUrl && "hidden"
                  }`}
                >
                  {isImage ? (
                    <img
                      src={previewUrl}
                      alt="nft-preview"
                      className="rounded-2xl h-full w-96 object-cover"
                    />
                  ) : (
                    <audio controls>
                      <source src={previewUrl} type="audio/mpeg" />
                    </audio>
                  )}
                  <div className="absolute right-2 p-1 -mt-10 hover:border-gray-500 transition-all border border-gray-300 rotate-45 rounded-full">
                    <CrossVector
                      onClick={onCancel}
                      className="text-gray-500 w-6 cursor-pointer h-6"
                    />
                  </div>
                </div>
                <div
                  className={`${
                    previewUrl ? "hidden" : ""
                  } flex flex-col items-center justify-center relative`}
                >
                  <UploadFileProcessing isProcessing={uploadFileProcessing}>
                    {!fileUploadingError ? (
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
                    ) : (
                      <UploadFileErrorCard
                        onTryToReuploadFile={() => setFileUploadingError(false)}
                        className="w-full h-full flex flex-col gap-3 items-center px-5"
                      />
                    )}
                  </UploadFileProcessing>
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
                onClick={onPayStorageFee}
                className="bg-blue-600 px-8 py-3 rounded-full text-white font-bold hover:bg-blue-500 transition-all disabled:bg-opacity-50 disabled:cursor-not-allowed"
                disabled={!nftData.name || !nftData.price}
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
      {isCreateNftProcessModal && (
        <CreateNftProcessModal
          sendStorageFeeStatus={sendStorageFeeStatus}
          mintNftStatus={mintNftStatus}
          onPutOnMarket={onPutOnMarket}
          onCancel={() => setIsCreateNftProcessModal(false)}
          onMintAgain={onPutOnMarket}
          mintError={mintEroor}
        />
      )}
    </div>
  );
};

export default CreateNftPage;
