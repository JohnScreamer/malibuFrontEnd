import QueryString from "qs";
import { useLocation, useNavigate } from "react-router-dom";
import { customQS } from "../utils/customQS.js";
type ControlURLParamType = {
    property: string;
    value: string | boolean | number;
    closeProperty?: string;
};

export const useControlURLParam = ({
    property,
    value,
    closeProperty,
}: ControlURLParamType) => {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParamsUrl = QueryString.parse(location.search.substring(1));
    const isActive = !!searchParamsUrl[property];
    const addUrlParam = (e?: React.MouseEvent<HTMLButtonElement>) => {
        const newParam = searchParamsUrl
            ? { ...searchParamsUrl, [property]: value }
            : { [property]: value };
        if (closeProperty) {
            delete newParam[closeProperty];
        }
        navigate({ search: customQS(newParam) });
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
    };

    const removeUrlParam = (e?: React.MouseEvent<HTMLButtonElement>) => {
        const newParam = { ...searchParamsUrl };
        delete newParam[property];
        navigate({ search: customQS(newParam) });
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
    };

    return { addUrlParam, removeUrlParam, isActive };
};
