import { FC, ReactNode } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import useClickOutside from "../../../../hooks/useClickOutside.js";
import { ProductData } from "../../../../types/pages/homePage.type.js";
import { CustomSimilarStr } from "../../../../utils/CustomSimilarStr.js";

type SearchDropDownType = {
    data: null | Array<string>;
    search: ReactNode;
    searchStr: string;
    isDropDownOpen: boolean;
    closeDropDown: () => void;
    productsArr?: Array<ProductData>;
    isLoading: boolean;
};

const SearchDropDown: FC<SearchDropDownType> = ({
    data,
    search,
    searchStr,
    isDropDownOpen,
    closeDropDown,
    productsArr,
    isLoading,
}) => {
    const navRef = useClickOutside<HTMLElement>(closeDropDown);
    const isOpen = !data && isDropDownOpen;

    const productList = productsArr?.map((el, i) => {
        if (i > 3) return null;
        return (
            <li className="w-full" key={el.id} onClick={closeDropDown}>
                <Link
                    to={`/product/${el.id}`}
                    className="hover:text-orange w-full  block"
                >
                    <div className="flex gap-1 text-base tw-line-clamp-2 ">
                        {CustomSimilarStr(searchStr, el.attributes.name)}
                    </div>
                </Link>
            </li>
        );
    });
    const skeletonList = Array(3)
        .fill(null)
        .map((_, i) => {
            return <Skeleton key={i} className="w-full h-5" />;
        });
    return (
        <>
            <div className=" min-w-[170px]  w-full flex-grow relative">
                <div>{search}</div>
                <nav
                    className={`absolute top-3/4 p-2 pl-4 mt-[2px] z-40 boxShadowGreen rounded-b border-myGreen border border-t-0 bg-white w-full transition-all duration-300 ${
                        isOpen
                            ? "opacity-100 scale-y-100"
                            : "opacity-0 scale-y-0"
                    } transform origin-top`}
                    ref={navRef}
                >
                    <ul className="flex gap-[10px] flex-col">
                        {isLoading ? skeletonList : productList}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default SearchDropDown;
