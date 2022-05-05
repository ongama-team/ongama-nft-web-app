import React, { FC } from "react";
import { classNameInterface } from "../../../../types";

const defaultProps: classNameInterface = {
  className: "h-6 w-6",
};

const CoinBaseVector: FC<classNameInterface> = ({ className }) => {
  return (
    <svg
      version="1.2"
      baseProfile="tiny"
      id="Layer_1"
      x="0px"
      y="0px"
      className={className}
      viewBox="0 0 1024 1024"
      overflow="visible"
    >
      <path
        fill="#0052FF"
        d="M512,0L512,0c282.8,0,512,229.2,512,512l0,0c0,282.8-229.2,512-512,512l0,0C229.2,1024,0,794.8,0,512l0,0
   C0,229.2,229.2,0,512,0z"
      />
      <path
        fill="#FFFFFF"
        d="M512.1,692c-99.4,0-180-80.5-180-180s80.6-180,180-180c89.1,0,163.1,65,177.3,150h181.3
   c-15.3-184.8-170-330-358.7-330c-198.8,0-360,161.2-360,360s161.2,360,360,360c188.7,0,343.4-145.2,358.7-330H689.3
   C675,627,601.2,692,512.1,692z"
      />
    </svg>
  );
};

CoinBaseVector.defaultProps = defaultProps;

export default CoinBaseVector;
