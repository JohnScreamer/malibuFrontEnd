import Skeleton from "react-loading-skeleton";

export const ArticleSkeletonList = () => {
    return (
        <>
            {Array(3)
                .fill(null)
                .map((_, i) => (
                    <Skeleton key={i} className="w-full h-[300px]" />
                ))}
        </>
    );
};
