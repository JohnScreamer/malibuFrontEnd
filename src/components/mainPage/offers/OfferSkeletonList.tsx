import { FC } from "react";
import Skeleton from "react-loading-skeleton";

type OfferSkeletonListType = {};

const OfferSkeletonList: FC<OfferSkeletonListType> = () => {
    return (
        <>
            <Skeleton className=" h-[175px]" />
            <Skeleton className=" h-[175px]" />
        </>
    );
};

export default OfferSkeletonList;
