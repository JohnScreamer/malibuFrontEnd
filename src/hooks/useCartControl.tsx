import { addToCart, removeFromCart } from "../redux/slice/cart.js";
import { ProductData } from "../types/pages/homePage.type.js";
import { useAppDispatch } from "./reduxHooks.js";

export const useCartControl = (data?: ProductData) => {
    const dispatch = useAppDispatch();
    const handlerAddToCart = (
        e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (!data) return;
        dispatch(addToCart(data));
        if (e) {
            e.preventDefault();
        }
    };
    const handlerRemoveProduct = (
        e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (!data) return;
        dispatch(removeFromCart(data.id));
        if (e) {
            e.preventDefault();
        }
    };
    return { handlerAddToCart, handlerRemoveProduct };
};
