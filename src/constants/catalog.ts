export type DefaultFilterParamType = {
    "filters[price][$lt]": null | number;
    "filters[price][$gt]": null | number;
    "filters[in_stock][$eq]": boolean;
    "filters[catalog][url_name][$eq]": string;
    "pagination[pageSize]": number;
    "pagination[page]": number;
};
export const DEFAULT_CATALOG_FILTERS: DefaultFilterParamType = {
    "filters[price][$lt]": 5000,
    "filters[price][$gt]": 1,
    "filters[in_stock][$eq]": false,
    "filters[catalog][url_name][$eq]": "",
    "pagination[pageSize]": 6,
    "pagination[page]": 1,
};

export const FILTERS_CLEAR_PROPS = [
    { name: "filters[price][$lt]", defaultValue: 5000, text: "Ціна до" },
    { name: "filters[price][$gt]", defaultValue: 1, text: "Ціна від" },
    {
        name: "filters[in_stock][$eq]",
        defaultValue: false,
        text: "В наявності",
    },
];
