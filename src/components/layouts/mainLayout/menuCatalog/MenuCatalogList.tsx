import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCatalogStatus } from "../../../../redux/slice/common.js";
import { CatalogItem } from "../../../../types/filterCatalog.type.js";

type MenuCatalogListType = {
    data?: Array<CatalogItem>;
    isLoading: boolean;
};

const MenuCatalogList: FC<MenuCatalogListType> = ({ data, isLoading }) => {
    const dispatch = useDispatch();
    const handlerCloseMenu = () => {
        dispatch(setCatalogStatus(false));
    };
    if (isLoading) {
        return (
            <ul className="   grid grid-cols-4 w-full max-md:grid-cols-2 max-[425px]:grid-cols-1  mxCenter max-sm:px-5    gap-6 max-sm:gap-4">
                {Array(10)
                    .fill(null)
                    ?.map((_, i) => (
                        <Skeleton className="font-bold max-sm:font-normal" />
                    ))}
            </ul>
        );
    }
    return (
        <>
            <ul className="   grid grid-cols-4 w-full max-md:grid-cols-2 max-[425px]:grid-cols-1  mxCenter max-sm:px-5    gap-6 max-sm:gap-4">
                {data?.map((el, i) => (
                    <li key={el.id}>
                        <Link
                            to={`/catalog/${el.attributes.url_name}`}
                            key={i}
                            onClick={handlerCloseMenu}
                            className="font-bold max-sm:font-normal"
                        >
                            {el.attributes.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MenuCatalogList;
