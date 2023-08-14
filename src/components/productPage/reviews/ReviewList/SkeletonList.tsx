import { FC } from "react";
import Skeleton from "react-loading-skeleton";

type SkeletonListType = {};

const SkeletonList: FC<SkeletonListType> = () => {
    return (
        <>
            {Array(3)
                .fill(null)
                .map((_, i) => (
                    <Skeleton key={i} className="w-full h-28 max-sm:h-20" />
                ))}
        </>
    );
};

export default SkeletonList;
