import { FC } from "react";
import { useAppSelector } from "../../../hooks/reduxHooks.js";
import { useCartControl } from "../../../hooks/useCartControl.js";
import { getProductSelector } from "../../../redux/selectors/index.js";
import { ProductData } from "../../../types/pages/homePage.type.js";
import GoodsQuantityControlSection from "../../goods/GoodsQuantityControlSection.js";
import Button from "../../uikit/buttons/Button.js";
import AddToCartSVG from "./AddToCartSVG.js";

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
                leftElem={<AddToCartSVG />}
                size="big"
            >
                В корзину
            </Button>
        </>
    );
};

export default ToCartBtnSection;
