import { FC } from "react";
import Skeleton from "react-loading-skeleton";

type ProductReviewListSkeletonType = {};

const ProductReviewListSkeleton: FC<ProductReviewListSkeletonType> = () => {
    return (
        <>
            <div>
                <Skeleton className="w-full max-sm:h-28 h-48" />
                {Array(3)
                    .fill(null)
                    .map((_, i) => (
                        <Skeleton key={i} className="w-full h-28 max-sm:h-20" />
                    ))}
            </div>
        </>
    );
};

export default ProductReviewListSkeleton;
