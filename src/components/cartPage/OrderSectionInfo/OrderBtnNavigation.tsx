import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../hooks/reduxHooks.js";
import { isUserAuthSelector } from "../../../redux/selectors/index.js";
import { submitForm } from "../../../utils/submitForm.js";
import Button from "../../uikit/buttons/Button.js";

type OrderBtnNavigationType = {
    totalDiscountPrice: number;
    isValid: boolean;
    isFinalStep: boolean;
    submitForm: () => void;
};

const OrderBtnNavigation: FC<OrderBtnNavigationType> = ({
    totalDiscountPrice,
    isFinalStep,
    isValid,
    submitForm,
}) => {
    const isAuth = useAppSelector(isUserAuthSelector);
    const isPriceValid = totalDiscountPrice < 500;
    const navigate = useNavigate();
    const handlerNextOrder = () => {
        navigate({
            search: "finalStep=true",
        });
    };
    const isOrderBtnDisabled = !isAuth || !isValid || !isValid;
    return (
        <>
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
                        variant={isOrderBtnDisabled ? "red" : "primary"}
                        disabled={isOrderBtnDisabled}
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
        </>
    );
};

export default OrderBtnNavigation;
