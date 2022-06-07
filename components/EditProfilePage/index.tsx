import { useState, ChangeEvent } from "react";
const EditProfile = () => {
  const [img, setImg] = useState();
  const [previewImgLink, setPreviewImgLink] = useState("");
  const profilePlaceholder =
    "https://lh3.googleusercontent.com/9KIL56q19B9i8BasJfTcVZFn7QOcvdtBqww5dgK5Zk5Mi5w4Ljekw0ibITpf6TBtGnyqcLTDNEEG9OpUC98aLukfcM9yXhSltJoe=w600";

  const chooseFile = (e: Event) => {
    const { files } = e.target as HTMLInputElement;
    if (files[0] == null) {
      return;
    }
    setImg(files[0]);
    const previewUrl = URL.createObjectURL(files[0]);
    setPreviewImgLink(previewUrl);
  };
  return (
    <div className="px-4 py-6 sm:px-28 md:py-12 lg:px-44 xl:px-56 ">
      <h2 className=" text-lg md:text-2xl lg:text-3xl font-bold ">
        Edit profile
      </h2>
      <p className=" text-gray-500 text-sm w-[80%] md:text-lg lg:w-[55%] my-6 ">
        You can set preferred display name create your branded profile URL and
        manage other personal settings{" "}
      </p>
      <div className="flex flex-col justify-center  w-full sm:flex-row">
        <div className=" w-full flex flex-col sm:w-[70%]  sm:pr-12">
          <label htmlFor="name" className="label">
            Display name
          </label>
          <input id="name" className="input" placeholder="The Dev bro" />
          <label htmlFor="bio" className="label">
            Bio
          </label>
          <input
            id="bio"
            className="input"
            placeholder="The big boy doing wonders"
          />
          <label htmlFor="portfolio" className="label">
            Personal site or portfolio
          </label>
          <input
            id="portfolio"
            className="input"
            placeholder="https://www.dev.to/web3"
          />
          <label htmlFor="email" className="label">
            Email
          </label>
          <input id="email" className="input" placeholder="Enter your email" />
        </div>
        <div className="sm:block sm:w-[30%]">
          <img
            src={previewImgLink ? previewImgLink : profilePlaceholder}
            alt="profile"
            className=" h-24 w-24 rounded-[50%]"
          />
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
        <h3 className="label">Verification</h3>
        <section className="flex flex-col md:flex-row">
          <p className="my-3 text-xs text-slate-500">
            {" "}
            Proceed with verification process to get more visibility and gain
            trust on Ongama Marketplace. Please allow up to several weeks for
            the process
          </p>
          <button className="text-xs w-40 h-8 font-bold bg-blue-100 text-blue-600 rounded-3xl hover:bg-blue-200 md:ml-1">
            Get verified
          </button>
        </section>
      </div>
      <button className="w-[60%] h-9 text-white rounded-3xl bg-blue-600 ml-[20%] mt-6 sm:ml-0">
        Update profile
      </button>
    </div>
  );
};

export default EditProfile;
