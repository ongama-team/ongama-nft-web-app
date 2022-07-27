import useClickOutside from "@components/hooks/useClickOutside";
import { NFTData } from "@lib/models/GeneralModel";
import { web3Actions } from "@lib/web3";
import React, { useEffect, useState } from "react";
import { VSpinner } from "../_vectors";

interface IProps {
  onCloseChangePriceModal: () => void;
  nft: NFTData;
}

const ChangePriceModal = ({ onCloseChangePriceModal, nft }: IProps) => {
  const priceModalRef = useClickOutside(onCloseChangePriceModal);
  const [newPrice, setNewPrice] = useState(nft.price);
  const [receivedPriceAfterCalculation, setReceivedPriceAfterCalculation] =
    useState(() => {
      return newPrice - (newPrice * 2.5) / 100;
    });
  const [updateProcessing, setUpdateProcessing] = useState(false);
  const [updateFailed, setUpdatefailed] = useState(false);

  useEffect(() => {
    setReceivedPriceAfterCalculation(() => {
      return newPrice - (newPrice * 2.5) / 100;
    });
  }, [newPrice]);

  const onNftPriceChange = (e) => {
    setNewPrice(Number(e.target.value));
  };

  const onUpdateNftPrice = async () => {
    setUpdateProcessing(true);

    const isUpdated = await web3Actions.updateNftPrice(
      Number(nft.tokenID),
      newPrice
    );

    setUpdateProcessing(false);

    if (isUpdated) {
      setUpdatefailed(false);
      onCloseChangePriceModal();

      nft.price = newPrice;
    } else {
      setUpdatefailed(true);
    }
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-black bg-opacity-40 flex justify-center mobile:flex-col mobile:justify-between mobile:items-start items-center z-20">
      <div
        ref={priceModalRef}
        className="bg-white p-5 w-96 rounded-lg mobile:w-full mobile:absolute mobile:bottom-0 mobile:rounded-b-none dark:bg-darkPrimary"
      >
        <h1 className="font-bold text-2xl py-5 dark:text-white">
          Change Price
        </h1>
        <p className="font-bold text-sm pb-4 text-gray-500">
          Change price for your existing item. Next price must be defferent from
          previous.
        </p>
        <div className="flex bg-gray-100 dark:bg-darkLight px-2 items-center rounded-lg w-full py-2">
          <input
            className="w-full outline-none bg-transparent py-1"
            type="number"
            name="price"
            placeholder={nft.price.toString()}
            onChange={onNftPriceChange}
          />
          <p className="text-gray-400">MATIC</p>
        </div>
        <div className="mt-5 border dark:border-darkLight p-2 rounded-lg">
          <div className="border-b dark:border-darkLight py-3 flex justify-between items-center">
            <span className="text-gray-500 font-semibold">Service fee</span>
            <span className="font-bold">2.5%</span>
          </div>
          <div className="py-3 flex justify-between items-center">
            <span className="text-gray-500 font-semibold">
              You will receive
            </span>
            <span className="font-bold">
              {receivedPriceAfterCalculation} MATIC
            </span>
          </div>
        </div>
        {newPrice === 0 && (
          <p className="py-2 text-red-600 text-sm font-bold text-center">
            Price can not be 0
          </p>
        )}
        <div className="flex flex-col gap-3 pt-5">
          <button
            onClick={onUpdateNftPrice}
            disabled={newPrice === 0 || updateProcessing}
            className="bg-blue-500 py-3 rounded-lg flex justify-center items-center text-white font-bold hover:bg-blue-600 transition-all disabled:cursor-not-allowed disabled:bg-opacity-50 disabled:hover:bg-blue-500 disabled:hover:cursor-not-allowed"
          >
            {updateProcessing ? (
              <VSpinner className="h-6 w-6 animate-spin" />
            ) : (
              "Change Price"
            )}
          </button>
          <button
            onClick={onCloseChangePriceModal}
            className="border py-3 rounded-lg font-bold dark:border-darkLight dark:hover:bg-darkLight hover:border-gray-300 transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePriceModal;
