import { useQuery } from "@tanstack/react-query";
import { getContactPage } from "../../api/query_request.js";

export const useFetchingContactPage = () => {
    const { data, isLoading } = useQuery(["contactPage"], () =>
        getContactPage()
    );
    return { data, isLoading };
};
