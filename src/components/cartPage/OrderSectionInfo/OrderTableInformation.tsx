import { FC, ReactNode } from "react";
import BonusLabel from "../../common/BonusLabel.js";

type OrderTableInformationType = {
    children: ReactNode;
    price: number;
    totalDiscount: number;
    totalDiscountPrice: number;
};

const OrderTableInformation: FC<OrderTableInformationType> = ({
    children,
    price,
    totalDiscount,
    totalDiscountPrice,
}) => {
    return (
        <>
            {" "}
            <div className="flex flex-col gap-6 ">
                <div className="flex flex-col gap-12">
                    <table>
                        <tbody>
                            <tr className="flex justify-between  gap-1">
                                <td className="text-myGrey-mid">
                                    Ціна товарів
                                </td>
                                <td className="text-right">
                                    {price.toFixed(2)} ₴
                                </td>
                            </tr>
                            <tr className="flex justify-between  gap-1">
                                <td className="text-myGrey-mid">Скидка</td>
                                <td className="text-right text-orange">
                                    -{totalDiscount.toFixed(2)} ₴
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <div className="flex justify-between  gap-1">
                            <div className="text-myGrey-mid">Підсумок </div>
                            <div className="text-bold text-2xl">
                                {totalDiscountPrice.toFixed(2)} ₴
                            </div>
                        </div>
                        <BonusLabel />
                    </div>
                </div>
                {children}
            </div>
        </>
    );
};

export default OrderTableInformation;
