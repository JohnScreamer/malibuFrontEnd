import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
    DefaultFilterParamType,
    DEFAULT_CATALOG_FILTERS,
} from "../../constants/catalog.js";
import { getFilteredSearch } from "../../api/query_request.js";
import { useQuery } from "@tanstack/react-query";
import { customQS } from "../../utils/customQS.js";
import QueryString from "qs";
import {
    fromSearchServerParam,
    SearchType,
    toValidSearchServerParam,
} from "../../utils/toValidSearchParam.js";

const setProductType = (type: string, filter: DefaultFilterParamType) => ({
    ...filter,
    [`filters[catalog][url_name][$eq]`]: type,
});

export const useFetchingFilterSearch = () => {
    let { id } = useParams() as { id: string };
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
    const searchParam = setProductType(id, {
        ...DEFAULT_CATALOG_FILTERS,
        ...urlParam,
    });
    const { data, isLoading, refetch } = useQuery(
        ["searchCatalog"],
        () => getFilteredSearch(customQS(searchParam)),
        {
            enabled: false,
            cacheTime: 0,
        }
    );

    useEffect(() => {
        refetch();
    }, [location.search]);

    useEffect(() => {
        goToPosts({
            ...searchParam,
            "filters[catalog][url_name][$eq]": id,
            "pagination[page]": 1,
        });
        refetch();
    }, [id]);

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
