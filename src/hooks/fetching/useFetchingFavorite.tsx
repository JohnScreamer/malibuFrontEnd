import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    DefaultFilterParamType,
    DEFAULT_CATALOG_FILTERS,
} from "../../constants/catalog.js";
import { getFilteredFavorite } from "../../api/query_request.js";
import { useQuery } from "@tanstack/react-query";
import { customQS } from "../../utils/customQS.js";
import QueryString from "qs";
import {
    fromSearchServerParam,
    SearchType,
    toValidSearchServerParam,
} from "../../utils/toValidSearchParam.js";

export const useFetchingFavorite = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const goToPosts = (obj: typeof searchParam) =>
        navigate({
            search: fromSearchServerParam(obj),
        });

    const searchParamsUrl = QueryString.parse(
        location.search.substring(1)
    ) as SearchType;
    const urlParam = toValidSearchServerParam(searchParamsUrl);
    const searchParam = {
        ...DEFAULT_CATALOG_FILTERS,
        ...urlParam,
    };
    const { data, isLoading, refetch } = useQuery(
        ["favorite"],
        () => getFilteredFavorite(customQS(searchParam)),
        {
            enabled: false,
            cacheTime: 0,
        }
    );

    useEffect(() => {
        refetch();
    }, [location.search]);

    const handlePagination = (num: number) => {
        goToPosts({ ...searchParam, "pagination[page]": num });
    };
    const handlerToDefaultParam = (param: DefaultFilterParamType) => {
        goToPosts({ ...param, "pagination[page]": 1 });
    };
    const setSearchParam = (obj: DefaultFilterParamType) => {
        goToPosts({ ...DEFAULT_CATALOG_FILTERS, ...obj });
    };
    return {
        searchParam,
        setSearchParam,
        data,
        isLoading,
        refetch,
        handlePagination,
        handlerToDefaultParam,
    };
};
