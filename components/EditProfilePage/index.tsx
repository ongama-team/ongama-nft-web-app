/* eslint-disable @next/next/no-img-element */
import LocalStorage from "@lib/helper/LocalStorage";
import { backendApiService } from "@lib/services/BackendApiService";
import Header from "@components/modules/__noAuth/Header";
import { useState, ChangeEvent, useEffect } from "react";
import UpdateStatusModal from "./updateStatusModal";
import ProfileMenu from "@components/modules/__secured/ProfileMenu";
import { Web3Service } from "@lib/web3";
import { orderObject } from "@lib/Utils";
import UploadFileProcessing from "@components/modules/__modules__/Card/UploadFileProcessing";
import UploadFileErrorCard from "@components/modules/__modules__/Card/UploadFileErrorCard";
import { currentAccountState } from "@lib/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { saveFileWithWeb3Storage } from "@lib/web3StorageClient";
import { useRouter } from "next/router";

const EditProfile = () => {
  const userAccount = useRecoilValue(currentAccountState);
  const [img, setImg] = useState<File | null>(null);
  const [previewImgLink, setPreviewImgLink] = useState(userAccount?.avatarUrl);
  const router = useRouter();

  const [profile, setProfile] = useState({
    walletAddress: "",
    username: "",
    userBio: "",
    avatarUrl: "",
    avatarUrlCompressed: "",
    avatarUrlThumbnail: "",
    coverThumbnailUrl: "",
    coverUrl: "",
    signature: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [isStatusModal, setIsStatusModal] = useState(false);
  const [isWrongFileSize, setIsWrongFileSize] = useState(false);
  const [isUserAvaterUploading, setIsUserAvatarUploading] = useState(false);
  const [fileUploadingError, setFileUploadingError] = useState(false);

  const profilePlaceholder =
    userAccount?.avatarUrl ||
    "https://lh3.googleusercontent.com/9KIL56q19B9i8BasJfTcVZFn7QOcvdtBqww5dgK5Zk5Mi5w4Ljekw0ibITpf6TBtGnyqcLTDNEEG9OpUC98aLukfcM9yXhSltJoe=w600";

  const checkFileSize = (file: FileList) => {
    const fileSize = file[0].size;
    if (fileSize > Math.pow(5, 6)) setIsWrongFileSize(true);
    setIsWrongFileSize(false);
  };

  const chooseFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const { files } = e.target;
    checkFileSize(files);
    setImg(files[0]);
    if (files.length === 0) return;

    const previewUrl = URL.createObjectURL(files[0]);
    setIsUserAvatarUploading(true);

    const fileUrl = await saveFileWithWeb3Storage([files[0]]);
    setIsUserAvatarUploading(false);

    if (fileUrl) {
      setProfile({ ...profile, avatarUrl: fileUrl });
      setPreviewImgLink(previewUrl);
      setFileUploadingError(false);
    } else {
      setFileUploadingError(true);
    }
  };

  const onTryToReuploadFile = (e) => {
    setFileUploadingError(false);
  };

  useEffect(() => {
    const memorizedWalletAddress = LocalStorage.getItem(
      "ongama_signer_address"
    );
    if (memorizedWalletAddress)
      setProfile({ ...profile, walletAddress: memorizedWalletAddress });
  }, []);

  const onUpdateProfile = async () => {
    const {
      walletAddress,
      userBio,
      username,
      avatarUrl,
      avatarUrlCompressed,
      avatarUrlThumbnail,
      coverUrl,
      coverThumbnailUrl,
    } = profile;

    const web3Service = new Web3Service();
    const userSignature = await web3Service.signPersonalMessage(
      JSON.stringify(
        orderObject({
          walletAddress,
          userBio,
          username,
          avatarUrl,
          avatarUrlCompressed,
          avatarUrlThumbnail,
          coverUrl,
          coverThumbnailUrl,
        })
      ),
      walletAddress || userAccount?.walletAddress!
    );

    setIsStatusModal(true);
    setIsProcessing(true);
    setUpdateSuccess(false);

    const updateResponse = await backendApiService.updateProfile({
      walletAddress,
      username,
      userBio,
      avatarUrl,
      avatarUrlCompressed,
      avatarUrlThumbnail,
      coverThumbnailUrl,
      coverUrl,
      signature: `${userSignature?.signature}`,
    });

    if (!updateResponse) {
      setIsProcessing(false);
      setUpdateSuccess(false);
      return;
    }

    setIsProcessing(false);
    setUpdateSuccess(true);
  };

  const onCloseStatusModal = () => {
    setIsStatusModal(!isStatusModal);
    if (updateSuccess) router.back();
  };

  return (
    <div className="pt-24">
      <Header />
      <div className="px-4 py-6 sm:px-28 md:py-12 lg:px-44 xl:px-56">
        <h2 className=" text-lg md:text-2xl lg:text-3xl font-bold dark:text-white">
          Edit profile
        </h2>
        <p className=" text-gray-500 text-sm w-[80%] md:text-lg lg:w-[55%] my-6 ">
          You can set preferred display name create your branded profile URL and
          manage other personal settings
        </p>
        <div className="flex flex-col justify-center  w-full sm:flex-row">
          <div className=" w-full flex flex-col sm:w-[70%]  sm:pr-12">
            <label
              htmlFor="name"
              className="dark:text-white font-semibold py-3"
            >
              Display name
            </label>
            <input
              id="name"
              className="dark:bg-darkLight border-none py-2 px-3 outline-none dark:text-white bg-gray-100"
              placeholder="The Dev bro"
              onChange={(e) =>
                setProfile({ ...profile, username: e.target.value })
              }
              defaultValue={userAccount?.username}
            />

            <label
              htmlFor="bio"
              className="dark:text-white font-semibold pt-4 pb-2"
            >
              Bio
            </label>
            <input
              id="bio"
              className="dark:bg-darkLight px-3 border-none py-2 outline-none dark:text-white bg-gray-100"
              placeholder="The big boy doing wonders"
              onChange={(e) =>
                setProfile({ ...profile, userBio: e.target.value })
              }
              defaultValue={userAccount?.userBio}
            />
            <label
              htmlFor="portfolio"
              className="dark:text-white font-semibold pt-4 pb-2"
            >
              Personal site or portfolio
            </label>
            <input
              id="portfolio"
              className="dark:bg-darkLight border-none py-2 px-3  outline-none dark:text-white bg-gray-100"
              placeholder="https://www.dev.to/web3"
            />
            <label
              htmlFor="email"
              className="dark:text-white font-semibold pt-4 pb-2"
            >
              Email
            </label>
            <input
              id="email"
              className="dark:bg-darkLight border-none px-3 py-2 outline-none dark:text-white bg-gray-100"
              placeholder="Enter your email"
            />
          </div>
          <div className="sm:block sm:w-[30%]">
            {!fileUploadingError ? (
              <div className="relative h-24 w-24">
                <img
                  src={previewImgLink ? previewImgLink : profilePlaceholder}
                  alt="profile"
                  className="rounded-full object-cover h-full w-full"
                />
                <UploadFileProcessing isProcessing={isUserAvaterUploading} />
              </div>
            ) : (
              <UploadFileErrorCard
                onTryToReuploadFile={onTryToReuploadFile}
                className="w-full px-1 flex flex-col gap-5"
              />
            )}
            <p className="my-3 text-xs text-slate-500">
              We recommend an image <br />
              of at least 300 x 300. Gifs work too.
              <br />
              Max 5mb
            </p>
            <input
              onChange={chooseFile}
              type="file"
              accept="image/*"
              className="text-sm
                   file:px-5 file:py-2 file:my-3
                   file:rounded-3xl file:border-0
                   file:font-bold  file:text-blue-600
                   file:bg-blue-100 text-white
                   hover:file:cursor-pointer hover:file:bg-blue-200"
            />
          </div>
        </div>
        <div className="w-full my-8 sm:w-[70%] sm:pr-12">
          <h3 className="dark:text-white font-semibold">Verification</h3>
          <section className="flex flex-col md:flex-row">
            <p className="my-3 text-xs text-slate-500 pr-5">
              Proceed with verification process to get more visibility and gain
              trust on Ongama Marketplace. Please allow up to several weeks for
              the process
            </p>
            <button className="text-xs w-40 py-2 font-bold bg-blue-100 text-blue-600 rounded-3xl hover:bg-blue-200 md:ml-1">
              Get verified
            </button>
          </section>
        </div>
        <button
          onClick={onUpdateProfile}
          disabled={isWrongFileSize}
          className="w-[60%] py-3 text-white font-semibold hover:bg-blue-700 transition-all rounded-3xl bg-blue-600 ml-[20%] mt-6 sm:ml-0 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          Update profile
        </button>

        {isStatusModal && (
          <UpdateStatusModal
            onCloseStatusModal={onCloseStatusModal}
            onTryAgain={() => onUpdateProfile()}
            updateSuccess={updateSuccess}
            isProcessing={isProcessing}
          />
        )}
      </div>
      <ProfileMenu />
    </div>
  );
};

export default EditProfile;
