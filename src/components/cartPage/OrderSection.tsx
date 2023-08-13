import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks.js";
import { getTotalPriceSelector } from "../../redux/selectors/index.js";

import BonusLabel from "../common/BonusLabel.js";
import Button from "../uikit/buttons/Button.js";

type OrderSectionType = {
    isFinalStep?: boolean;
    submitForm: () => void;
};

const OrderSection: FC<OrderSectionType> = ({ isFinalStep, submitForm }) => {
    const { price, totalDiscount, totalDiscountPrice } = useAppSelector(
        getTotalPriceSelector
    );
    const isPriceValid = totalDiscountPrice < 500;
    const navigate = useNavigate();
    const handlerNextOrder = () => {
        navigate({
            search: "finalStep=true",
        });
    };

    return (
        <div className="flex flex-col gap-6 ">
            <div className="flex flex-col gap-12">
                <table>
                    <tbody>
                        <tr className="flex justify-between  gap-1">
                            <td className="text-myGrey-mid">Ціна товарів</td>
                            <td className="text-right">{price.toFixed(2)} ₴</td>
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
            <div className="flex flex-col gap-4">
                <div
                    className={`px-2 py-[3px] bg-redError text-white rounded text-xs  text-center leading-6 ${
                        isPriceValid ? "" : "bg-myGrey-mid text-myGrey-soft"
                    }`}
                >
                    Мінімальна сума замовлення 500 грн
                </div>
                {isFinalStep ? (
                    <Button
                        full
                        onClick={submitForm}
                        variant={isPriceValid ? "red" : "primary"}
                        disabled={isPriceValid}
                        size="big"
                    >
                        Оформити замовлення
                    </Button>
                ) : (
                    <Button
                        full
                        onClick={handlerNextOrder}
                        variant={isPriceValid ? "red" : "primary"}
                        disabled={isPriceValid}
                        size="big"
                    >
                        Далі
                    </Button>
                )}
            </div>
        </div>
    );
};

export default OrderSection;
