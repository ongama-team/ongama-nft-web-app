/* eslint-disable @next/next/no-img-element */
import { VerifiedImg } from "@lib/Resources";
import React from "react";

interface IProps {
  className?: string;
}

const CheckmarkCard = ({ className }: IProps) => {
  return <img src={VerifiedImg.src} alt="checkmark" className={className} />;
};

CheckmarkCard.defaulProps = {
  className: "h-8 absolute bottom-[-8px] right-0",
};

export default CheckmarkCard;
