import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/query_request.js";
import { PRODUCT_CRUMBS } from "../constants/breadCrumbsArr.js";

export const useProductFetching = () => {
    let { id } = useParams() as { id: string };
    const { data, error, isLoading, refetch } = useQuery(
        ["product"],
        () => getProduct(+id),
        {
            enabled: false,
            cacheTime: 0,
        }
    );
    useEffect(() => {
        if (id) {
            refetch();
        }
    }, [id]);

    const crumbs = [
        ...PRODUCT_CRUMBS,
        {
            link:
                "/catalog/" +
                    data?.data.attributes.catalog.data.attributes.url_name ||
                "",
            name: data?.data.attributes.catalog.data.attributes.name || "",
        },
    ];

    return { data, isLoading, error, id, crumbs };
};
