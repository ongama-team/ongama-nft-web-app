import React from "react";
import { classNameInterface, defaultVectorProps } from "../../../types";

const ChevronRightVector = ({ className }: classNameInterface) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
};

ChevronRightVector.defaultProps = defaultVectorProps;

export default ChevronRightVector;
