import { useQuery } from "@tanstack/react-query";
import { getFilteredSearch, getProduct } from "../../api/query_request.js";

export const useFetchingLowPrice = () => {
    const { data, error, isLoading, refetch } = useQuery(["lowPrice"], () =>
        getFilteredSearch("&sort[0]=price&pagination[pageSize]=4")
    );

    return {
        lowPriceData: data,
        lowPriceError: error,
        lowPriceLoading: isLoading,
    };
};
