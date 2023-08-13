import { useQuery } from "@tanstack/react-query";
import { FC, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { getProductReviews } from "../../api/query_request.js";
import ReviewsList from "./reviews/ReviewsList.js";
import ReviewWrapper from "./reviews/ReviewWrapper.js";
import WriteNewReviewsWrapper from "./reviews/WriteNewReviewsWrapper.js";

type ProductReviewsType = {
    name?: string;
    isProductLoading: boolean;
};

const ProductReviews: FC<ProductReviewsType> = ({ name, isProductLoading }) => {
    if (!name) return <ReviewSkeleton />;
    const { data, isLoading, refetch } = useQuery({
        queryFn: () => getProductReviews(name),
        queryKey: ["review"],
    });

    useEffect(() => {
        if (name) {
            refetch();
        }
    }, [name]);

    return (
        <div className="max-w-[688px] flex flex-col gap-10 mx-auto">
            {!!data?.userReview && (
                <div>
                    <ReviewWrapper reviewData={data?.userReview} isAuthor />
                </div>
            )}
            <ReviewsList
                reviews={data?.reviews}
                userReview={!!data?.userReview}
                isLoading={isLoading || isProductLoading}
            />
            {!data?.userReview && (
                <WriteNewReviewsWrapper
                    isLoading={isLoading || isProductLoading}
                    productName={name || ""}
                />
            )}
        </div>
    );
};

export default ProductReviews;

export const ReviewSkeleton = () => {
    return (
        <div>
            <Skeleton className="w-full max-sm:h-28 h-48" />
            {Array(3)
                .fill(null)
                .map((el, i) => (
                    <Skeleton key={i} className="w-full h-28 max-sm:h-20" />
                ))}
        </div>
    );
};
