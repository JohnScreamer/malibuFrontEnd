import { useQuery } from "@tanstack/react-query";
import { getFilteredSearch } from "../../api/query_request.js";

export const useDiscountFetching = () => {
    const { data, error, isLoading } = useQuery(["discount"], () =>
        getFilteredSearch("&filters[discount][$gt]=1&pagination[pageSize]=4")
    );
    return {
        discountData: data,
        discountError: error,
        discountLoading: isLoading,
    };
};
