import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { getArticles } from "../api/query_request.js";
import ArticlesWrapper from "../components/articlePage/articles/ArticlesWrapper.js";
import PageLayout from "../components/layouts/DefaultPageLayout/PageLayout.js";
import { ARTICLES_CRUMBS } from "../constants/breadCrumbsArr.js";

type ArticlesType = {};

const Articles: FC<ArticlesType> = () => {
    const { data, isLoading } = useQuery(["articles"], getArticles);
    return (
        <PageLayout
            title="Статті"
            breadCrumbsArr={ARTICLES_CRUMBS}
            smallDistance
        >
            <ArticlesWrapper isLoading={isLoading} data={data} />
        </PageLayout>
    );
};

export default Articles;
