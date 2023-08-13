import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import Typography from "../typography/Typography.js";

type ArticleSkeletonType = {};

const ArticleSkeleton: FC<ArticleSkeletonType> = () => {
    return (
        <article className="flex gap-4 flex-col">
            <div className="flex gap-4 max-md:flex-col">
                <div className="w-full flex flex-col gap-6">
                    <Typography
                        variant="M"
                        tag="title"
                        bold
                        className="max-md:text-2xl"
                    >
                        <Skeleton />
                    </Typography>
                    <Typography
                        className="text-myGrey-mid max-md:text-base"
                        tag="span"
                        variant="S"
                    >
                        <Skeleton />
                    </Typography>
                </div>
                <div className="min-h-[250px] w-full">
                    <Skeleton className="w-full h-full" />
                </div>
            </div>
            <Typography tag="text" variant="M" className="max-md:text-base">
                <Skeleton className="h-[400px]" />
            </Typography>
        </article>
    );
};

export default ArticleSkeleton;
