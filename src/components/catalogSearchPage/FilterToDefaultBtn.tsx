import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import {
    DEFAULT_CATALOG_FILTERS,
    FILTERS_CLEAR_PROPS,
} from "../../constants/catalog.js";
import {
    FiltersKeys,
    FilterToDefaultBtnType,
} from "../../types/pages/catalogSearch.type.js";
import { isStringOrNumber } from "../../utils/isStringOrNumber.js";
import Button from "../uikit/buttons/Button.js";
import ToDefaultSvg from "./Filters/ToDefaultSvg.js";

const FilterToDefaultBtn: FC<FilterToDefaultBtnType> = ({
    searchParam,
    handlerToDefaultParam,
    setCurrentSearchParam,
    isLoading,
}) => {
    const AllToDefaultData = {
        ...DEFAULT_CATALOG_FILTERS,
        "filters[catalog][url_name][$eq]":
            searchParam["filters[catalog][url_name][$eq]"],
    };

    const handlerToDefault = (name: FiltersKeys, param: any) => {
        const data = { ...searchParam, [name]: param };
        handlerToDefaultParam(data);
        setCurrentSearchParam(data);
    };
    const handlerAllToDefault = () => {
        handlerToDefaultParam(AllToDefaultData);
        setCurrentSearchParam(AllToDefaultData);
    };

    if (isLoading) {
        return <Skeleton className="w-1/2 h-10" />;
    }
    let btnList = FILTERS_CLEAR_PROPS.map(({ name, defaultValue, text }) => {
        const currentValue = searchParam[name as FiltersKeys];

        if (currentValue?.toString() === defaultValue.toString()) {
            return null;
        }

        return (
            <li key={name}>
                <Button
                    variant="secondary"
                    size="mini"
                    className="text-xs"
                    rightElem={<ToDefaultSvg isActive={true} />}
                    onClick={() =>
                        handlerToDefault(name as FiltersKeys, defaultValue)
                    }
                >{`${text} ${isStringOrNumber(currentValue)}`}</Button>
            </li>
        );
    }).filter((el) => null !== el);

    return (
        <>
            <ul className="flex gap-4 flex-wrap">
                {btnList}

                <li>
                    <Button
                        variant="grey"
                        onClick={handlerAllToDefault}
                        disabled={!btnList.length}
                        className="ui_grey_disabled_secondary_active text-xs"
                        rightElem={<ToDefaultSvg isActive={!!btnList.length} />}
                    >
                        Очистити фільтри
                    </Button>
                </li>
            </ul>
        </>
    );
};

export default FilterToDefaultBtn;
