interface ImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: null;
    width: number;
    height: number;
    size: number;
    url: string;
}

interface ImageData {
    id: number;
    attributes: {
        name: string;
        alternativeText: null;
        caption: null;
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
        previewUrl: null;
        provider: string;
        provider_metadata: null;
        createdAt: string;
        updatedAt: string;
    };
}

interface HomePageData {
    id: number;
    attributes: {
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}

interface ArticleData {
    id: number;
    attributes: {
        tittle: string;
        subTittle: string;
        text: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        img: {
            data: ImageData;
        };
        home_page: {
            data: HomePageData;
        };
    };
}

export interface ArticleResponse {
    data: ArticleData;
    meta: {};
}
export interface ArticlesResponse {
    data: ArticleData[];
    meta: {};
}
