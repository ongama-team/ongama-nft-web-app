import React, { MouseEventHandler } from "react";
import { defaultVectorProps } from "../../../types";

interface IProps {
  className: string;
  onClick: MouseEventHandler<SVGSVGElement>;
}

const ChevronRightVector = ({ className, onClick }: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
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
