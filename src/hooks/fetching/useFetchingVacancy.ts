import { useQuery } from "@tanstack/react-query";
import { getVacancies } from "../../api/query_request.js";

export const useFetchingVacancy = () => {
    const { data, isLoading } = useQuery(["vacancy"], () => getVacancies());
    return { data, isLoading };
};
