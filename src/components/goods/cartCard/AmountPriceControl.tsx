import { FC } from "react";
import { useCartControl } from "../../../hooks/useCartControl.js";
import { ProductData } from "../../../types/pages/homePage.type.js";
import GoodsQuantityControlSection from "../GoodsQuantityControlSection.js";
import TotalGoodsPrice from "./TotalGoodsPrice.js";

type AmountPriceControlType = {
    amount: number;
    price: number;
    discount: number;
    data: ProductData;
};

const AmountPriceControl: FC<AmountPriceControlType> = ({
    amount,
    discount,
    price,
    data,
}) => {
    const { handlerAddToCart, handlerRemoveProduct } = useCartControl(data);
    return (
        <>
            <div className=" lg:mr-auto max-[425px]:w-full max-[425px]:max-w-[140px]">
                <GoodsQuantityControlSection
                    amount={amount}
                    addProduct={handlerAddToCart}
                    removeProduct={handlerRemoveProduct}
                />
            </div>
            <TotalGoodsPrice
                price={price}
                discount={discount}
                amount={amount}
            />
        </>
    );
};

export default AmountPriceControl;
