import { FC } from "react";
import Typography from "../../typography/Typography.js";

type TotalGoodsPriceType = {
    discount: number;
    price: number;
    amount: number;
};

const TotalGoodsPrice: FC<TotalGoodsPriceType> = ({
    amount,
    discount,
    price,
}) => {
    const totalPrice = price * amount;
    const discountAmount = discount ? (totalPrice / 100) * discount : null;
    const totalDiscountPrice = discountAmount
        ? totalPrice - discountAmount
        : null;
    return (
        <div className="flex flex-col">
            <Typography
                className="text-right max-md:text-base max-[425px]:text-[14px] "
                bold
                tag="span"
                variant="M"
            >
                {`${!!totalDiscountPrice ? totalDiscountPrice : totalPrice} ₴`}
            </Typography>
            {!!totalDiscountPrice && (
                <Typography
                    tag="span"
                    className="line-through text-right text-myGrey-mid max-md:text-[14px] max-[425px]:text-[12px]"
                >
                    {`${totalPrice} ₴`}
                </Typography>
            )}
        </div>
    );
};

export default TotalGoodsPrice;
