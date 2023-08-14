import { Dispatch, FC, ReactNode } from "react";
import { DefaultFilterParamType } from "../../../constants/catalog.js";
import Typography from "../../typography/Typography.js";
import Button from "../../uikit/buttons/Button.js";
import InStockFilter from "./InStockFilter.js";
import PriceFilter from "./PriceFilter.js";

type FilterWrapperType = {
    handlerCloseFilters: () => void;
    setSearchParam: any;
    searchParam: DefaultFilterParamType;
    children: ReactNode;
    setCurrentSearchParam: Dispatch<
        React.SetStateAction<DefaultFilterParamType>
    >;
};

const FilterWrapper: FC<FilterWrapperType> = ({
    handlerCloseFilters,
    setSearchParam,
    searchParam,
    children,
    setCurrentSearchParam,
}) => {
    const handlerSearch = () => {
        setSearchParam({ ...searchParam, "pagination[page]": 1 });
    };

    return (
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
                    <Button onClick={handlerCloseFilters} full variant="red">
                        Закрити фільтри
                    </Button>
                </div>
            </div>
        </>
    );
};

export default FilterWrapper;
