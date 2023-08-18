import { FC, useEffect, useState } from "react";
type SideType = "t" | "b" | "r" | "l";
type VariantType = "error" | "info";
export type TooltipsType = {
    withSvg?: boolean;
    className?: string;
    children: string;
    arrowSide: SideType;
    variant: VariantType;
};
const variantStyle = {
    error: "redError",
    info: "myGrey-light",
};

const arrowSideStyle = {
    t: `top-[-4px] left-[50%] translate-x-[-50%]  border-l-transparent 
        border-l-[6px] border-r-[6px] border-r-transparent  border-b-4  border-transparent `,
    b: `bottom-[-4px] left-[50%] translate-x-[-50%] border-l-transparent 
    border-l-[6px] border-r-[6px] border-r-transparent  border-b-4  rotate-180   border-transparent`,
    r: `top-[50%] left-[-8px] translate-t-[-50%] border-l-transparent   rotate-90 scale-[-1] 
    border-l-[6px] border-r-[6px] border-r-transparent  border-b-4   border-transparent`,
    l: `top-[50%] right-[-8px] translate-t-[-50%] border-l-transparent   border-transparent  
    border-l-[6px] border-r-[6px] border-r-transparent  border-b-4   rotate-90`,
};
const toolTipPosition = {
    b: `top-0 left-[50%]  translate-x-[-50%] translate-y-[-110%]`,
    t: `bottom-0 left-[50%]  translate-x-[-50%] translate-y-[110%]`,
    l: `top-[50%] left-0  translate-Y-[-50%] translate-x-[-110%]`,
    r: `top-[50%] right-0  translate-Y-[-50%] translate-x-[110%]`,
};

const Tooltips: FC<TooltipsType> = (props) => {
    const [isHidden, setHidden] = useState(false);
    const { withSvg, className, variant, children, arrowSide } = props;
    const handlerHideTooltip = () => {
        setHidden(true);
    };
    useEffect(() => {
        setHidden(false);
    }, [children]);
    if (isHidden) {
        return null;
    }
    return (
        <div
            onMouseEnter={handlerHideTooltip}
            className={`inline-flex  rounded  items-center text-white ${toolTipPosition[arrowSide]} max-[425px]:max-w-[275px]     gap-2 p-2 absolute z-10 bg-${variantStyle[variant]} ${className}`}
        >
            {withSvg && (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="shrink-0"
                    fill={`${variant === "error" ? "white" : "black"}`}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="feather-icon / alert-circle">
                        <g id="Vector">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                fill={`${
                                    variant === "error" ? "white" : "black"
                                }`}
                                d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5Z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                fill={`${
                                    variant === "error" ? "white" : "black"
                                }`}
                                d="M12 7.5C12.2761 7.5 12.5 7.72386 12.5 8V12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12V8C11.5 7.72386 11.7239 7.5 12 7.5Z"
                            />
                            <path d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z" />
                        </g>
                    </g>
                </svg>
            )}
            <div
                className={`w-0 h-0 ${
                    variant === "error"
                        ? "border-b-pallet-error"
                        : "border-b-myGrey-light"
                }    absolute  }
               
                ${arrowSideStyle[arrowSide]}  `}
            ></div>
            <div
                className={`  max-md:text-xs max-lg:text-sm ${
                    variant === "error" ? "" : "text-black"
                }      `}
            >
                {children}
            </div>
        </div>
    );
};

export default Tooltips;
