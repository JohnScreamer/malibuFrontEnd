import { useQuery } from "@tanstack/react-query";
import QueryString from "qs";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchProduct } from "../api/query_request.js";
type DefaultPram = {
    filterStr: string;
    page: number;
};
const defaultParam: DefaultPram = {
    filterStr: "",
    page: 1,
};
export const useSearchData = () => {
    const location = useLocation();
    const searchParams = QueryString.parse(
        location.search.substring(1)
    ) as unknown as DefaultPram;
    const [param, setParam] = useState({ ...defaultParam, ...searchParams });

    const { data, isLoading, refetch } = useQuery(
        ["searchData"],
        () =>
            searchProduct(
                param.filterStr.charAt(0).toUpperCase() +
                    param.filterStr.slice(1)
            ),
        {
            enabled: false,
        }
    );
    console.log(location.search.substring(1));

    useEffect(() => {
        setParam((prev) => ({ ...prev, ...searchParams }));
    }, [location.search]);
    useEffect(() => {
        refetch();
    }, [param.filterStr, param.page]);
    useEffect(() => {
        refetch();
    }, []);

    return { data, isLoading, refetch, searchStr: param.filterStr };
};
