import { FC } from "react";
import { useAppSelector } from "../../../hooks/reduxHooks.js";
import { getTotalPriceSelector } from "../../../redux/selectors/index.js";
import OrderBtnNavigation from "./OrderBtnNavigation.js";
import OrderTableInformation from "./OrderTableInformation.js";

type OrderSectionType = {
    isFinalStep?: boolean;
    submitForm: () => void;
    isValid: boolean;
};

const OrderSection: FC<OrderSectionType> = ({
    isFinalStep,
    submitForm,
    isValid,
}) => {
    const { price, totalDiscount, totalDiscountPrice } = useAppSelector(
        getTotalPriceSelector
    );

    return (
        <OrderTableInformation
            price={price}
            totalDiscount={totalDiscount}
            totalDiscountPrice={totalDiscountPrice}
        >
            <OrderBtnNavigation
                isFinalStep={!!isFinalStep}
                isValid={isValid}
                totalDiscountPrice={totalDiscountPrice}
                submitForm={submitForm}
            />
        </OrderTableInformation>
    );
};

export default OrderSection;
