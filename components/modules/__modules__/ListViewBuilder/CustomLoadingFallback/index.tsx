import React, { FC } from "react";
import { Spin } from "antd";
import NFTCardFallback from "../../NFTCardFallback";

const fallback = <NFTCardFallback />;

const CustomLoadingFallback: FC = () => <Spin indicator={fallback} />;

export default CustomLoadingFallback;
