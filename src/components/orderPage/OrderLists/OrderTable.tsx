import { FC } from "react";
import { OrderAttributes } from "../../../types/orders.type.js";
import { toUKRDateType } from "../../../utils/toUKRDateType.js";

type OrderTableType = {
    orderItem: OrderAttributes;
};

const OrderTable: FC<OrderTableType> = ({ orderItem }) => {
    const { date, flat, house, street, userId, time, createdAt } = orderItem;
    return (
        <>
            <table className="w-full">
                <tbody>
                    <tr className={`bg-myGrey-light w-full`}>
                        <td className="text-[12px] leading-[18px] lea w-1/2 pr-1">
                            Id замовника:
                        </td>
                        <td className="text-[12px] leading-[18px] w-1/2 font-bold">
                            {userId}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-[12px] leading-[18px] lea w-1/2 pr-1">
                            Вулиця :
                        </td>
                        <td className="text-[12px] leading-[18px] w-1/2 font-bold">
                            {street}
                        </td>
                    </tr>
                    <tr className={`bg-myGrey-light`}>
                        <td className="text-[12px] leading-[18px] lea w-1/2 pr-1">
                            Номер будина:
                        </td>
                        <td className="text-[12px] leading-[18px] w-1/2 font-bold">
                            {house}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-[12px] leading-[18px] lea w-1/2 pr-1">
                            Квартира:
                        </td>
                        <td className="text-[12px] leading-[18px] w-1/2 font-bold">
                            {flat}
                        </td>
                    </tr>
                    <tr className={`bg-myGrey-light`}>
                        <td className="text-[12px] leading-[18px] lea w-1/2 pr-1">
                            Дата доставки:
                        </td>
                        <td className="text-[12px] leading-[18px] w-1/2 font-bold">
                            {date}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-[12px] leading-[18px] lea w-1/2 pr-1">
                            Години доставки :
                        </td>
                        <td className="text-[12px] leading-[18px] w-1/2 font-bold">
                            {time}
                        </td>
                    </tr>
                    <tr className={`bg-myGrey-light`}>
                        <td className="text-[12px] leading-[18px] lea w-1/2 pr-1">
                            Дата замовлення:
                        </td>
                        <td className="text-[12px] leading-[18px] w-1/2 font-bold">
                            {toUKRDateType(new Date(createdAt).getTime())}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default OrderTable;
