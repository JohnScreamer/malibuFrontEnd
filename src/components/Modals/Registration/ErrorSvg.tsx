import { FC } from "react";

type ErrorSvgType = {};

const ErrorSvg: FC<ErrorSvgType> = () => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5Z"
                    fill="#F2F2F2"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 7.5C12.2761 7.5 12.5 7.72386 12.5 8V12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12V8C11.5 7.72386 11.7239 7.5 12 7.5Z"
                    fill="#F2F2F2"
                />
                <path
                    d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z"
                    fill="#F2F2F2"
                />
            </svg>
        </>
    );
};

export default ErrorSvg;
