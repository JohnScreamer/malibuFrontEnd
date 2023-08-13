import { FC } from "react";
import Skeleton from "react-loading-skeleton";

type OrderSkeletonType = {};

const OrderSkeleton: FC<OrderSkeletonType> = () => {
    return (
        <div className="w-full h-full flex flex-col gap-4">
            {Array(3)
                .fill(null)
                .map((el, i) => (
                    <Skeleton className="w-full h-[400px]" key={i} />
                ))}
        </div>
    );
};

export default OrderSkeleton;
