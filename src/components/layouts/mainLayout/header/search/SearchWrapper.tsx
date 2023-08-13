import { FC } from "react";
import { useDropDownSearch } from "../../../../../hooks/useDropDownSearch.js";
import Field from "../../../../uikit/field/Field.js";
import SearchDropDown from "../../../../uikit/field/searchDropDown/SearchDropDown.js";
import SearchSvg from "../SearchSvg.js";

type SearchWrapperType = {};

const SearchWrapper: FC<SearchWrapperType> = () => {
    const {
        data,
        goToSearch,
        handlerDropDownClose,
        handlerSetSearchInput,
        isLoading,
        state,
        isDropDownOpen,
    } = useDropDownSearch();
    return (
        <>
            <SearchDropDown
                data={null}
                closeDropDown={handlerDropDownClose}
                isDropDownOpen={isDropDownOpen}
                searchStr={state}
                productsArr={data?.data}
                isLoading={isLoading}
                search={
                    <Field
                        value={state}
                        placeholder="Найти товар"
                        className="w-full "
                        sizeType="small"
                        onChange={handlerSetSearchInput}
                        rightElem={<SearchSvg onClick={goToSearch} />}
                    />
                }
            />
        </>
    );
};

export default SearchWrapper;
