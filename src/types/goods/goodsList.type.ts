import { ProductData } from "../pages/homePage.type.js";

export type GoodsListType = {
    isLoading: boolean;
    linkName?: string;
    linkUrl?: string;
    categoriesName?: string;
    listData?: Array<ProductData> | null;
    skeletonNum?: number;
    listSx?: string;
};
