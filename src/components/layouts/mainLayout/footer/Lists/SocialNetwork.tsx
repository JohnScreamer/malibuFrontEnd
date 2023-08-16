import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { SOCIAL_NETWORK_SVG } from "../../../../../constants/socialNetworkSvg.js";
import { SocialLink } from "../../../../../types/footer.type.js";

type SocialNetworkType = {
    data?: Array<SocialLink>;
    isLoading?: boolean;
};
type SocialKey = keyof typeof SOCIAL_NETWORK_SVG;
const SocialNetwork: FC<SocialNetworkType> = ({ data, isLoading }) => {
    if (isLoading || !data) {
        return (
            <ul className="flex items-center max-md:gap-2 flex-wrap max-md:grid grid-cols-2 max-sm:flex   gap-4">
                {Array(4)
                    .fill(null)
                    .map((_, i) => {
                        return (
                            <li key={i} className="p-[2px]">
                                <Skeleton className="w-[20px] h-[20px] " />
                            </li>
                        );
                    })}
            </ul>
        );
    }
    return (
        <>
            <ul className="flex items-center max-md:gap-2 flex-wrap max-md:grid grid-cols-2 max-sm:flex   gap-4">
                {data.map((el, i) => {
                    return (
                        <li key={i} className="p-[2px]">
                            <Link to={el.attributes.url} target="_blank">
                                {
                                    SOCIAL_NETWORK_SVG[
                                        el.attributes.iconName as SocialKey
                                    ]
                                }
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default SocialNetwork;
