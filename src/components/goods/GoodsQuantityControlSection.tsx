import { FC } from "react";
import Button from "../uikit/buttons/Button.js";

type GoodsQuantityControlSectionType = {
    amount: number;
    full?: boolean;
    addProduct: () => void;
    removeProduct: () => void;
    big?: boolean;
};

const GoodsQuantityControlSection: FC<GoodsQuantityControlSectionType> = ({
    amount,
    full,
    addProduct,
    removeProduct,
    big,
}) => {
    return (
        <div
            className={`flex rounded bg-myGreen items-center   ${
                full
                    ? "justify-between"
                    : "max-[425px]:w-full max-[425px]:justify-between"
            }`}
        >
            <Button
                variant="secondary"
                filledType="filed"
                onClick={removeProduct}
                size={big ? "big" : "default"}
                className={` ${
                    full ? "w-full flex justify-start " : "max-[425px]:w-full"
                } `}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`${
                        big
                            ? "max-[425px]:w-[24px] max-[425px]:h-[24px] h-[32px] w-[32px]"
                            : "h-[24px] w-[24px]"
                    }    mr-auto`}
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z"
                        fill="white"
                    />
                </svg>
            </Button>
            <div
                className={`${
                    big ? "text-2xl max-[425px]:text-[16px]" : "text-[16px]"
                } text-white`}
            >
                {amount}
            </div>
            <Button
                variant="secondary"
                filledType="filed"
                onClick={addProduct}
                size={big ? "big" : "default"}
                className={` ${
                    full ? "w-full flex justify-start " : "max-[425px]:w-full"
                } `}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={`${big ? "32" : "24"}`}
                    height={`${big ? "32" : "24"}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`${
                        big
                            ? "max-[425px]:w-[24px] max-[425px]:h-[24px] h-[32px] w-[32px]"
                            : "h-[24px] w-[24px]"
                    }    ml-auto`}
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 4.5C12.2761 4.5 12.5 4.72386 12.5 5V19C12.5 19.2761 12.2761 19.5 12 19.5C11.7239 19.5 11.5 19.2761 11.5 19V5C11.5 4.72386 11.7239 4.5 12 4.5Z"
                        fill="white"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z"
                        fill="white"
                    />
                </svg>
            </Button>
        </div>
    );
};

export default GoodsQuantityControlSection;
