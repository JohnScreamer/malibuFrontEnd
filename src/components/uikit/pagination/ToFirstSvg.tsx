import { FC } from "react";

type ToFirstSvgType = {};

const ToFirstSvg: FC<ToFirstSvgType> = () => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className=" hover:fill-orange"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.3536 6.64645C11.5488 6.84171 11.5488 7.15829 11.3536 7.35355L6.70711 12L11.3536 16.6464C11.5488 16.8417 11.5488 17.1583 11.3536 17.3536C11.1583 17.5488 10.8417 17.5488 10.6464 17.3536L5.64645 12.3536C5.45118 12.1583 5.45118 11.8417 5.64645 11.6464L10.6464 6.64645C10.8417 6.45118 11.1583 6.45118 11.3536 6.64645Z"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.3536 6.64645C18.5488 6.84171 18.5488 7.15829 18.3536 7.35355L13.7071 12L18.3536 16.6464C18.5488 16.8417 18.5488 17.1583 18.3536 17.3536C18.1583 17.5488 17.8417 17.5488 17.6464 17.3536L12.6464 12.3536C12.4512 12.1583 12.4512 11.8417 12.6464 11.6464L17.6464 6.64645C17.8417 6.45118 18.1583 6.45118 18.3536 6.64645Z"
                />
            </svg>
        </>
    );
};

export default ToFirstSvg;
