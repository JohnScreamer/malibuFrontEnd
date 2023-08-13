import { ProductData } from "./pages/homePage.type.js";

export interface CatalogSearch {
    data: ProductData[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}
export interface GetAllCatalogResponse {
    data: CatalogItem[];
    meta: Meta;
}

export interface CatalogItem {
    id: number;
    attributes: Attributes;
}

export interface Attributes {
    name: string;
    url_name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: Image;
    products: Products;
}

export interface Image {
    data: Data;
}

export interface Data {
    id: number;
    attributes: Attributes2;
}

export interface Attributes2 {
    name: string;
    alternativeText: any;
    caption: any;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: any;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
}

export interface Formats {
    thumbnail: Thumbnail;
    large?: Large;
    medium?: Medium;
    small?: Small;
}

export interface Thumbnail {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: any;
    width: number;
    height: number;
    size: number;
    url: string;
}

export interface Large {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: any;
    width: number;
    height: number;
    size: number;
    url: string;
}

export interface Medium {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: any;
    width: number;
    height: number;
    size: number;
    url: string;
}

export interface Small {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: any;
    width: number;
    height: number;
    size: number;
    url: string;
}

export interface Products {
    data: Daum2[];
}

export interface Daum2 {
    id: number;
    attributes: Attributes3;
}

export interface Attributes3 {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    name: string;
    price: number;
    discount: number;
    describe: any;
    in_stock: boolean;
    all_rating: any;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}
