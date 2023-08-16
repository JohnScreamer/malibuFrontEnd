import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { getAllCatalog } from "../api/query_request.js";
import CatalogWrapper from "../components/catalogPage/CatalogWrapper.js";
import PageLayout from "../components/layouts/DefaultPageLayout/PageLayout.js";
import { CATALOG_CRUMBS } from "../constants/breadCrumbsArr.js";

type CatalogType = {};

const Catalog: FC<CatalogType> = () => {
    const { data, isLoading } = useQuery(["catalog"], () => getAllCatalog(2));

    return (
        <>
            <PageLayout breadCrumbsArr={CATALOG_CRUMBS} title="Каталог">
                <CatalogWrapper data={data} isLoading={isLoading} />
            </PageLayout>
        </>
    );
};

export default Catalog;
