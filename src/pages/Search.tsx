import { FC } from "react";
import GoodsList from "../components/goods/GoodsList.js";
import SearchPageWrapper from "../components/searchPage/SearchPageWrapper.js";

import { useSearchData } from "../hooks/useSearchData.js";

type SearchType = {};

const Search: FC<SearchType> = () => {
    const { data, isLoading, searchStr } = useSearchData();
    return (
        <SearchPageWrapper searchStr={searchStr}>
            <GoodsList
                isLoading={isLoading}
                listSx="grid grid-cols-4"
                listData={data?.data}
            />
        </SearchPageWrapper>
    );
};

export default Search;
