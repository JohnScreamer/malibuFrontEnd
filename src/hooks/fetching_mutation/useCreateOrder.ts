import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UseFormReset } from "react-hook-form";
import { toast } from "react-hot-toast";
import { createUserOrder } from "../../api/mutation_request.js";
import { OrderFieldsType } from "../../components/cartPage/CartOrderWrapper.js";
import {
    getAllCartSelector,
    getTotalPriceSelector,
    getUserDataSelector,
} from "../../redux/selectors/index.js";
import { useAppDispatch, useAppSelector } from "../reduxHooks.js";
import { clearCart } from "../../redux/slice/cart.js";
import { useOrderModalControl } from "../useOrderModalControl.js";
type PropsType = {
    reset: UseFormReset<OrderFieldsType>;
};
export const useCreateOrder = ({ reset }: PropsType) => {
    const queryClient = useQueryClient();
    const totalPrice = useAppSelector(getTotalPriceSelector);
    const userId = useAppSelector(getUserDataSelector)?.id || 0;
    const cart = useAppSelector(getAllCartSelector);
    const dispatch = useAppDispatch();
    const notify = () => toast.success("Замовлення створилось");
    const { handlerOpenOrderDoneModal } = useOrderModalControl();
    const { error, isLoading, mutate } = useMutation(createUserOrder, {
        onSuccess: (data) => {
            queryClient.invalidateQueries(["orders"]);
            notify();
            reset({
                date: "",
                flat: "",
                house: "",
                street: "",
                time: "",
            } as unknown as OrderFieldsType);
            dispatch(clearCart());
            handlerOpenOrderDoneModal();
        },
        onError: (error) => {
            toast.error("Не вдалось створити ваше замовлення");
            console.log(error);
        },
    });
    const handlerOrder = (orderInfo: OrderFieldsType) => {
        mutate({
            totalPrice: totalPrice.price,
            orderList: cart,
            userId,
            ...orderInfo,
        });
    };
    return { error, isLoading, handlerOrder };
};
