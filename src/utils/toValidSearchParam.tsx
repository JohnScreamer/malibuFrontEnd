import {
    DEFAULT_CATALOG_FILTERS,
    DefaultFilterParamType,
} from "../constants/catalog.js";
import { customQS } from "./customQS.js";
const default_search_param = {
    max_price: null,
    min_price: null,
    inStock: true,
    pagination: null,
    page: 1,
};
type SearchKeys = keyof typeof default_search_param;
type DEFAUL_FILTER_KEYS = keyof Omit<
    DefaultFilterParamType,
    "filters[catalog][url_name][$eq]"
>;
type FlterNameType = Record<SearchKeys, DEFAUL_FILTER_KEYS>;
type ReversFlterNameType = Record<DEFAUL_FILTER_KEYS, SearchKeys>;
export type SearchType = Record<SearchKeys, any>;
export const toValidSearchServerParam = (searchParams: SearchType) => {
    const keys = Object.keys(searchParams) as Array<SearchKeys>;

    return keys.reduce(
        (acc, el) => {
            const paramName = FILTER_NAME[el];
            const value = searchParams[el];
            if (!!value) {
                acc = { ...acc, [paramName]: value };
            }
            return acc;
        },

        { ...DEFAULT_CATALOG_FILTERS }
    );
};
export const fromSearchServerParam = (searchParams: DefaultFilterParamType) => {
    const keys = Object.keys(searchParams) as Array<DEFAUL_FILTER_KEYS>;

    return customQS(
        keys.reduce(
            (acc, el) => {
                const paramName = REVERS_FILTER_NAME[el];
                const value = searchParams[el];
                if (!!value && !!paramName) {
                    acc = { ...acc, [paramName]: value };
                }
                return acc;
            },

            {}
        )
    );
};
export const FILTER_NAME: FlterNameType = {
    max_price: "filters[price][$lt]",
    min_price: "filters[price][$gt]",
    inStock: "filters[in_stock][$eq]",
    pagination: "pagination[pageSize]",
    page: "pagination[page]",
};
export const REVERS_FILTER_NAME: ReversFlterNameType = {
    "filters[price][$lt]": "max_price",
    "filters[price][$gt]": "min_price",
    "filters[in_stock][$eq]": "inStock",
    "pagination[pageSize]": "pagination",
    "pagination[page]": "page",
};
