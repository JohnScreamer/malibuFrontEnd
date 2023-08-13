import { FC, ReactNode } from "react";
import Skeleton from "react-loading-skeleton";
import { ProductData } from "../../../types/pages/homePage.type.js";
import Typography from "../../typography/Typography.js";
import ProductFavoriteBtn from "./ProductFavoriteBtn.js";

type ProductRatingSectionType = {
    productId?: number;
    isLoading: boolean;
    children: ReactNode;
    product?: ProductData;
};

const ProductRatingSection: FC<ProductRatingSectionType> = ({
    isLoading,
    productId,
    children,
    product,
}) => {
    if (isLoading || !product) {
        return (
            <div className="w-1/2">
                <Skeleton />
            </div>
        );
    }
    return (
        <div className="flex items-center max-sm:items-start max-sm:gap-2 gap-6 max-sm:flex-col">
            <div className="flex gap-6 items-center">
                <Typography tag="span" variant="XS">
                    Product ID: {productId}
                </Typography>

                <div className="center gap-2">{children}</div>
            </div>
            <ProductFavoriteBtn product={product} />
        </div>
    );
};

export default ProductRatingSection;
