import { FC } from "react";
import { useAppSelector } from "../../../hooks/reduxHooks.js";
import { useCartControl } from "../../../hooks/useCartControl.js";
import { getProductSelector } from "../../../redux/selectors/index.js";
import { ProductData } from "../../../types/pages/homePage.type.js";
import Button from "../../uikit/buttons/Button.js";
import GoodsQuantityControlSection from "../GoodsQuantityControlSection.js";

type CardButtonsType = {
    data?: ProductData;
};

const CardButtons: FC<CardButtonsType> = ({ data }) => {
    const cartProductData = useAppSelector((state) =>
        getProductSelector(state, data?.id)
    );
    const { handlerAddToCart, handlerRemoveProduct } = useCartControl(data);
    if (!cartProductData) {
        return (
            <>
                <Button
                    full
                    className="ui-card-btn  group-hover:ui-btn-primary"
                    variant="secondary"
                    filledType="border"
                    onClick={handlerAddToCart}
                >
                    В корзину
                </Button>
            </>
        );
    }
    return (
        <GoodsQuantityControlSection
            amount={cartProductData.amount}
            full
            addProduct={handlerAddToCart}
            removeProduct={handlerRemoveProduct}
        />
    );
};

export default CardButtons;
