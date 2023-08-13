import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getArticle } from "../../api/query_request.js";

export const useFetchingArticle = () => {
    let { id } = useParams() as { id: string };
    const { data, isLoading } = useQuery(["article"], () => getArticle(+id));

    return { data, isLoading };
};
