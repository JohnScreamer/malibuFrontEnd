import { FC } from "react";
import { ArticleData } from "../../../types/pages/homePage.type.js";
import ListLayout from "../../layouts/ListLayout.js";
import { ArticleSkeletonList } from "./ArticleSkeletonList.js";
import ArticleWrapper from "./ArticleWrapper.js";

type ArticleListType = {
    articles?: Array<ArticleData>;
    moreLink?: string;
    listSx?: string;
    isLoading?: boolean;
};

const ArticleList: FC<ArticleListType> = (props) => {
    const { articles, isLoading, listSx, moreLink } = props;
    return (
        <ListLayout
            listSx=""
            listName="Статті"
            moreBtnLink="/article"
            moreBtnName="Всі статті"
            isLoading={isLoading}
        >
            {isLoading ? (
                <>
                    <ArticleSkeletonList />
                </>
            ) : (
                articles?.map((el, i) => (
                    <li key={el.id} className="h-full">
                        <ArticleWrapper
                            title={el.attributes.tittle}
                            text={el.attributes.subTittle}
                            date={el.attributes.createdAt}
                            img={el.attributes.img.data.attributes.url}
                            id={el.id}
                        />
                    </li>
                ))
            )}
        </ListLayout>
    );
};

export default ArticleList;
