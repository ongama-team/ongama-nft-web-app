/* eslint-disable @next/next/no-img-element */
import React, { ChangeEvent, useRef, useState } from "react";
import { NoCoverImg } from "@lib/Resources";
import { CrossVector } from "@components/modules/__modules__/_vectors";
import { ICreateDrop } from "@lib/models/GeneralModel";
import { saveFileWithWeb3Storage } from "@lib/web3StorageClient";
import { useRecoilValue } from "recoil";
import { currentAccountState } from "@lib/atoms";
import { Web3Service } from "@lib/web3";
import LocalStorage from "@lib/helper/LocalStorage";
import { v4 as uuid } from "uuid";
import { backendApiService } from "@lib/services/BackendApiService";
import ShowWidget from "@components/modules/__modules__/ShowWidget";
import CreateDropProcessingModal from "./CreateDropProcessingModal";
import UploadFileProcessing from "@components/modules/__modules__/Card/UploadFileProcessing";

interface IProps {
  setIsCreateDropModal: (value: boolean) => void;
}

const CreateDropModal = ({ setIsCreateDropModal }: IProps) => {
  const [previewUrl, setPreviewUrl] = useState("");
  const [newDropIsLoading, setNewDropImageIsLoading] = useState(false);
  const [fileSavingFailed, setFileSavingFailed] = useState(false);
  const [errorwhileSendingTransaction, setErrorWhileSendingTransaction] =
    useState(false);
  const [createDropProcessing, setCreateDropProcessing] = useState(false);
  const [dropSavingOnDatabaseFailed, setDropSavingOnDatabasefailed] =
    useState(false);
  const [sendStorageFeeProcessing, setSendStorageFeeProcessing] =
    useState(false);
  const [isCreateDropProcessingModal, setIsCreateDropProcessingModal] =
    useState(false);

  const [dropData, setDropData] = useState<ICreateDrop>({
    creationFeeTransactionHash: "",
    creatorId: 0,
    creatorAddress: "",
    creatorUsername: "",
    description: "",
    dropID: "",
    imageUrl: "",
    imageUrlThumbnail: "",
    title: "",
    collection: true,
  });

  const userAccount = useRecoilValue(currentAccountState);

  const inputFileRef = useRef<HTMLInputElement>(null);

  const onCloseCreateDropModal = () => {
    setIsCreateDropModal(false);
    setIsCreateDropProcessingModal(false);
  };

  const onChooseFile = () => {
    inputFileRef.current?.click();
  };

  const onFileChange = async (event) => {
    const { files } = event.target;

    setNewDropImageIsLoading(true);
    const imageUrl = await saveFileWithWeb3Storage(files);
    setNewDropImageIsLoading(false);

    if (!imageUrl) {
      setFileSavingFailed(true);
      return;
    }

    setFileSavingFailed(false);

    const previewUrl = URL.createObjectURL(files[0]);
    setPreviewUrl(previewUrl);

    setDropData({ ...dropData, imageUrl, imageUrlThumbnail: imageUrl });
  };

  const onDropDetailsChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;

    setDropData({ ...dropData, [name]: value });
  };

  const onCreateDrop = async () => {
    if (
      !dropData.description ||
      !dropData.title ||
      !dropData.imageUrl ||
      !dropData.imageUrlThumbnail
    )
      return;

    setIsCreateDropProcessingModal(true);
    const web3Services = new Web3Service();

    setSendStorageFeeProcessing(true);
    const { transactionHash } = await web3Services.sendStorageFee();
    setSendStorageFeeProcessing(false);

    if (!transactionHash) {
      setErrorWhileSendingTransaction(true);
      return;
    }

    setErrorWhileSendingTransaction(false);

    const drop: ICreateDrop = {
      ...dropData,
      creationFeeTransactionHash: transactionHash,
      creatorAddress: `${
        userAccount?.walletAddress ||
        LocalStorage.getItem("ongama_signer_address")
      }`,
      creatorId: Number(userAccount?.id),
      creatorUsername: `${userAccount?.username}`,
      dropID: uuid(),
    };

    setCreateDropProcessing(true);
    const response = await backendApiService.createDrop(drop);
    setCreateDropProcessing(false);

    if (!response) {
      setDropSavingOnDatabasefailed(true);
      return;
    }
    setDropSavingOnDatabasefailed(false);

    setDropData({
      creationFeeTransactionHash: "",
      creatorId: 0,
      creatorAddress: "",
      creatorUsername: "",
      description: "",
      dropID: "",
      imageUrl: "",
      imageUrlThumbnail: "",
      title: "",
      collection: true,
    });
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-screen bg-black/80 z-20 flex justify-center items-center mobile:flex-none backdrop-blur-sm">
      <div
        role="button"
        onClick={onCloseCreateDropModal}
        className="absolute top-0 right-0 m-10 border border-gray-400 hover:border-gray-200 transition-all cursor-pointer p-2 rounded-full"
      >
        <CrossVector className="h-6 w-6 cursor-pointer text-white rotate-45" />
      </div>
      <div className="bg-white dark:bg-darkPrimary w-fit h-fit p-7 rounded-md mobile:absolute mobile:bottom-0 mobile:left-0 mobile:right-0 mobile:w-full mobile:rounded-b-none">
        <ShowWidget
          condition={!isCreateDropProcessingModal}
          fallback={
            <CreateDropProcessingModal
              setIsCreateDropProcessingModal={setIsCreateDropProcessingModal}
              errorWhileSendingTransaction={errorwhileSendingTransaction}
              createDropProcessing={createDropProcessing}
              dropSavingOnDatabaseFailed={dropSavingOnDatabaseFailed}
              sendStorageFeeProcessing={sendStorageFeeProcessing}
            />
          }
        >
          <h1 className="text-2xl pb-5 font-bold dark:text-white">
            Create drop collection
          </h1>
          <div className="flex flex-col gap-10 ">
            <div className="grid grid-cols-2 gap-5">
              <div className="w-full h-32 relative">
                <ShowWidget
                  condition={!newDropIsLoading}
                  fallback={<UploadFileProcessing isProcessing={true} />}
                >
                  <img
                    src={previewUrl || NoCoverImg.src}
                    alt="drop image"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </ShowWidget>
              </div>
              <div className="flex flex-col gap-5">
                <p className="w-56 mobile:w-full font-bold text-gray-500">
                  We recommend an image of at least 300x300. Gifs work too. Max
                  5mb.
                </p>
                <ShowWidget condition={fileSavingFailed}>
                  <p className="text-red-600 font-bold text-sm">
                    File saving Failed. Try again
                  </p>
                </ShowWidget>
                <button
                  onClick={onChooseFile}
                  className="bg-gray-200 w-fit py-3 rounded-md px-2 font-bold dark:bg-gray-500 dark:text-white"
                >
                  Choose file
                </button>
                <input
                  type="file"
                  accept="image/*"
                  onChange={onFileChange}
                  hidden
                  ref={inputFileRef}
                />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-bold dark:text-white">
                  Title <span>(required)</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter your drop title"
                  value={dropData.title}
                  onChange={onDropDetailsChange}
                  className="bg-gray-100 px-2 py-3 dark:bg-darkLight dark:text-white dark:focus:border-gray-500 rounded-md focus:bg-white focus:border focus:transition-all outline-none font-bold"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold dark:text-white">Description</label>
                <input
                  type="text"
                  name="description"
                  placeholder="Spread some words about your drop"
                  value={dropData.description}
                  onChange={onDropDetailsChange}
                  className="bg-gray-100 px-2 py-3 dark:bg-darkLight dark:text-white dark:focus:border-gray-500 rounded-md focus:bg-white focus:border focus:transition-all outline-none font-bold"
                />
              </div>
              <button
                onClick={onCreateDrop}
                className="bg-blue-500 hover:bg-blue-600 text-white transition-all font-bold py-3 rounded-md"
              >
                Create drop
              </button>
            </div>
          </div>
        </ShowWidget>
      </div>
    </div>
  );
};

export default CreateDropModal;
