import { FC } from "react";
import { IReview } from "../../../../types/rating/index.js";
import ReviewWrapper from "../ReviewWrapper.js";
import NoItemInList from "./NoItemInList.js";
import SkeletonList from "./SkeletonList.js";

type ReviewsListType = {
    reviews?: IReview[];
    isLoading: boolean;
    userReview: boolean;
};

const ReviewsList: FC<ReviewsListType> = ({
    reviews,
    isLoading,
    userReview,
}) => {
    if (isLoading) {
        return <SkeletonList />;
    }
    if (!reviews?.length && userReview) {
        return null;
    }

    if (!reviews?.length) {
        return <NoItemInList />;
    }

    return (
        <ul className="flex flex-col gap-10">
            {reviews.map((el, i) => {
                if (i > 4) return null;
                return <ReviewWrapper key={el.id} reviewData={el} />;
            })}
        </ul>
    );
};

export default ReviewsList;
