import { FC } from "react";

type NextSvgType = {};

const NextSvg: FC<NextSvgType> = () => {
    return (
        <>
            <div className=" h-full center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="rotate-180 hover:fill-orange"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.3536 5.64645C15.5488 5.84171 15.5488 6.15829 15.3536 6.35355L9.70711 12L15.3536 17.6464C15.5488 17.8417 15.5488 18.1583 15.3536 18.3536C15.1583 18.5488 14.8417 18.5488 14.6464 18.3536L8.64645 12.3536C8.45118 12.1583 8.45118 11.8417 8.64645 11.6464L14.6464 5.64645C14.8417 5.45118 15.1583 5.45118 15.3536 5.64645Z"
                    />
                </svg>
            </div>
        </>
    );
};

export default NextSvg;
