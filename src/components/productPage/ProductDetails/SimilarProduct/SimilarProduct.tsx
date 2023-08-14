import { useQuery } from "@tanstack/react-query";
import { FC, useEffect } from "react";
import { getSimilarCatalog } from "../../../../api/query_request.js";
import SimilarProductItem from "./SimilarProductItem.js";
import SimilarProductLayout from "./SimilarProductLayout.js";

type SimilarProductType = {
    isLoading: boolean;
    productType?: string;
};

const SimilarProduct: FC<SimilarProductType> = ({ productType }) => {
    const { data, refetch, isSuccess } = useQuery(
        ["similar"],
        () => getSimilarCatalog(productType || ""),
        {
            enabled: false,
        }
    );
    useEffect(() => {
        if (productType) {
            refetch();
        }
    }, [productType]);

    return (
        <SimilarProductLayout>
            {data?.data.map((el) => (
                <SimilarProductItem
                    id={el.id}
                    isSuccess={isSuccess}
                    price={el.attributes.price}
                    img={el.attributes.images.data[0]}
                />
            ))}
        </SimilarProductLayout>
    );
};

export default SimilarProduct;
