import { configureStore } from "@reduxjs/toolkit";
import cart from "./slice/cart.js";
import common from "./slice/common.js";
import userInfo from "./slice/userInfo.js";
export const store = configureStore({
    reducer: { common, cart, userInfo },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
