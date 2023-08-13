import { HeaderResponse } from "../types/header.types.js";
import { instance } from "./index.js";
import { HomePageResponse } from "../types/pages/homePage.type.js";
import { ProductResponse } from "../types/product.type.js";
import { SimilarProductsResponse } from "../types/similarProduct.js";
import {
    CatalogSearch,
    GetAllCatalogResponse,
} from "../types/filterCatalog.type.js";
import { ProductRatingResponse, ReviewBody } from "../types/rating/index.js";
import { getJwtFromCookie } from "../utils/JWT/getJWTCookie.js";
import { OrderResponse } from "../types/orders.type.js";
import { ArticleResponse, ArticlesResponse } from "../types/article.type.js";
instance.interceptors.request.use(
    (config) => {
        const token = getJwtFromCookie();

        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export const getHeader = (): Promise<HeaderResponse> =>
    instance.get("/api/headers/1?populate=deep").then((data) => data.data);
export const getHomePage = (): Promise<HomePageResponse> => {
    return instance
        .get("/api/home-pages/5?populate=deep")
        .then((data) => data.data);
};
export const getProduct = (id: number): Promise<ProductResponse> => {
    return instance
        .get(`/api/products/${id}?populate=deep,2`)
        .then((data) => data.data);
};

export const getSimilarCatalog = (
    name: string
): Promise<SimilarProductsResponse> => {
    return instance
        .get(
            `/api/products?populate=*&filters[catalog][url_name][$eq]=${name}&pagination[pageSize]=4`
        )
        .then((data) => data.data);
};

export const getFilteredSearch = (param: string): Promise<CatalogSearch> => {
    return instance
        .get(`/api/products/?populate=deep,2&${param}`)
        .then((data) => data.data);
};
export const getAllCatalog = (deep: number): Promise<GetAllCatalogResponse> => {
    return instance
        .get(`/api/catalogs/?populate=deep,${deep}`)
        .then((data) => data.data);
};

export const searchProduct = (name: string): Promise<CatalogSearch> => {
    return instance
        .get(`/api/products/?populate=deep,2&filters[name][$containsi]=${name}`)
        .then((data) => data.data);
};

export const getFilteredFavorite = (param: string): Promise<CatalogSearch> => {
    return instance
        .get(`/api/products/?populate=deep,2&${param}`)
        .then((data) => data.data);
};

export const getProductRating = (
    productName: string
): Promise<ProductRatingResponse> => {
    return instance
        .get(`/api/ratings/reviews/${encodeURIComponent(productName)}/stats`)
        .then((data) => data.data)
        .catch(() => ({ averageScore: 0, reviewsCount: 0 }));
};

export const getProductReviews = (productName: string): Promise<ReviewBody> => {
    return instance
        .get(`/api/ratings/reviews/${encodeURIComponent(productName)}`)
        .then((data) => data.data);
};

export const getUserOrders = ({
    userId,
}: {
    userId: number | null;
}): Promise<OrderResponse> | null => {
    if (!userId) return null;
    return instance
        .get(`/api/orders?filters[userId][$eq]=${userId}`)
        .then((data) => data.data);
};

export const getArticle = (id: number): Promise<ArticleResponse> => {
    return instance
        .get(`/api/articles/${id}?populate=deep,2`)
        .then((data) => data.data);
};
export const getArticles = (): Promise<ArticlesResponse> => {
    return instance
        .get(`/api/articles?populate=deep,2`)
        .then((data) => data.data);
};
