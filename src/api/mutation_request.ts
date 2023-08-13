import { LoginType } from "../components/Modals/Login/LoginFields.js";
import { UserOrderBody } from "../types/orders.type.js";
import { UserReviewBody } from "../types/rating/index.js";
import { FieldsType } from "../types/registrationFileds.js";
import { AuthData, User } from "../types/user.type..js";
import { getJwtFromCookie } from "../utils/JWT/getJWTCookie.js";
import { instance } from "./index.js";

instance.interceptors.request.use(
    (config) => {
        const token = getJwtFromCookie(); // Assuming you store the token in localStorage

        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const registrationRequest = (body: FieldsType): Promise<AuthData> => {
    return instance
        .post("/api/auth/local/register", {
            ...body,
        })
        .then((data) => data.data);
};
export const authMe = (): Promise<User> => {
    return instance.get("/api/users/me", {}).then((data) => data.data);
};
export const login = (body: LoginType): Promise<AuthData> => {
    return instance
        .post("/api/auth/local", {
            ...body,
        })
        .then((data) => data.data);
};
export const createProductReview = (
    body: UserReviewBody,
    productName: string
): Promise<{ id: number }> => {
    return instance
        .post(`/api/ratings/reviews/${encodeURIComponent(productName)}`, {
            ...body,
        })
        .then((data) => data.data)
        .catch((e) => e);
};
export const updateUserinfo = (body: any, id: number): Promise<User> => {
    return instance
        .put(`/api/users/${id}?populate=deep,2`, { ...body })
        .then((data) => data.data);
};

export const createUserOrder = (body: UserOrderBody) => {
    const bodyWrapper = {
        data: { ...body },
    };

    console.log(body);

    return instance.post(`/api/orders`, bodyWrapper).then((data) => data.data);
};
