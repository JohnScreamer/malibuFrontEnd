import { FC, ReactNode, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { EmptyStar, FillStar, HalfFillStar } from "./startType.js";

type RatingType = {
    ratingNum: number;
    setRating?: (num: number) => void;
    preview?: boolean;
    big?: boolean;
    isLoading?: boolean;
};

const Rating: FC<RatingType> = (props) => {
    const { ratingNum, setRating, preview, big, isLoading } = props;

    const [currentRating, setCurrentRating] = useState(() => ratingNum);
    const handlerLeaveTempRating = () => {
        setCurrentRating(ratingNum);
    };
    const handlerSetRating = (
        num: number,
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        e.stopPropagation();
        if (setRating) {
            setRating(num);
        }
    };
    useEffect(() => {
        setCurrentRating(ratingNum);
    }, [ratingNum]);

    if (isLoading) {
        return <Skeleton className={`w-1/2 ${big ? "h-6" : "h-4"} `} />;
    }

    const starWrapper = (star: ReactNode, i: number) => {
        if (preview) {
            return <span key={i}>{star}</span>;
        }
        return (
            <button
                onClick={(e) => handlerSetRating(i + 1, e)}
                key={i}
                onMouseEnter={() => setCurrentRating(i + 1)}
                onMouseLeave={handlerLeaveTempRating}
            >
                {star}
            </button>
        );
    };
    return (
        <div className="flex gap-1 min-h-[24px] items-center">
            {Array(5)
                .fill(null)
                .map((el: null, i: number) => {
                    if (i + 1 <= currentRating) {
                        return starWrapper(FillStar(big), i);
                    }

                    if (i + 0.49 < currentRating) {
                        return starWrapper(HalfFillStar(big), i);
                    }
                    return starWrapper(EmptyStar(big), i);
                })}
        </div>
    );
};

export default Rating;
