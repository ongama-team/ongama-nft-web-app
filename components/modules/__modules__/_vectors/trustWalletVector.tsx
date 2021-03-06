import React, { FC } from "react";
import { classNameInterface } from "@lib/@Types";

const defaultProps: classNameInterface = {
  className: "h-6 w-6",
};

const trustWalletVector: FC<classNameInterface> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 38 38"
      className={className}
      fill="none"
    >
      <path
        d="M29.025 25.816c.589-1.215 1.079-2.893 1.451-5.305.444-2.884.716-6.801.843-12.133-2.829-.082-7.69-.626-12.323-3.745-4.634 3.11-9.494 3.654-12.314 3.745.1 4.407.299 7.835.617 10.528.363 3.065.88 5.142 1.523 6.602.426.97.898 1.669 1.46 2.285.753.825 1.705 1.505 3.001 2.285.538.323 1.131.658 1.776 1.024 1.15.651 2.467 1.396 3.936 2.331 1.442-.92 2.74-1.658 3.877-2.304l.984-.562c1.596-.916 2.775-1.678 3.654-2.566.59-.608 1.07-1.269 1.514-2.185zm4.217-21.192c.508 0 .988.209 1.342.562a1.9 1.9 0 0 1 .544 1.351c-.091 5.405-.299 9.54-.689 12.813-.381 3.274-.952 5.704-1.814 7.672-.58 1.315-1.297 2.403-2.14 3.328-1.134 1.224-2.43 2.113-3.845 2.956l-1.893 1.093c-1.407.799-2.955 1.678-4.708 2.851-.635.426-1.46.426-2.095 0-1.78-1.187-3.348-2.077-4.769-2.882l-.926-.527c-1.659-.961-3.156-1.877-4.461-3.201-.871-.871-1.623-1.932-2.222-3.192-.816-1.687-1.369-3.727-1.777-6.366-.544-3.527-.816-8.143-.916-14.545a1.89 1.89 0 0 1 .535-1.351c.354-.354.843-.562 1.351-.562h.78c2.403.009 7.708-.227 12.296-3.799a1.89 1.89 0 0 1 2.312 0c4.588 3.573 9.893 3.809 12.305 3.799z"
        fill="#3375bb"
      />
    </svg>
  );
};

trustWalletVector.defaultProps = defaultProps;

export default trustWalletVector;
