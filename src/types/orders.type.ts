import { CartItem } from "../redux/slice/cart.js";

export interface OrderAttributes {
    totalPrice: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    orderList: null | Array<CartItem>;
    userId: string;
    street: string;
    flat: number;
    house: number;
    time: string;
    date: string;
}

export interface OrderData {
    id: number;
    attributes: OrderAttributes;
}

interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface OrderResponse {
    data: OrderData[];
    meta: {
        pagination: Pagination;
    };
}

export type UserOrderBody = {
    userId: number;
    totalPrice: number;
    orderList: Array<CartItem>;
    street: string;
    flat: number;
    house: number;
    time: string;
    date: string;
};
