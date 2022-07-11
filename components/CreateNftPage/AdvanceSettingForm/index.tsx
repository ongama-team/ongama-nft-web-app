import React from "react";
import useAutoResize from "@components/hooks/useAutoResize";

const AdvancedSettingForm = () => {
  const { setTextAreaValue, textAreaRef } = useAutoResize();
  return (
    <div>
      <p className="font-bold">
        Properties <span className="text-gray-400 font-normal">(Optinal)</span>
      </p>
      <div className="flex justify-between my-1">
        <input
          type="text"
          placeholder="e.g. Size"
          className="border-b border-gray-300 py-2 outline-none bg-transparent"
        />
        <input
          type="text"
          placeholder="e.g. Size"
          className="border-b border-gray-300 py-2 outline-none bg-transparent"
        />
      </div>
      <p className="font-bold mt-5">
        Alternative text for NFT <span>(Optional)</span>
      </p>
      <textarea
        ref={textAreaRef}
        onChange={(e) => setTextAreaValue(e.target.value)}
        placeholder="Image description in details"
        className="border-b border-gray-300 outline-none resize-none overflow-hidden w-full py-3 bg-transparent"
      />
      <p className="text-xs font-bold text-gray-500">
        Text what will be used in VoiceOver for people with desabilites
      </p>
    </div>
  );
};

export default AdvancedSettingForm;
