import { FC } from "react";
import { Navigate } from "react-router-dom";
import PageLayout from "../components/layouts/DefaultPageLayout/PageLayout.js";
import OrderList from "../components/orderPage/OrderLists/OrderList.js";
import OrderSkeleton from "../components/orderPage/OrderSkeleton.js";
import { ORDERS_CRUMBS } from "../constants/breadCrumbsArr.js";
import { useUserOrderFetching } from "../hooks/fetching/useUserOrdersFetching.js";
import { getJwtFromCookie } from "../utils/JWT/getJWTCookie.js";

type OrdersType = {};

const Orders: FC<OrdersType> = () => {
    const { data, isLoading, isUserLoading } = useUserOrderFetching();
    const token = getJwtFromCookie();
    if (!token) {
        return <Navigate to={"/"} />;
    }
    return (
        <PageLayout breadCrumbsArr={ORDERS_CRUMBS} title={"Замовлення"}>
            {isLoading || isUserLoading ? (
                <OrderSkeleton />
            ) : (
                <OrderList orderList={data?.data} />
            )}
        </PageLayout>
    );
};

export default Orders;
