import { classNameInterface } from "@lib/@Types";
import React, { FC } from "react";

const defaultProps: classNameInterface = {
  className: "h-6 w-6",
};

const PolygonVectorOutLine: FC<classNameInterface> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.2915 6.44398C10.1254 6.3425 9.90958 6.3425 9.72695 6.44398L8.43172 7.22199L7.55165 7.7294L6.25646 8.5074C6.0904 8.60888 5.87454 8.60888 5.69188 8.5074L4.66236 7.89851C4.49631 7.79703 4.38007 7.611 4.38007 7.40804V6.20719C4.38007 6.00423 4.47971 5.81818 4.66236 5.7167L5.67527 5.12474C5.84133 5.02326 6.05719 5.02326 6.23985 5.12474L7.25277 5.7167C7.41881 5.81818 7.53505 6.00423 7.53505 6.20719V6.98521L8.41512 6.46089V5.68288C8.41512 5.47992 8.31551 5.29387 8.13284 5.19239L6.25646 4.07611C6.0904 3.97463 5.87454 3.97463 5.69188 4.07611L3.78229 5.19239C3.59963 5.29387 3.5 5.47992 3.5 5.68288V7.93236C3.5 8.13531 3.59963 8.32137 3.78229 8.42285L5.69188 9.53913C5.85793 9.6406 6.0738 9.6406 6.25646 9.53913L7.55165 8.77802L8.43172 8.25371L9.72695 7.4926C9.89298 7.39112 10.1088 7.39112 10.2915 7.4926L11.3044 8.08457C11.4705 8.18605 11.5867 8.37211 11.5867 8.57506V9.77589C11.5867 9.97888 11.4871 10.1649 11.3044 10.2664L10.2915 10.8753C10.1254 10.9768 9.90958 10.9768 9.72695 10.8753L8.71403 10.2833C8.54796 10.1818 8.43172 9.99577 8.43172 9.79282V9.01482L7.55165 9.53913V10.3171C7.55165 10.5201 7.6513 10.7061 7.83393 10.8076L9.74354 11.9239C9.90958 12.0254 10.1254 12.0254 10.3081 11.9239L12.2177 10.8076C12.3838 10.7061 12.5 10.5201 12.5 10.3171V8.06765C12.5 7.86469 12.4004 7.67867 12.2177 7.57719L10.2915 6.44398Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

const PolygonVectorSolid: FC<classNameInterface> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM14.1397 10.0564C14.3695 9.93769 14.6279 9.93769 14.829 10.0564L17.1554 11.451C17.3851 11.5994 17.5 11.8368 17.5 12.0742V14.8932C17.5 15.1602 17.3564 15.3976 17.1554 15.5163L14.829 16.911C14.5992 17.0297 14.3407 17.0297 14.1397 16.911L11.8133 15.5163C11.5836 15.368 11.4687 15.1306 11.4687 14.8932V13.9139L12.5601 13.2611V14.2107C12.5601 14.4777 12.7037 14.7151 12.9047 14.8338L14.1397 15.5757C14.3695 15.6944 14.6279 15.6944 14.829 15.5757L16.0352 14.8338C16.265 14.6855 16.3799 14.4481 16.3799 14.2107V12.727C16.3799 12.4599 16.2363 12.2226 16.0352 12.1039L14.8003 11.362C14.5705 11.2433 14.312 11.2433 14.111 11.362L12.5313 12.3116L11.4399 12.9644L9.86031 13.9139C9.63055 14.0326 9.37206 14.0326 9.17102 13.9139L6.84465 12.5193C6.61488 12.3709 6.5 12.1335 6.5 11.8961V9.10682C6.5 8.86944 6.61488 8.63205 6.84465 8.51335L9.19974 7.08902C9.4295 6.97033 9.68799 6.97033 9.88903 7.08902L12.1867 8.48368C12.4164 8.63205 12.5313 8.86944 12.5313 9.10682V10.1157L11.4399 10.7685V9.78932C11.4399 9.52226 11.2963 9.28487 11.0953 9.16617L9.86031 8.39466C9.63055 8.27596 9.37206 8.27596 9.17102 8.39466L7.93603 9.1365C7.70627 9.28487 7.59138 9.52226 7.59138 9.75964V11.2433C7.59138 11.5104 7.73499 11.7478 7.93603 11.8665L9.17102 12.638C9.40078 12.7567 9.65927 12.7567 9.86031 12.638L11.4399 11.6588L12.5313 11.0356L14.1397 10.0564Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

PolygonVectorOutLine.defaultProps = defaultProps;
PolygonVectorSolid.defaultProps = defaultProps;

export { PolygonVectorOutLine, PolygonVectorSolid };