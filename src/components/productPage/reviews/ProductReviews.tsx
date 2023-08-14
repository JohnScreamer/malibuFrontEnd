import { useQuery } from "@tanstack/react-query";
import { FC, useEffect } from "react";
import { getProductReviews } from "../../../api/query_request.js";
import ProductReviewListSkeleton from "./ProductReviewListSkeleton.js";
import ReviewsList from "./ReviewList/ReviewsList.js";
import ReviewWrapper from "./ReviewWrapper.js";
import WriteNewReviewsWrapper from "./WriteNewReview/WriteNewReviewsWrapper.js";

type ProductReviewsType = {
    name?: string;
    isProductLoading: boolean;
};

const ProductReviews: FC<ProductReviewsType> = ({ name, isProductLoading }) => {
    if (!name) return <ProductReviewListSkeleton />;
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
