import { useQuery } from "@tanstack/react-query";
import { FC, MouseEventHandler } from "react";
import { getAllCatalog } from "../../../../api/query_request.js";
import { useAppDispatch } from "../../../../hooks/reduxHooks.js";
import useClickOutside from "../../../../hooks/useClickOutside.js";
import {
    setCatalogStatus,
    toggleCatalogStatus,
} from "../../../../redux/slice/common.js";
import Typography from "../../../typography/Typography.js";
import Button from "../../../uikit/buttons/Button.js";

import MainLogo from "../mainLogo/MainLogo.js";
import MenuCatalog from "../menuCatalog/MenuCatalog.js";
import LoginInfo from "../navigationBar/UserInfo/LoginInfo.js";
import NavBar from "../navigationBar/NavBar.js";
import CatalogHeaderSvg from "./CatalogHeaderSvg.js";
import SearchWrapper from "./search/SearchWrapper.js";

type HeaderType = {
    authMeLoading: boolean;
};

const Header: FC<HeaderType> = ({ authMeLoading }) => {
    const { data, isLoading } = useQuery(["allCatalog"], () =>
        getAllCatalog(1)
    );

    const dispatch = useAppDispatch();
    const handlerToggleMenuStatus: MouseEventHandler<HTMLButtonElement> = (
        e
    ) => {
        dispatch(toggleCatalogStatus());
        e.stopPropagation();
    };

    const handlerCloseMenu = () => {
        dispatch(setCatalogStatus(false));
    };
    const menuCatalogRef = useClickOutside<HTMLDivElement>(handlerCloseMenu);
    return (
        <header className="headerShadow relative bg-white max-sm:sticky z-40 top-0 w-full">
            <div className="mxCenter py-2 flex gap-10 max-lg:gap-5 justify-between items-center max-md:items-end">
                <MainLogo />

                <div className="flex gap-4 max-lg:gap-2  w-full  items-center">
                    <Button
                        variant="secondary"
                        onClick={handlerToggleMenuStatus}
                        id="menu"
                        className="md:max-w-[140px] h-full w-full max-md:hidden max-[425px]:hidden"
                        leftElem={<CatalogHeaderSvg />}
                        size="mini"
                    >
                        <Typography tag="span" variant="S">
                            Каталог
                        </Typography>
                    </Button>
                    <Button
                        variant="secondary"
                        className="md:hidden max-sm:hidden h-full"
                        size="default"
                        id="menu"
                        onClick={handlerToggleMenuStatus}
                    >
                        <CatalogHeaderSvg />
                    </Button>
                    <SearchWrapper />
                </div>
                <nav className="  max-sm:hidden ">
                    <ul className=" justify-end flex items-end gap-6 max-lg:gap-4">
                        <NavBar />
                        <LoginInfo authMeLoading={authMeLoading} />
                    </ul>
                </nav>
            </div>
            <div ref={menuCatalogRef}>
                <MenuCatalog isLoading={isLoading} data={data?.data} />
            </div>
        </header>
    );
};

export default Header;
