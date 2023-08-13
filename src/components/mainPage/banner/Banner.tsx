import { FC } from "react";
import Skeleton from "react-loading-skeleton";

type BannerType = {
    img: string;
    isLoading: boolean;
};

const Banner: FC<BannerType> = ({ img, isLoading }) => {
    return (
        <div className="w-full h-[200px] max-md:h-[160px] max-[420px]:h-[80px]">
            {isLoading ? (
                <Skeleton className="h-[200px] max-md:h-[160px] max-[420px]:h-[80px]" />
            ) : (
                <img
                    src={img}
                    alt="banner img"
                    className="object-cover  h-full w-full"
                />
            )}
        </div>
    );
};

export default Banner;
