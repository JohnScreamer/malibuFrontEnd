import { FC } from "react";
import CatalogFilterMobileWrapper from "./CatalogFilterMobileWrapper.js";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks.js";
import { filtersStatusSelector } from "../../redux/selectors/index.js";
import { setFiltersStatus } from "../../redux/slice/common.js";
import { CatalogFiltersType } from "../../types/pages/catalogSearch.type.js";
import FilterWrapper from "./Filters/FilterWrapper.js";

const CatalogFilters: FC<CatalogFiltersType> = ({
    setSearchParam,
    searchParam,
    setCurrentSearchParam,
    children,
}) => {
    const isFilterVisible = useAppSelector(filtersStatusSelector);
    const dispatch = useAppDispatch();

    const handlerCloseFilters = () => {
        dispatch(setFiltersStatus(false));
    };
    const filters = (
        <FilterWrapper
            handlerCloseFilters={handlerCloseFilters}
            setSearchParam={setSearchParam}
            searchParam={searchParam}
            setCurrentSearchParam={setCurrentSearchParam}
        >
            {children}
        </FilterWrapper>
    );

    return (
        <>
            <div className={`flex  flex-col gap-10 max-md:hidden`}>
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
