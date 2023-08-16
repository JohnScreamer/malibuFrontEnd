import { OffersType } from "../offers.type.js";

export type DescribeType = {
    [key: string]: string | number | string[] | null;
} | null;

export interface ProductAttributes {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    name: string;
    price: number;
    discount: number;
    describe: DescribeType;
    in_stock: boolean;
    all_rating: number | null;
    images: ImagesData;
    catalog: Catalog;
}
interface Catalog {
    data: {
        id: number;
        attributes: {
            name: string;
            url_name: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
        };
    };
}

export interface ProductData {
    id: number;
    attributes: ProductAttributes;
}

interface TopListData {
    id: number;
    name: string;
    products: {
        data: ProductData[];
    };
}

interface BottomListData {
    id: number;
    name: string;
    products: {
        data: ProductData[];
    };
}

interface HomeData {
    id: number;
    attributes: {
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        home_main_banner: {
            id: number;
            link: string;
            img: {
                data: {
                    id: number;
                    attributes: {
                        name: string;
                        alternativeText: string | null;
                        caption: string | null;
                        width: number;
                        height: number;
                        formats: {
                            thumbnail: {
                                name: string;
                                hash: string;
                                ext: string;
                                mime: string;
                                path: string | null;
                                width: number;
                                height: number;
                                size: number;
                                url: string;
                            };
                            large: {
                                name: string;
                                hash: string;
                                ext: string;
                                mime: string;
                                path: string | null;
                                width: number;
                                height: number;
                                size: number;
                                url: string;
                            };
                            medium: {
                                name: string;
                                hash: string;
                                ext: string;
                                mime: string;
                                path: string | null;
                                width: number;
                                height: number;
                                size: number;
                                url: string;
                            };
                            small: {
                                name: string;
                                hash: string;
                                ext: string;
                                mime: string;
                                path: string | null;
                                width: number;
                                height: number;
                                size: number;
                                url: string;
                            };
                        };
                        hash: string;
                        ext: string;
                        mime: string;
                        size: number;
                        url: string;
                        previewUrl: string | null;
                        provider: string;
                        provider_metadata: string | null;
                        createdAt: string;
                        updatedAt: string;
                    };
                };
            };
        };
        top_list: TopListData;
        middle_list: TopListData;
        bottom_list: BottomListData;
        articles: Articles;
        special_offers: OffersType;
    };
}

export interface HomePageResponse {
    data: HomeData;
    meta: any;
}
interface ImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    url: string;
}

interface ImageAttributes {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        thumbnail: ImageFormat;
        small: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
}

export interface ImageDataType {
    id: number;
    attributes: ImageAttributes;
}

export interface ImagesData {
    data: ImageDataType[];
}
///////
export interface Articles {
    data: ArticleData[];
}

export interface ArticleData {
    id: number;
    attributes: Attributes;
}

export interface Attributes {
    tittle: string;
    subTittle: string;
    text: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    img: Img;
}

export interface Img {
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
    small: Small;
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

export interface Attributes4 {
    tittle: string;
    subTittle: string;
    text: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}
