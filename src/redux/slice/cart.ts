import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductData } from "../../types/pages/homePage.type.js";
import {
    getCartFromLocalStorage,
    saveCartToLocalStorage,
} from "../../utils/localStorage/cart.js";
export type CartItem = {
    amount: number;
    product: ProductData;
};
export interface cartState {
    cart: Array<CartItem>;
}

const initialState: cartState = {
    cart: getCartFromLocalStorage() || [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductData>) => {
            const product = state.cart.find((el) => {
                if (el.product.id === action.payload.id) {
                    return el;
                }
            });
            if (product) {
                product.amount = product.amount + 1;
                saveCartToLocalStorage(state.cart);
                return;
            }
            state.cart.push({ amount: 1, product: action.payload });
            saveCartToLocalStorage(state.cart);
        },

        removeFromCart: (state, action: PayloadAction<number>) => {
            const product = state.cart.find(
                (el) => el.product.id === action.payload
            );
            if (!product) return;

            if (product.amount > 1) {
                product.amount = product.amount - 1;
                saveCartToLocalStorage(state.cart);
                return;
            }
            state.cart = state.cart.filter(
                (el) => el.product.id !== action.payload
            );
            saveCartToLocalStorage(state.cart);
        },
        clearCart: (state) => {
            state.cart = [];
            saveCartToLocalStorage([]);
        },
        removeMultipleProducts: (
            state,
            action: PayloadAction<Array<number>>
        ) => {
            const deleteArr = new Set(action.payload);

            state.cart = state.cart.filter(
                (el) => !deleteArr.has(el.product.id)
            );
            saveCartToLocalStorage(state.cart);
        },
    },
});

export const { addToCart, removeFromCart, removeMultipleProducts, clearCart } =
    cartSlice.actions;

export default cartSlice.reducer;
