import { FC } from "react";
import { useDispatch } from "react-redux";
import { setCatalogStatus } from "../../../../redux/slice/common.js";
import { CatalogItem } from "../../../../types/filterCatalog.type.js";
import Button from "../../../uikit/buttons/Button.js";
import MenuCatalogLayout from "./MenuCatalogLayout.js";
import MenuCatalogSVG from "./MenuCatalogSVG.js";
import Navigation from "./Navigation.js";

type MenuCatalogType = {
    data?: Array<CatalogItem>;
    isLoading: boolean;
};

const MenuCatalog: FC<MenuCatalogType> = ({ data, isLoading }) => {
    const dispatch = useDispatch();

    const handlerCloseMenu = () => {
        dispatch(setCatalogStatus(false));
    };

    return (
        <MenuCatalogLayout
            navigation={<Navigation data={data} isLoading={isLoading} />}
            catalogBtn={
                <Button
                    filledType="empty"
                    className="group"
                    onClick={handlerCloseMenu}
                >
                    <MenuCatalogSVG />
                </Button>
            }
        />
    );
};

export default MenuCatalog;
