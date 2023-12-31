import { FC, ReactNode } from "react";
import Button from "../buttons/Button.js";

type DropDownBtnType = {
    children?: ReactNode;
    handlerToggleDropDownStatus: () => void;
    isDropDownOpen: boolean;
    className?: string;
};

const DropDownBtn: FC<DropDownBtnType> = ({
    children,
    handlerToggleDropDownStatus,
    isDropDownOpen,
    className,
}) => {
    return (
        <>
            <Button
                filledType="empty"
                className={` group ${className}`}
                onClick={handlerToggleDropDownStatus}
            >
                {children}

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`group-hover:fill-orange fill-[#414141] ${
                        isDropDownOpen ? "rotate-180" : ""
                    }   `}
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.64645 8.64645C5.84171 8.45118 6.15829 8.45118 6.35355 8.64645L12 14.2929L17.6464 8.64645C17.8417 8.45118 18.1583 8.45118 18.3536 8.64645C18.5488 8.84171 18.5488 9.15829 18.3536 9.35355L12.3536 15.3536C12.1583 15.5488 11.8417 15.5488 11.6464 15.3536L5.64645 9.35355C5.45118 9.15829 5.45118 8.84171 5.64645 8.64645Z"
                    />
                </svg>
            </Button>
        </>
    );
};

export default DropDownBtn;
