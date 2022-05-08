import React, { FC } from "react";
import { classNameInterface } from "../../../../types/index";

const defaultProps: classNameInterface = {
  className: "h-6 w-6",
};

const MoonVector: FC<classNameInterface> = ({ className }) => {
  return (
    <svg
      width="700pt"
      height="700pt"
      version="1.1"
      viewBox="0 0 700 700"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m461.76 148.72c-12.363-12.348-26.539-22.738-42.035-30.812 16.898 32.422 23.016 69.387 17.465 105.52-5.5547 36.137-22.484 69.559-48.336 95.414-25.859 25.844-59.289 42.77-95.43 48.312-36.137 5.543-73.102-0.58203-105.52-17.488 8.0742 15.516 18.469 29.707 30.824 42.082 21.332 21.332 47.902 36.672 77.039 44.48s59.816 7.8086 88.957 0c29.137-7.8086 55.707-23.148 77.035-44.477 21.332-21.332 36.672-47.902 44.48-77.039 7.8086-29.141 7.8086-59.82 0-88.957-7.8086-29.137-23.148-55.707-44.48-77.039z" />
    </svg>
  );
};

MoonVector.defaultProps = defaultProps;

export default MoonVector;
