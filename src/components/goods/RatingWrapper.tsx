import { useQuery } from "@tanstack/react-query";
import { FC, useEffect } from "react";
import { getProductRating } from "../../api/query_request.js";
import Typography from "../typography/Typography.js";
import Rating from "../uikit/rating/Rating.js";

type RatingWrapperType = {
    name?: string;
    isProductLoading?: boolean;
    counter?: boolean;
};

const RatingWrapper: FC<RatingWrapperType> = ({ name, counter }) => {
    if (!name) return null;

    const { data, isLoading, refetch } = useQuery({
        queryFn: () => getProductRating(name),
        queryKey: [name],
    });
    useEffect(() => {
        if (name) {
            refetch();
        }
    }, [name]);

    return (
        <>
            <Rating
                ratingNum={data?.averageScore || 0}
                preview
                isLoading={isLoading}
            />
            {counter && (
                <Typography tag="span" className="text-[14px]">
                    {data?.reviewsCount} оглядів
                </Typography>
            )}
        </>
    );
};

export default RatingWrapper;
