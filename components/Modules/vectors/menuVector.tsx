import React, { MouseEventHandler } from "react";
import { defaultVectorProps } from "../../../types";

interface IProps {
  className: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const MenuVector = ({ className, onClick }: IProps) => {
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
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
    </svg>
  );
};

MenuVector.defaultProps = defaultVectorProps;

export default MenuVector;
