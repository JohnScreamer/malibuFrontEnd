import { FC } from "react";
import Typography from "../../typography/Typography.js";
import DiscountLabel from "../../uikit/discountLabel/DiscountLabel.js";
import PriceSection, { PriceTag, PriceTagSecondary } from "../PriceSection.js";

type CartPriceSectionType = {
    price: number;
    discount: number;
};

const CartPriceSection: FC<CartPriceSectionType> = ({ discount, price }) => {
    return (
        <>
            <PriceSection
                discountPriceTag={
                    <PriceTagSecondary
                        price={price}
                        discount={discount}
                        cartSize="small"
                    >
                        name
                    </PriceTagSecondary>
                }
                priceTag={
                    <PriceTag
                        price={price}
                        cartSize="small"
                        discount={discount}
                    >
                        name2
                    </PriceTag>
                }
            />
            <Typography
                tag="span"
                variant="XS"
                className="max-[475px]:text-[8px]"
            >
                За шт.
            </Typography>
            <DiscountLabel
                discountNom={discount}
                className="max-[475px]:text-[12px]"
            />
        </>
    );
};

export default CartPriceSection;
