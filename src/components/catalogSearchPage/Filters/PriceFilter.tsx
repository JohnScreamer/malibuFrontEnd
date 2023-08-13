import { ChangeEvent, FC } from "react";
import {
    DefaultFilterParamType,
    DEFAULT_CATALOG_FILTERS,
} from "../../../constants/catalog.js";
import Typography from "../../typography/Typography.js";
import Button from "../../uikit/buttons/Button.js";
import Field from "../../uikit/field/Field.js";
import InputRange from "../../uikit/InputRange/InputRange.js";

type PriceFilterType = {
    setSearchParam: React.Dispatch<
        React.SetStateAction<DefaultFilterParamType>
    >;
    searchParam: DefaultFilterParamType;
};

const PriceFilter: FC<PriceFilterType> = ({ setSearchParam, searchParam }) => {
    const isDefaultParam =
        Number(searchParam["filters[price][$gt]"]) ===
            DEFAULT_CATALOG_FILTERS["filters[price][$gt]"] &&
        Number(searchParam["filters[price][$lt]"]) ===
            DEFAULT_CATALOG_FILTERS["filters[price][$lt]"];

    const handlerSetMinPrice = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchParam((prev) => ({
            ...prev,
            [`filters[price][$lt]`]: +e.target.value,
        }));
    };
    const handlerSetMaxPrice = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchParam((prev) => ({
            ...prev,
            [`filters[price][$gt]`]: +e.target.value,
        }));
    };
    const handlerSetRangePrice = (min: number, max: number) => {
        setSearchParam((prev) => ({
            ...prev,
            [`filters[price][$gt]`]: +min,
            ["filters[price][$lt]"]: +max,
        }));
    };
    const handlerClearFields = () => {
        setSearchParam((prev) => ({
            ...prev,
            [`filters[price][$gt]`]:
                DEFAULT_CATALOG_FILTERS["filters[price][$gt]"],
            ["filters[price][$lt]"]:
                DEFAULT_CATALOG_FILTERS["filters[price][$lt]"],
        }));
    };
    return (
        <div className="flex flex-col gap-[13px]">
            <div className="flex justify-between items-center">
                <Typography tag="span" variant="S">
                    Ціна
                </Typography>
                <Button
                    variant="grey"
                    className="ui_grey_disabled_secondary_active"
                    disabled={isDefaultParam}
                    onClick={handlerClearFields}
                >
                    Очистити
                </Button>
            </div>
            <div className="center">
                <div>
                    <Field
                        value={searchParam["filters[price][$gt]"] || ""}
                        onChange={handlerSetMaxPrice}
                        type="number"
                    />
                </div>
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z"
                            fill="#414141"
                        />
                    </svg>
                </span>
                <div>
                    <Field
                        value={searchParam["filters[price][$lt]"] || ""}
                        onChange={handlerSetMinPrice}
                        type="number"
                    />
                </div>
            </div>
            <div className="px-3">
                <InputRange
                    minDistance={5}
                    setCurrentProp={handlerSetRangePrice}
                    currentMin={searchParam["filters[price][$gt]"] || 0}
                    currentMax={searchParam["filters[price][$lt]"] || 100}
                    min={DEFAULT_CATALOG_FILTERS["filters[price][$gt]"] || 0}
                    max={DEFAULT_CATALOG_FILTERS["filters[price][$lt]"] || 100}
                />
            </div>
        </div>
    );
};

export default PriceFilter;
