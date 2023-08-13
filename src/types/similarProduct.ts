export interface Product {
    id: number;
    attributes: {
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        name: string;
        price: number;
        discount: number;

        in_stock: boolean;
        all_rating: number | null;
        images: {
            data: Image[];
        };
        catalog: {
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
        };
        feedbacks: {
            data: Feedback[];
        };
    };
}

interface Image {
    id: number;
    attributes: {
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        formats: {
            thumbnail: ImageFormat;
            small: ImageFormat;
            // Additional image formats can be added here if needed
        };
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string | null;
        provider: string;
        provider_metadata: any | null;
        createdAt: string;
        updatedAt: string;
    };
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

interface Feedback {
    id: number;
    attributes: {
        userRating: number;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        comment: string | null;
    };
}

interface PaginationMeta {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    };
}

export interface SimilarProductsResponse {
    data: Product[];
    meta: PaginationMeta;
}
