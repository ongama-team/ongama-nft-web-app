import React, { FC } from "react";
import NFTCardFallback from "../../NFTCardFallback";

interface Props {
  className?: string;
}

const SkeletonLoader: FC<Props> = ({ className }: Props) => (
  <div className={`${className} skeleton animate`} />
);

SkeletonLoader.defaultProps = {
  className: "nft-card",
};

export default SkeletonLoader;
