import { FC } from "react";
import { OrderData } from "../../../types/orders.type.js";
import EmptyOrder from "../EmptyOrder.js";
import ProductOrderList from "./ProductOrderList.js";

type OrderListType = {
    orderList?: OrderData[];
};

const OrderList: FC<OrderListType> = ({ orderList }) => {
    if (!orderList?.length) {
        return <EmptyOrder />;
    }
    return (
        <ul className="flex flex-col gap-4 fade-enter">
            {orderList.map((el) => (
                <ProductOrderList
                    key={el.id}
                    orderItem={el.attributes}
                    id={el.id}
                />
            ))}
        </ul>
    );
};

export default OrderList;
