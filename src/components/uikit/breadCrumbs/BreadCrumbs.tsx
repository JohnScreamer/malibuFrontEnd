import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import LinkMore from "../link/LinkMore.js";

type BreadCrumbsType = {
    lastName?: string;
    crumbsArr: Array<{ name: string; link: string }>;
    isLoading?: boolean;
};

const BreadCrumbs: FC<BreadCrumbsType> = ({
    lastName,
    crumbsArr,
    isLoading,
}) => {
    const linkArr: Array<{
        name: string;
        link: string;
    }> = lastName ? [...crumbsArr, { link: "", name: lastName }] : crumbsArr;
    const breadLink = linkArr.map(({ link, name }, i) => {
        if (i + 1 === linkArr.length) {
            return (
                <li
                    className="text-myGrey-mid text-[12px] max-[425px]:text-[10px]"
                    key={name}
                >
                    {name}
                </li>
            );
        }
        return (
            <li key={name}>
                <LinkMore small to={link} key={name}>
                    {name}
                </LinkMore>
            </li>
        );
    });
    return (
        <nav className="relative mb-7 max-md:mb-4">
            {isLoading ? (
                <div className="w-1/2">
                    <Skeleton className=" h-[40px]" />
                </div>
            ) : (
                <ul className="flex items-center relative right-4 max-md:right-0 flex-wrap">
                    {breadLink}
                </ul>
            )}
        </nav>
    );
};

export default BreadCrumbs;
