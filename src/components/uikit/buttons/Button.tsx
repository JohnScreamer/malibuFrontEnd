import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import "./Button.css";

type SizeType = "big" | "default" | "mini";

export type ButtonType = {
    children: string | ReactNode;
    className?: string;
    leftElem?: ReactNode;
    rightElem?: ReactNode;
    variant?: "primary" | "secondary" | "grey" | "red";
    size?: SizeType;
    filledType?: "filed" | "border" | "empty";
    full?: boolean;
    elemAbsolute?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const sizeStyle = {
    big: "text-2xl p-4",
    default: "text-base p-2",
    mini: "p-2 ",
} as const;

const variantStyle = {
    primary: {
        filed: `ui-btn-primary btn-big`,
        border: "ui-btn-primary-border",
        empty: "",
    },
    secondary: {
        filed: `ui-btn-secondary`,
        border: `ui-btn-secondary-border     
        
        `,
        empty: "",
    },
    grey: {
        filed: `ui-btn-grey`,
        border: "ui-btn-grey-border",
        empty: "",
    },
    red: {
        filed: `ui-btn-red`,
        border: "",
        empty: "",
    },
} as const;
const elemSize = {
    big: "w-[32px] h-[32px] ",
    default: "w-[24px] h-[24px] ",
    mini: "w-[24px] h-[24px] ",
};
const Button: FC<ButtonType> = (props) => {
    const {
        children,
        className,
        rightElem,
        leftElem,
        variant = "primary",
        size = "default",
        full,
        filledType = "filed",
        elemAbsolute,

        ...restProps
    } = props;

    return (
        <button
            className={` ${
                variantStyle[variant][filledType]
            }  flex   gap-2 justify-center  relative    ${
                full ? "block w-full  " : "inline"
            }  items-center rounded-[4px] ${sizeStyle[size]} 
       
            ${className}  `}
            {...restProps}
        >
            {!!leftElem && (
                <div
                    className={`inline-flex  justify-center items-center  ${
                        elemSize[size]
                    }  max-md:text-7xl ${
                        elemAbsolute ? `left-0 m-2  absolute` : ""
                    } `}
                >
                    {leftElem}
                </div>
            )}
            <div className="center w-full">{children}</div>
            {!!rightElem && (
                <div
                    className={`inline-flex justify-center items-center ${
                        elemSize[size]
                    }   ${elemAbsolute ? `right-0 m-2  absolute` : ""}`}
                >
                    {rightElem}
                </div>
            )}
        </button>
    );
};

export default Button;
