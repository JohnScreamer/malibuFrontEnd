import { FC } from "react";
import ArticleSkeleton from "../components/articlePage/ArticleSkeleton.js";
import ArticleWrapper from "../components/articlePage/ArticleWrapper.js";
import PageLayout from "../components/layouts/DefaultPageLayout/PageLayout.js";
import Empty from "../components/uikit/empty/Empty.js";
import { useFetchingArticle } from "../hooks/fetching/useFetchingArticle.js";
const arr = [
    { name: "Головна", link: "/" },
    { name: "Статті", link: "/article" },
];
type ArticleType = {};

const Article: FC<ArticleType> = () => {
    const { data, isLoading } = useFetchingArticle();

    if (isLoading) {
        return (
            <PageLayout
                breadCrumbsArr={arr}
                title={data?.data.attributes.tittle}
                isLoading={isLoading}
            >
                <ArticleSkeleton />
            </PageLayout>
        );
    }

    return (
        <PageLayout
            breadCrumbsArr={arr}
            title={data?.data.attributes.tittle}
            isLoading={isLoading}
            lastName={data?.data.attributes.tittle}
        >
            {data ? (
                <ArticleWrapper
                    img={data.data.attributes.img.data.attributes.url}
                    text={data.data.attributes.text}
                    subTitle={data.data.attributes.subTittle}
                />
            ) : (
                <Empty />
            )}
        </PageLayout>
    );
};

export default Article;
