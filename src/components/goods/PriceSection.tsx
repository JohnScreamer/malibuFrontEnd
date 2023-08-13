import { FC, ReactNode } from "react";
import Typography from "../typography/Typography.js";

type PriceSectionType = {
    priceTag?: ReactNode;
    discountPriceTag?: ReactNode;
};
type DiscountPriceType = {
    price: number;
    discount?: number;
    cartSize?: "small" | "big" | "default";
    className?: string;
    children: string | number;
};

const PriceSection: FC<PriceSectionType> = ({ discountPriceTag, priceTag }) => {
    return (
        <div className={`flex justify-between gap-2 max-[425px]:gap-1`}>
            <div className="flex flex-col ">{priceTag}</div>

            <div className="flex flex-col">{discountPriceTag}</div>
        </div>
    );
};

export default PriceSection;

const defaultPriceSize = {
    small: "XS",
    default: "M",
    big: "XL",
} as const;
const responsivePrice = {
    small: "max-[475px]:text-[12px]",
    default: "max-[475px]:text-[14px]",
    big: "max-md:text-[24px]",
} as const;
const responsiveSubPrice = {
    small: "text-lg text-center max-[475px]:text-[10px]",
    default: "max-[475px]:text-[10px]",
    big: "max-[475px]:text-[10px]",
} as const;

export const PriceTag: FC<DiscountPriceType> = ({
    price,
    cartSize = "default",
    discount,
    className,

    children,
}) => {
    const currentPrice = discount ? price - (price / 100) * discount : price;
    return (
        <>
            <Typography
                tag="span"
                className={`${responsivePrice[cartSize]} ${className}`}
                variant={defaultPriceSize[cartSize]}
                bold
            >
                {`${currentPrice} ₴`}
            </Typography>
            {!!discount && (
                <Typography
                    tag="span"
                    className={`text-myGrey-soft ${responsiveSubPrice[cartSize]}`}
                    variant="XS"
                >
                    {children}
                </Typography>
            )}
        </>
    );
};

const defaultSecondaryPriceSize = {
    small: "XS",
    default: "M",
    big: "XL",
} as const;
const responsiveSecondaryPrice = {
    small: "text-center  max-[475px]:text-[12px]",
    default: "max-[475px]:text-[14px]",
    big: "max-md:text-[18px]",
} as const;
const responsiveSubSecondaryPrice = {
    small: "text-lg text-center  max-[475px]:text-[10px]",
    default: " max-[475px]:text-[10px]",
    big: " max-[475px]:text-[10px]",
} as const;

export const PriceTagSecondary: FC<DiscountPriceType> = ({
    price,
    cartSize = "default",
    className,
    children,
    discount,
}) => {
    if (!discount) return null;
    return (
        <>
            <Typography
                tag="span"
                className={`${responsiveSecondaryPrice[cartSize]} ${className}`}
                variant={defaultSecondaryPriceSize[cartSize]}
            >
                {`${price} ₴`}
            </Typography>
            <Typography
                tag="span"
                className={`text-myGrey-soft max-[475px]:text-[8px] max-md:text-[12px] ${responsiveSubSecondaryPrice[cartSize]}`}
                variant="XS"
            >
                {children}
            </Typography>
        </>
    );
};
