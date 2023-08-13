import { FC } from "react";
import { ArticlesResponse } from "../../../types/article.type.js";
import { ArticleSkeletonList } from "../../mainPage/article/ArticleSkeletonList.js";
import ArticleWrapper from "../../mainPage/article/ArticleWrapper.js";

type ArticlesWrapperType = {
    data?: ArticlesResponse;
    isLoading: boolean;
};

const ArticlesWrapper: FC<ArticlesWrapperType> = ({ data, isLoading }) => {
    return (
        <ul
            className="grid  gap-10 max-lg:gap-4 max-lg:grid-cols-2 grid-cols-3 
        max-sm:grid-cols-1 max-[425px]:gap-2 "
        >
            {isLoading ? (
                <ArticleSkeletonList />
            ) : (
                data?.data.map((el) => (
                    <ArticleWrapper
                        id={el.id}
                        title={el.attributes.tittle}
                        text={el.attributes.subTittle}
                        img={el.attributes.img.data.attributes.url}
                        date={el.attributes.createdAt}
                    />
                ))
            )}
        </ul>
    );
};

export default ArticlesWrapper;
