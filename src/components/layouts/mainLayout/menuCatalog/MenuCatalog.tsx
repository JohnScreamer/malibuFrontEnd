import { FC } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/reduxHooks.js";
import { useUserAuth } from "../../../../hooks/useUserAuth.js";
import { isHeaderMenuOpenSelector } from "../../../../redux/selectors/index.js";
import { setCatalogStatus } from "../../../../redux/slice/common.js";
import { logOut } from "../../../../redux/slice/userInfo.js";
import { CatalogItem } from "../../../../types/filterCatalog.type.js";
import { deleteJWTToken } from "../../../../utils/deleteJWTToken.js";
import Button from "../../../uikit/buttons/Button.js";
import MenuCatalogSVG from "./MenuCatalogSVG.js";
import UserInfo from "./UserInfo.js";

type MenuCatalogType = {
    data?: Array<CatalogItem>;
    isLoading: boolean;
};

const MenuCatalog: FC<MenuCatalogType> = ({ data }) => {
    const isOpen = useAppSelector(isHeaderMenuOpenSelector);
    const { isAuth } = useUserAuth();
    const dispatch = useDispatch();

    const handlerCloseMenu = () => {
        dispatch(setCatalogStatus(false));
    };
    const handlerLogOut = () => {
        dispatch(logOut());
        deleteJWTToken();
    };
    return (
        <div
            className={`  max-sm:overflow-y-auto  absolute max-sm:fixed h-full top-4/4 max-sm:top-0 z-40 w-full bg-white headerShadow transition-all duration-300 ${
                isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
            } transform origin-top  `}
        >
            <div className="sm:hidden p-5 flex items-center  mxCenter max-sm:px-5 justify-between ">
                <UserInfo />
                <Button
                    filledType="empty"
                    className="group"
                    onClick={handlerCloseMenu}
                >
                    <MenuCatalogSVG />
                </Button>
            </div>
            <div className="md:shadow-inner  md:shadow-black/20  ">
                <nav className="    py-3 bg-white max-[425px]:pb-[60px]">
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
                    {isAuth && (
                        <div className="mxCenter mt-4 sm:hidden">
                            <Button
                                className="w-full"
                                variant="red"
                                onClick={handlerLogOut}
                            >
                                Вийти
                            </Button>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    );
};

export default MenuCatalog;
