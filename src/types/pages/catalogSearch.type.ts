import {
    RefetchOptions,
    RefetchQueryFilters,
    QueryObserverResult,
} from "@tanstack/react-query";
import { ReactNode } from "react";
import { DefaultFilterParamType } from "../../constants/catalog.js";
import { CatalogSearch } from "../filterCatalog.type.js";

export type FiltersWrapperType = {
    children: ReactNode;
    refetch: <TPageData>(
        options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
    ) => Promise<QueryObserverResult<CatalogSearch, unknown>>;
    setSearchParam: any;
    searchParam: DefaultFilterParamType;
    pagination: ReactNode;
    handlerToDefaultParam: (param: DefaultFilterParamType) => void;
    isLoading: boolean;
};
export type CatalogFiltersType = Omit<
    FiltersWrapperType,
    "isLoading" | "pagination" | "handlerToDefaultParam"
> & {
    setCurrentSearchParam: React.Dispatch<
        React.SetStateAction<DefaultFilterParamType>
    >;
};
export type FilterToDefaultBtnType = {
    setSearchParam: any;
    searchParam: DefaultFilterParamType;
    handlerToDefaultParam: (param: DefaultFilterParamType) => void;
    setCurrentSearchParam: React.Dispatch<
        React.SetStateAction<DefaultFilterParamType>
    >;
    isLoading: boolean;
};
export type FiltersKeys = keyof DefaultFilterParamType;
