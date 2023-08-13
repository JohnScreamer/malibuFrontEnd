import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store.js";

export const getProductSelector = (state: RootState, id?: number) => {
    if (id === undefined || id === null) return null;
    return state.cart.cart.find((el) => el.product.id === id);
};
export const productInCartSelector = (state: RootState) =>
    state.cart.cart.reduce((acc, el) => (acc += el.amount), 0);

export const uniqProductInCart = (state: RootState) => {
    return state.cart.cart.length;
};
export const getAllCartSelector = (state: RootState) => {
    return state.cart.cart;
};
export const getTotalPriceSelector = createSelector(
    (state: RootState) => state.cart.cart,
    (cart) => {
        const totalDiscountPrice = cart.reduce(
            (acc, el) => {
                const discountPrice =
                    (el.product.attributes.price / 100) *
                    el.product.attributes.discount;
                acc.totalDiscountPrice +=
                    (el.product.attributes.price - discountPrice) * el.amount;
                acc.totalDiscount += discountPrice * el.amount;
                acc.price += el.product.attributes.price * el.amount;
                return acc;
            },
            { totalDiscount: 0, totalDiscountPrice: 0, price: 0 }
        );
        return totalDiscountPrice;
    }
);
export const getAllProductId = createSelector(
    (state: RootState) => state.cart.cart,
    (cart) => {
        return cart.reduce((acc: Array<number>, el) => {
            acc.push(el.product.id);
            return acc;
        }, []);
    }
);

export const filtersStatusSelector = (state: RootState) => {
    return state.common.isFiltersOpen;
};
export const isUserAuthSelector = (state: RootState) => {
    return state.userInfo.isAuth;
};

export const getUserDataSelector = (state: RootState) =>
    state.userInfo.userData;

export const getUserFavoriteSelector = (state: RootState) =>
    state.userInfo.userData?.favorite;
export const isUserDataLoadingSelector = (state: RootState) =>
    state.userInfo.isLoading;
export const isHeaderMenuOpenSelector = (state: RootState) =>
    state.common.isCatalogOpen;
