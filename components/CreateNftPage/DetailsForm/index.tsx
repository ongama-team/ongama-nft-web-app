import React from "react";
import useAutoResize from "@components/hooks/useAutoResize";

interface IProps {
  onNftDetailsChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const DetailsForm = ({ onNftDetailsChange }: IProps) => {
  const { setTextAreaValue, textAreaRef } = useAutoResize();

  return (
    <div className="flex flex-col mt-5">
      <label htmlFor="name" className="font-bold">
        Name
      </label>
      <input
        type="text"
        name="name"
        className="mt-2 py-2 outline-none w-full border-b border-gray-300"
        placeholder="e.g.'Redeemable T-Shirt with logo'"
        onChange={onNftDetailsChange}
      />
      <div className="mt-5 flex flex-col">
        <label htmlFor="description" className="font-bold">
          Description
          <span className="text-gray-400 font-thin"> (Optional)</span>
        </label>
        <textarea
          ref={textAreaRef}
          onChange={(event) => {
            setTextAreaValue(event.target.value);
            onNftDetailsChange(event);
          }}
          name="description"
          placeholder="e.g.'After purchasing you'll be able to get the real T-Shirt'"
          className="border-b border-gray-300 outline-none py-3 resize-none overflow-hidden"
        />
        <p className="py-2 text-gray-500 font-bold">
          With preserved line-breaks
        </p>
      </div>
      <label htmlFor="royalties" className="font-bold mt-4">
        Royalties
      </label>
      <div className="flex border-b border-gray-300">
        <input
          name="royalties"
          type="number"
          placeholder="e.g. 10%"
          className="w-full my-3 outline-none"
          onChange={onNftDetailsChange}
        />
        <p className="text-gray-400">%</p>
      </div>
      <p className="mt-2 text-gray-500 text-xs font-bold">
        Suggested: 0%, 10%, 20%, 30%. Maximun is 50%
      </p>
    </div>
  );
};

export default DetailsForm;
