import React, { FC } from "react";

interface IProps {
  className: string;
  onClick?: () => void;
}

const defaultProps: IProps = {
  className: "h-6 w-6",
  onClick: () => null,
};

const crossVector: FC<IProps> = ({ className, onClick }: IProps) => {
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
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
};

crossVector.defaultProps = defaultProps;

export default crossVector;
