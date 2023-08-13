import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks.js";
import { useCartControl } from "../../../hooks/useCartControl.js";
import { getProductSelector } from "../../../redux/selectors/index.js";
import { addToCart, removeFromCart } from "../../../redux/slice/cart.js";
import { ProductData } from "../../../types/pages/homePage.type.js";
import GoodsQuantityControlSection from "../../goods/GoodsQuantityControlSection.js";
import Button from "../../uikit/buttons/Button.js";

type ToCartBtnSectionType = {
    data?: ProductData;
};

const ToCartBtnSection: FC<ToCartBtnSectionType> = ({ data }) => {
    const productData = useAppSelector((state) =>
        getProductSelector(state, data?.id || 0)
    );
    const { handlerAddToCart, handlerRemoveProduct } = useCartControl(data);
    if (productData?.amount) {
        return (
            <div className="">
                <GoodsQuantityControlSection
                    amount={productData?.amount}
                    full
                    big
                    addProduct={handlerAddToCart}
                    removeProduct={handlerRemoveProduct}
                />
            </div>
        );
    }
    return (
        <>
            <Button
                className=" max-[425px]:text-base max-[425px]:p-2"
                onClick={handlerAddToCart}
                leftElem={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="max-[425px]:w-[24px] max-[425px]:h-[32px] h-32 w-[32px]"
                        viewBox="0 0 32 32"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.33337 28C7.33337 26.1591 8.82576 24.6667 10.6667 24.6667C12.5077 24.6667 14 26.1591 14 28C14 29.841 12.5077 31.3333 10.6667 31.3333C8.82576 31.3333 7.33337 29.841 7.33337 28ZM10.6667 26C9.56214 26 8.66671 26.8954 8.66671 28C8.66671 29.1046 9.56214 30 10.6667 30C11.7713 30 12.6667 29.1046 12.6667 28C12.6667 26.8954 11.7713 26 10.6667 26Z"
                            fill="white"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M23.3334 28C23.3334 26.1591 24.8258 24.6667 26.6667 24.6667C28.5077 24.6667 30 26.1591 30 28C30 29.841 28.5077 31.3333 26.6667 31.3333C24.8258 31.3333 23.3334 29.841 23.3334 28ZM26.6667 26C25.5621 26 24.6667 26.8954 24.6667 28C24.6667 29.1046 25.5621 30 26.6667 30C27.7713 30 28.6667 29.1046 28.6667 28C28.6667 26.8954 27.7713 26 26.6667 26Z"
                            fill="white"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.33329 0.666672C0.965103 0.666672 0.666626 0.965149 0.666626 1.33334C0.666626 1.70153 0.965103 2.00001 1.33329 2.00001H6.10731C7.11706 7.72197 8.13773 13.4191 8.99904 19.1611C9.2438 20.7929 10.6455 22 12.2955 22H25.8129C27.4018 22 28.7698 20.8785 29.0815 19.3204L31.0004 9.72557C31.2479 8.48799 30.3014 7.33334 29.0393 7.33334H9.54725C9.1433 7.33334 8.77059 7.45202 8.45911 7.65458L7.32315 1.21748C7.26693 0.89891 6.99012 0.666672 6.66663 0.666672H1.33329ZM8.88795 9.43223C8.82749 9.02916 9.13967 8.66667 9.54725 8.66667H29.0393C29.46 8.66667 29.7755 9.05155 29.693 9.46408L27.774 19.0589C27.587 19.9938 26.7662 20.6667 25.8129 20.6667H12.2955C11.3055 20.6667 10.4645 19.9424 10.3176 18.9634L8.88795 9.43223Z"
                            fill="white"
                        />
                    </svg>
                }
                size="big"
            >
                В корзину
            </Button>
        </>
    );
};

export default ToCartBtnSection;
