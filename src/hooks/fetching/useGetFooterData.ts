import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { getFooter } from "../../api/query_request.js";
export const useGetFooterData = () => {
    const { data, error, isLoading, refetch } = useQuery(
        ["footerData"],
        () => getFooter(),
        { enabled: false }
    );
    useEffect(() => {
        refetch();
    }, []);
    if (error) {
        toast.error("Не можливо загрузити данні.");
    }

    return {
        data,
        isLoading,
    };
};
