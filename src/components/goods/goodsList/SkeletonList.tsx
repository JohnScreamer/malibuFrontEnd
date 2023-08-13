import { FC } from "react";
import Skeleton from "react-loading-skeleton";

type SkeletonProps = {
    skeletonsNum: number;
};
export const SkeletonList: FC<SkeletonProps> = ({ skeletonsNum }) => {
    return (
        <>
            {Array(skeletonsNum)
                .fill(null)
                .map((el, i) => {
                    return <Skeleton height={276} key={i} />;
                })}
        </>
    );
};
