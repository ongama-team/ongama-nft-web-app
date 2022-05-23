import React, { FC } from "react";
import { classNameInterface } from "../../../../types";

const defaultProps: classNameInterface = {
  className: "h-6 w-6",
};

const Collections: FC<classNameInterface> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path d="M17 7h6v16h-16v-6h-6v-16h16v6zm5 1h-14v14h14v-14zm-6-1v-5h-14v14h5v-9h9z" />
    </svg>
  );
};

Collections.defaultProps = defaultProps;

export default Collections;
