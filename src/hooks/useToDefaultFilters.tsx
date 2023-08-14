import ToDefaultSvg from "../components/catalogSearchPage/Filters/ToDefaultSvg.js";
import Button from "../components/uikit/buttons/Button.js";
import {
    DefaultFilterParamType,
    DEFAULT_CATALOG_FILTERS,
    FILTERS_CLEAR_PROPS,
} from "../constants/catalog.js";
import { FiltersKeys } from "../types/pages/catalogSearch.type.js";
import { isStringOrNumber } from "../utils/isStringOrNumber.js";

type PropsType = {
    handlerToDefaultParam: (param: DefaultFilterParamType) => void;
    setCurrentSearchParam: React.Dispatch<
        React.SetStateAction<DefaultFilterParamType>
    >;
    searchParam: DefaultFilterParamType;
};

export const useToDefaultFilters = ({
    handlerToDefaultParam,
    setCurrentSearchParam,
    searchParam,
}: PropsType) => {
    const AllToDefaultData = {
        ...DEFAULT_CATALOG_FILTERS,
        "filters[catalog][url_name][$eq]":
            searchParam["filters[catalog][url_name][$eq]"],
    };

    const handlerToDefault = (name: FiltersKeys, param: any) => {
        const data = { ...searchParam, [name]: param };
        handlerToDefaultParam(data);
        setCurrentSearchParam(data);
    };
    const handlerAllToDefault = () => {
        handlerToDefaultParam(AllToDefaultData);
        setCurrentSearchParam(AllToDefaultData);
    };
    const toDefaultBtnList = FILTERS_CLEAR_PROPS.map(
        ({ name, defaultValue, text }) => {
            const currentValue = searchParam[name as FiltersKeys];

            if (currentValue?.toString() === defaultValue.toString()) {
                return null;
            }

            return (
                <li key={name}>
                    <Button
                        variant="secondary"
                        size="mini"
                        className="text-xs"
                        rightElem={<ToDefaultSvg isActive={true} />}
                        onClick={() =>
                            handlerToDefault(name as FiltersKeys, defaultValue)
                        }
                    >{`${text} ${isStringOrNumber(currentValue)}`}</Button>
                </li>
            );
        }
    ).filter((el) => null !== el);

    return { handlerToDefault, handlerAllToDefault, toDefaultBtnList };
};
