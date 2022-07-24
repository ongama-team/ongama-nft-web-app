import React, { FC } from "react";

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
