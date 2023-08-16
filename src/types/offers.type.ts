type ImageFormat = {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: null;
    width: number;
    height: number;
    size: number;
    url: string;
};

type ImageData = {
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
};

export type OfferType = {
    title: string;
    subTitle: string;
    bgColor: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    img: {
        data: ImageData[];
    };
};

type DataItem = {
    id: number;
    attributes: OfferType;
};

export type OffersType = {
    data: DataItem[];
};
