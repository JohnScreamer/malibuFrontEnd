import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import { IReview } from "../../../types/rating/index.js";
import Typography from "../../typography/Typography.js";
import ReviewWrapper from "./ReviewWrapper.js";

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
        return (
            <>
                {Array(3)
                    .fill(null)
                    .map((el, i) => (
                        <Skeleton key={i} className="w-full h-28 max-sm:h-20" />
                    ))}
            </>
        );
    }
    if (!reviews?.length && userReview) {
        return null;
    }

    if (!reviews?.length) {
        return (
            <div className=" flex-col gap-3 center">
                <Typography bold variant="M" tag="span">
                    Немає відгуків, напиши свій.
                </Typography>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 1.5C12.1903 1.5 12.3641 1.60804 12.4484 1.77869L15.4221 7.80323L22.0723 8.77526C22.2606 8.80278 22.417 8.93478 22.4756 9.11578C22.5343 9.29679 22.4852 9.49541 22.3489 9.62818L17.5373 14.3147L18.6728 20.9355C18.705 21.1231 18.6279 21.3127 18.4739 21.4245C18.3199 21.5364 18.1157 21.5511 17.9473 21.4625L12 18.3349L6.05274 21.4625C5.88428 21.5511 5.68014 21.5364 5.52615 21.4245C5.37216 21.3127 5.29504 21.1231 5.32721 20.9355L6.46275 14.3147L1.65115 9.62818C1.51484 9.49541 1.4657 9.29679 1.52439 9.11578C1.58308 8.93478 1.73942 8.80278 1.9277 8.77526L8.57788 7.80323L11.5517 1.77869C11.6359 1.60804 11.8097 1.5 12 1.5ZM12 3.12963L9.35837 8.48131C9.2856 8.62874 9.14501 8.73097 8.98233 8.75474L3.07422 9.6183L7.34888 13.7818C7.46682 13.8967 7.52065 14.0623 7.49282 14.2245L6.48411 20.1058L11.7673 17.3275C11.913 17.2508 12.087 17.2508 12.2327 17.3275L17.5159 20.1058L16.5072 14.2245C16.4794 14.0623 16.5332 13.8967 16.6511 13.7818L20.9258 9.6183L15.0177 8.75474C14.855 8.73097 14.7144 8.62874 14.6417 8.48131L12 3.12963Z"
                        fill="#414141"
                    />
                </svg>
            </div>
        );
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
