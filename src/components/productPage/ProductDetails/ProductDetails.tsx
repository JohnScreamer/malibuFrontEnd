import { FC, ReactNode } from "react";
import Skeleton from "react-loading-skeleton";
import { DescribeType } from "../../../types/pages/homePage.type.js";
import BonusLabel from "../../common/BonusLabel.js";
import PriceSection, {
    PriceTag,
    PriceTagSecondary,
} from "../../goods/PriceSection.js";
import ProductTable from "./ProductTable.js";
import SubscribeForDiscount from "./SubscribeForDiscount.js";

type ProductDetailsType = {
    info?: DescribeType;
    isLoading: boolean;
    price?: number;
    discount?: number;
    children: ReactNode;
};

const ProductDetails: FC<ProductDetailsType> = ({
    isLoading,
    info,
    discount,
    price,
    children,
}) => {
    return (
        <div className="flex flex-col w-full">
            <div className="mb-4">
                {isLoading ? (
                    <Skeleton height={50} />
                ) : (
                    <PriceSection
                        discountPriceTag={
                            <PriceTag
                                price={price || 0}
                                discount={discount}
                                cartSize="big"
                            >
                                З скидкою
                            </PriceTag>
                        }
                        priceTag={
                            <PriceTagSecondary
                                price={price || 0}
                                discount={discount}
                                cartSize="big"
                            >
                                Звичайна ціна
                            </PriceTagSecondary>
                        }
                    />
                )}
            </div>
            <div className="flex flex-col gap-2 mb-6">
                {isLoading || !info ? (
                    <Skeleton height={120} />
                ) : (
                    <>
                        {children}
                        <BonusLabel />
                        <SubscribeForDiscount />
                    </>
                )}
            </div>
            {isLoading || !info ? (
                <Skeleton height={100} />
            ) : (
                <ProductTable productInfo={info} />
            )}
        </div>
    );
};

export default ProductDetails;
