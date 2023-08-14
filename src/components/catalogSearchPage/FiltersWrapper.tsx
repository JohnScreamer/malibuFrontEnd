import { FC, useState } from "react";
import { DefaultFilterParamType } from "../../constants/catalog.js";
import { FiltersWrapperType } from "../../types/pages/catalogSearch.type.js";
import CatalogFilters from "./CatalogFilters.js";
import OpenFilterBtn from "./OpenFilterBtn.js";
import FilterToDefaultBtn from "./ToDefault/FilterToDefaultBtn.js";
const FiltersWrapper: FC<FiltersWrapperType> = ({
    children,
    refetch,
    searchParam,
    setSearchParam,
    pagination,
    isLoading,
    handlerToDefaultParam,
}) => {
    const [currentSearchParam, setCurrentSearchParam] =
        useState<DefaultFilterParamType>(searchParam);

    const toDefault = (
        <FilterToDefaultBtn
            searchParam={searchParam}
            setCurrentSearchParam={setCurrentSearchParam}
            setSearchParam={setSearchParam}
            handlerToDefaultParam={handlerToDefaultParam}
            isLoading={isLoading}
        />
    );

    return (
        <>
            <div>
                <OpenFilterBtn />
            </div>
            <div className="grid grid-cols-12 gap-10 max-md:flex max-md:flex-col">
                <div className=" w-full col-span-3  ">
                    <CatalogFilters
                        searchParam={currentSearchParam}
                        setSearchParam={setSearchParam}
                        setCurrentSearchParam={setCurrentSearchParam}
                        refetch={refetch}
                    >
                        {toDefault}
                    </CatalogFilters>
                </div>
                <div className="col-span-9 flex flex-col gap-10 max-md:gap-8 max-[425px]:gap-4 ">
                    <div className="max-md:hidden">{toDefault}</div>
                    <div className="w-full">{children}</div>
                    <div className="center">{pagination}</div>
                </div>
            </div>
        </>
    );
};

export default FiltersWrapper;
