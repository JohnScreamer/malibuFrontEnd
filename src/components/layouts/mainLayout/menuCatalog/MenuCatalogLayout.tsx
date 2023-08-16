import { FC, ReactNode } from "react";
import { useAppSelector } from "../../../../hooks/reduxHooks.js";
import { isHeaderMenuOpenSelector } from "../../../../redux/selectors/index.js";
import UserInfo from "./UserInfo.js";

type MenuCatalogLayoutType = {
    navigation: ReactNode;
    catalogBtn: ReactNode;
};

const MenuCatalogLayout: FC<MenuCatalogLayoutType> = ({
    navigation,
    catalogBtn,
}) => {
    const isOpen = useAppSelector(isHeaderMenuOpenSelector);
    return (
        <>
            <div
                className={`  max-sm:overflow-y-auto  absolute max-sm:fixed h-full top-4/4 max-sm:top-0 z-40 w-full bg-white headerShadow transition-all duration-300 ${
                    isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                } transform origin-top  `}
            >
                <div className="sm:hidden p-5 flex items-center  mxCenter max-sm:px-5 justify-between ">
                    <UserInfo />
                    {catalogBtn}
                </div>
                <div className="md:shadow-inner  md:shadow-black/20  ">
                    {navigation}
                </div>
            </div>
        </>
    );
};

export default MenuCatalogLayout;
