import { FC } from "react";

import Button from "../uikit/buttons/Button.js";
import Typography from "../typography/Typography.js";
import PriceFilter from "./Filters/PriceFilter.js";
import InStockFilter from "./Filters/InStockFilter.js";
import CatalogFilterMobileWrapper from "./CatalogFilterMobileWrapper.js";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks.js";
import { filtersStatusSelector } from "../../redux/selectors/index.js";
import { setFiltersStatus } from "../../redux/slice/common.js";
import { CatalogFiltersType } from "../../types/pages/catalogSearch.type.js";

const CatalogFilters: FC<CatalogFiltersType> = ({
    setSearchParam,
    searchParam,
    setCurrentSearchParam,
    children,
}) => {
    const handlerSearch = () => {
        setSearchParam({ ...searchParam, "pagination[page]": 1 });
    };

    const isFilterVisible = useAppSelector(filtersStatusSelector);
    const dispatch = useAppDispatch();
    const handlerCloseFilter = () => {
        dispatch(setFiltersStatus(false));
    };

    const filters = (
        <>
            <div className="p-[10px] bg-myGrey-light">
                <Typography variant="S" tag="span" bold>
                    Фільтри
                </Typography>
            </div>
            <div className="md:hidden">{children}</div>
            <PriceFilter
                searchParam={searchParam}
                setSearchParam={setCurrentSearchParam}
            />
            <InStockFilter
                searchParam={searchParam}
                setSearchParam={setCurrentSearchParam}
            />
            <div className="flex flex-col gap-4">
                <Button onClick={handlerSearch} full>
                    Примінити
                </Button>
                <div className="max-md:block hidden ">
                    <Button onClick={handlerCloseFilter} full variant="red">
                        Закрити фільтри
                    </Button>
                </div>
            </div>
        </>
    );

    const handlerCloseFilters = () => {
        dispatch(setFiltersStatus(false));
    };

    return (
        <>
            <div
                className={`flex  flex-col gap-10 max-md:hidden
          `}
            >
                {filters}
            </div>
            <div className="md:hidden">
                <CatalogFilterMobileWrapper
                    closeFilter={handlerCloseFilters}
                    isVisibleFilter={isFilterVisible}
                >
                    {filters}
                </CatalogFilterMobileWrapper>
            </div>
        </>
    );
};

export default CatalogFilters;
