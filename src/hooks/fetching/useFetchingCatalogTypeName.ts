import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllCatalog } from "../../api/query_request.js";

export const useFetchingCatalogTypeName = () => {
    let { id } = useParams() as { id: string };
    const [productType, setProductType] = useState("");
    const { data, isLoading: productTypeLoading } = useQuery(
        ["catalogData"],
        () => getAllCatalog(1)
    );

    useEffect(() => {
        const productTypeName = data?.data.reduce((acc, el) => {
            if (el.attributes.url_name === id) {
                acc = el.attributes.name;
            }
            return acc;
        }, "");
        setProductType(productTypeName || "");
    });

    return { productTypeLoading, productType };
};
