import { FC } from "react";
import CatalogInfo from "../components/catalogSearchPage/CatalogInfo.js";
import CatalogSearchWrapper from "../components/catalogSearchPage/CatalogSearchWrapper.js";
import FiltersWrapper from "../components/catalogSearchPage/FiltersWrapper.js";
import GoodsList from "../components/goods/GoodsList.js";
import Pagination from "../components/uikit/pagination/Pagination.js";
import { useFetchingFilterSearch } from "../hooks/fetching/useFetchingFilterSearch.js";

type CatalogSearchType = {};

const CatalogSearch: FC<CatalogSearchType> = () => {
    const {
        data,
        isLoading,
        searchParam,
        setSearchParam,
        refetch,
        handlePagination,
        handlerToDefaultParam,
    } = useFetchingFilterSearch();

    return (
        <>
            <CatalogSearchWrapper>
                <CatalogInfo />
                <FiltersWrapper
                    searchParam={searchParam}
                    refetch={refetch}
                    isLoading={isLoading}
                    setSearchParam={setSearchParam}
                    handlerToDefaultParam={handlerToDefaultParam}
                    pagination={
                        <Pagination
                            isLoading={isLoading}
                            currentPage={data?.meta.pagination.page}
                            pageSize={data?.meta.pagination.pageSize}
                            totalElem={data?.meta.pagination.total}
                            setPage={handlePagination}
                        />
                    }
                >
                    <GoodsList
                        isLoading={isLoading}
                        listData={data?.data}
                        skeletonNum={6}
                        listSx="grid-cols-3"
                    />
                </FiltersWrapper>
            </CatalogSearchWrapper>
        </>
    );
};

export default CatalogSearch;
