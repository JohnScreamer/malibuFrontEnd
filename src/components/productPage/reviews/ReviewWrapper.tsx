import { FC } from "react";
import { IReview } from "../../../types/rating/index.js";
import { toUKRDateType } from "../../../utils/toUKRDateType.js";
import Typography from "../../typography/Typography.js";
import Rating from "../../uikit/rating/Rating.js";
import UserAvatarSvg from "./UserAvatarSvg.js";

type ReviewWrapperType = {
    reviewData: IReview;
    isAuthor?: boolean;
};

const ReviewWrapper: FC<ReviewWrapperType> = ({ reviewData, isAuthor }) => {
    const { author, comment, createdAt, score } = reviewData;

    return (
        <li
            className={`flex flex-col gap-2  ${
                isAuthor ? "bg-orange/20 rounded p-1" : ""
            }`}
        >
            <div className="flex gap-2 items-center">
                <div className="p-[10px] rounded-full border-myGrey-light border ">
                    <UserAvatarSvg />
                </div>
                {isAuthor ? (
                    <Typography tag="span" variant="M">
                        Ваш відгук
                    </Typography>
                ) : (
                    <Typography tag="span" variant="M">
                        {author ? author.username : "Анонім"}
                    </Typography>
                )}
            </div>
            <div className="flex gap-4 items-center">
                <Rating preview ratingNum={score} />
                <Typography tag="span" variant="XS" className="text-myGrey-mid">
                    {toUKRDateType(new Date(createdAt).getTime())}
                </Typography>
            </div>
            <Typography tag="text" variant="S">
                {comment}
            </Typography>
        </li>
    );
};

export default ReviewWrapper;
