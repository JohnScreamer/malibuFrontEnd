import { FC, MouseEventHandler } from "react";

import { useAppDispatch } from "../../hooks/reduxHooks.js";
import { setFiltersStatus } from "../../redux/slice/common.js";
import Button from "../uikit/buttons/Button.js";

type OpenFilterType = {};
const OpenFilter: FC<OpenFilterType> = () => {
    const dispatch = useAppDispatch();
    const handlerToggleFilterStatus: MouseEventHandler<HTMLButtonElement> = (
        e
    ) => {
        dispatch(setFiltersStatus(true));
        e.stopPropagation();
    };

    return (
        <div className="md:hidden">
            <Button onClick={handlerToggleFilterStatus} variant="secondary">
                Фільтер
            </Button>
        </div>
    );
};

export default OpenFilter;
