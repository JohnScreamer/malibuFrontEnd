import { FC, useEffect, useState } from "react";
import Empty from "../uikit/empty/Empty.js";
import OrderSkeleton from "./OrderSkeleton.js";

type EmptyOrderType = {};

const EmptyOrder: FC<EmptyOrderType> = () => {
    const [showEmpty, setEmptyStatus] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setEmptyStatus(true);
        }, 2000);
        () => clearTimeout(timer);
    }, []);
    if (showEmpty) {
        return (
            <>
                <Empty />
            </>
        );
    }
    return <OrderSkeleton />;
};

export default EmptyOrder;
