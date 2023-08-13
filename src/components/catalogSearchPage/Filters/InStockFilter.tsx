import { FC } from "react";
import { DefaultFilterParamType } from "../../../constants/catalog.js";
import Typography from "../../typography/Typography.js";
import Toggle from "../../uikit/toggle/Toggle.js";

type InStockFilterType = {
    setSearchParam: React.Dispatch<
        React.SetStateAction<DefaultFilterParamType>
    >;

    searchParam: DefaultFilterParamType;
};

const InStockFilter: FC<InStockFilterType> = ({
    searchParam,
    setSearchParam,
}) => {
    const handlerSetInStockStatus = () => {
        setSearchParam((prev) => ({
            ...prev,
            [`filters[in_stock][$eq]`]: !prev[`filters[in_stock][$eq]`],
        }));
    };
    return (
        <div className="flex items-center">
            <div className="mr-[10px] ">
                <Toggle
                    size="L"
                    checked={searchParam["filters[in_stock][$eq]"]}
                    onChange={handlerSetInStockStatus}
                    name="inStock"
                />
            </div>
            <label htmlFor="inStock">
                <Typography tag="span" variant="S">
                    В наявності
                </Typography>
            </label>
        </div>
    );
};

export default InStockFilter;
