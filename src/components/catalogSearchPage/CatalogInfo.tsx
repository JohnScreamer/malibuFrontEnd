import { FC, memo } from "react";
import Skeleton from "react-loading-skeleton";
import { useFetchingCatalogTypeName } from "../../hooks/fetching/useFetchingCatalogTypeName.js";

import Typography from "../typography/Typography.js";
import BreadCrumbs from "../uikit/breadCrumbs/BreadCrumbs.js";

type CatalogInfoType = {};
const arr = [
    { name: "Головна", link: "/" },
    { name: "Каталог", link: "/catalog/" },
];
const CatalogInfo: FC<CatalogInfoType> = () => {
    const { productType, productTypeLoading } = useFetchingCatalogTypeName();

    return (
        <>
            <div>
                <BreadCrumbs
                    crumbsArr={arr}
                    isLoading={productTypeLoading || !productType}
                    lastName={productType}
                />
                <Typography
                    variant="L"
                    bold
                    tag="title"
                    className="mb-[60px] max-md:text-4xl"
                >
                    {productTypeLoading || !productType ? (
                        <div className="w-1/3">
                            <Skeleton />
                        </div>
                    ) : (
                        productType
                    )}
                </Typography>
            </div>
        </>
    );
};

export default memo(CatalogInfo);
