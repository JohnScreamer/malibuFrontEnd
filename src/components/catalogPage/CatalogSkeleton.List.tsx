import Skeleton from "react-loading-skeleton";

export const CatalogSkeleton = () => {
    return (
        <>
            {Array(12)
                .fill(null)
                .map((el, i) => {
                    if (i + 1 === 1 || i + 1 === 10) {
                        return (
                            <li className="col-span-2 bg-red-300" key={i}>
                                <Skeleton className="w-full h-[200px] max-md:h-[140px] " />
                            </li>
                        );
                    }
                    return (
                        <li key={i}>
                            <Skeleton className="w-full h-[200px] max-md:h-[140px] " />
                        </li>
                    );
                })}
        </>
    );
};
