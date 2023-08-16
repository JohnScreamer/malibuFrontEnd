import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import { useToDefaultFilters } from "../../../hooks/useToDefaultFilters.js";
import { FilterToDefaultBtnType } from "../../../types/pages/catalogSearch.type.js";
import Button from "../../uikit/buttons/Button.js";
import ToDefaultSvg from "../Filters/ToDefaultSvg.js";

const FilterToDefaultBtn: FC<FilterToDefaultBtnType> = ({
    searchParam,
    handlerToDefaultParam,
    setCurrentSearchParam,
    isLoading,
}) => {
    const { handlerAllToDefault, toDefaultBtnList } = useToDefaultFilters({
        handlerToDefaultParam,
        searchParam,
        setCurrentSearchParam,
    });
    if (isLoading) {
        return <Skeleton className="w-1/2 h-10" />;
    }

    return (
        <>
            <ul className="flex gap-4 flex-wrap">
                {toDefaultBtnList}

                <li>
                    <Button
                        variant="grey"
                        onClick={handlerAllToDefault}
                        disabled={!toDefaultBtnList.length}
                        className="ui_grey_disabled_secondary_active text-xs"
                        rightElem={
                            <ToDefaultSvg
                                isActive={!!toDefaultBtnList.length}
                            />
                        }
                    >
                        Очистити фільтри
                    </Button>
                </li>
            </ul>
        </>
    );
};

export default FilterToDefaultBtn;
