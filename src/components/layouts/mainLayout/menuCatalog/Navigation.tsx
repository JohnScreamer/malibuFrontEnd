import { FC } from "react";
import { useDispatch } from "react-redux";

import { useUserAuth } from "../../../../hooks/useUserAuth.js";

import { logOut } from "../../../../redux/slice/userInfo.js";
import { CatalogItem } from "../../../../types/filterCatalog.type.js";
import { deleteJWTToken } from "../../../../utils/deleteJWTToken.js";
import Button from "../../../uikit/buttons/Button.js";
import MenuCatalogList from "./MenuCatalogList.js";

type NavigationType = {
    data?: Array<CatalogItem>;
    isLoading: boolean;
};

const Navigation: FC<NavigationType> = ({ data, isLoading }) => {
    const dispatch = useDispatch();
    const { isAuth } = useUserAuth();
    const handlerLogOut = () => {
        dispatch(logOut());
        deleteJWTToken();
    };

    return (
        <>
            <nav className="    py-3 bg-white max-[425px]:pb-[60px]">
                <MenuCatalogList data={data} isLoading={isLoading} />
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
        </>
    );
};

export default Navigation;
