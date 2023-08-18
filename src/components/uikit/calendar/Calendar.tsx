import { FC, InputHTMLAttributes, ReactNode, useEffect, useState } from "react";
import { ukUA } from "@mui/x-date-pickers/locales";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import "dayjs/locale/uk";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import React from "react";
import { DayCalendarSkeleton } from "@mui/x-date-pickers";
import Field from "../field/Field.js";
import { calendarToUkr } from "../../../utils/calendarToUkr.js";
import useClickOutside from "../../../hooks/useClickOutside.js";
import { CSSTransition } from "react-transition-group";
import CalendarSvg from "./CalendarSvg.js";
type CalendarType = {
    label: string;
    tooltip: ReactNode;
    isError?: boolean;
    disabledFuture?: boolean;
    disabledPast?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Calendar: FC<CalendarType> = (props) => {
    const {
        label,
        tooltip,
        value,
        onChange,
        onBlur,
        disabledFuture,
        disabledPast,
        ...restProps
    } = props;
    const [isCalendarVisible, setCalendarStatus] = useState(false);

    const closeCalendar = () => {
        setCalendarStatus(false);
    };
    const current = useClickOutside<HTMLDivElement>(closeCalendar);
    const handlerToggleCalendar = (
        e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }

        setCalendarStatus((prev) => !prev);
    };
    const handlerSetData = (e: any) => {
        if (onChange) {
            onChange(
                `${e["$y"]}-${addNill(e["$M"] + 1)}-${addNill(e["$D"])}` as any
            );
            closeCalendar();
        }
    };
    useEffect(() => {
        calendarToUkr();
    }, []);
    useEffect(() => {
        calendarToUkr();
    }, [value, isCalendarVisible]);

    return (
        <div className="relative" ref={current}>
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                localeText={
                    ukUA.components.MuiLocalizationProvider.defaultProps
                        .localeText
                }
                adapterLocale="ukUa"
            >
                <Field
                    rightElemFn={handlerToggleCalendar}
                    tooltip={tooltip}
                    sizeType="small"
                    rightElem={<CalendarSvg />}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    label={label}
                    {...restProps}
                />
                <CSSTransition
                    in={isCalendarVisible}
                    timeout={300}
                    classNames="modal"
                    unmountOnExit
                >
                    <div className="absolute top-[99%] w-full bg-white z-10   cardDefaultShadow ">
                        <DateCalendar
                            onChange={handlerSetData}
                            renderLoading={() => <DayCalendarSkeleton />}
                            sx={{ maxWidth: "280px" }}
                            disablePast={disabledPast}
                            disableFuture={disabledFuture}
                        />
                    </div>
                </CSSTransition>
            </LocalizationProvider>
        </div>
    );
};

export default Calendar;

const addNill = (str: number) => {
    if (`${str}`.length > 1) {
        return str;
    }
    return `0${str}`;
};
