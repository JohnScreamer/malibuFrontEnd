import { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import CartList from "../goods/CartList.js";
import AddressFields from "./fields/AddressFields.js";
import DateFields from "./fields/DateFields.js";
import OrderSection from "./OrderSection.js";
import { ORDER_VALIDATION } from "./../../utils/validation/orderValidation.js";
import UserProfileInfo from "./UserProfileInfo.js";
import { useCreateOrder } from "../../hooks/fetching_mutation/useCreateOrder.js";
import { Button } from "@mui/base";
export type OrderFieldsType = {
    street: string;
    flat: number;
    house: number;
    time: string;
    date: string;
};

type CartOrderWrapperType = {
    finalStep?: boolean;
};

const CartOrderWrapper: FC<CartOrderWrapperType> = ({ finalStep }) => {
    const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
        resetField,
    } = useForm<OrderFieldsType>({
        mode: "onBlur",
        //@ts-ignore
        resolver: yupResolver(ORDER_VALIDATION),
    });
    const { handlerOrder, isLoading } = useCreateOrder({ reset });
    const onSubmit: SubmitHandler<OrderFieldsType> = (data) => {
        handlerOrder(data);
    };

    const submitForm = () => {
        handleSubmit(onSubmit)();
    };

    return (
        <>
            <div className="w-3/4 max-sm:w-full">
                {finalStep ? (
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col max-md:gap-8 gap-10"
                        id="cartForm"
                    >
                        <AddressFields control={control} errors={errors} />
                        <DateFields control={control} errors={errors} />
                        <UserProfileInfo />
                    </form>
                ) : (
                    <CartList />
                )}
            </div>
            <div className="max-w-1/4 max-sm:max-w-full max-sm:w-full   pt-16   lg:min-w-[272px]">
                <OrderSection
                    isFinalStep={!!finalStep}
                    submitForm={submitForm}
                />
            </div>
        </>
    );
};

export default CartOrderWrapper;
