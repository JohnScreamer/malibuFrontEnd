import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

type BannerType = {
    img: string;
    isLoading: boolean;
    url?: string;
};

const Banner: FC<BannerType> = ({ img, isLoading, url }) => {
    return (
        <Link
            to={url || "/"}
            className="w-full block h-[200px] max-md:h-[160px] max-[420px]:h-[80px]"
        >
            {isLoading ? (
                <Skeleton className="h-[200px] max-md:h-[160px] max-[420px]:h-[80px]" />
            ) : (
                <img
                    src={img}
                    alt="banner img"
                    className="object-cover  h-full w-full"
                />
            )}
        </Link>
    );
};

export default Banner;
