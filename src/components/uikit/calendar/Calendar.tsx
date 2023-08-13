import { FC, InputHTMLAttributes, ReactNode, useEffect, useState } from "react";
import { ukUA } from "@mui/x-date-pickers/locales";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import dayjs from "dayjs";
import "dayjs/locale/uk";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import React from "react";
import { DayCalendarSkeleton } from "@mui/x-date-pickers";
import Field from "../field/Field.js";
import { calendarToUkr } from "../../../utils/calendarToUkr.js";
import useClickOutside from "../../../hooks/useClickOutside.js";
import { CSSTransition } from "react-transition-group";
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
            onChange(`${e["$y"]}-${addNill(e["$M"] + 1)}-${addNill(e["$D"])}`);
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
                    rightElem={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            className="group-hover:fill-orange  fill=#414141 "
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 6C3 4.61929 4.11929 3.5 5.5 3.5H19.5C20.8807 3.5 22 4.61929 22 6V20C22 21.3807 20.8807 22.5 19.5 22.5H5.5C4.11929 22.5 3 21.3807 3 20V6ZM5.5 4.5C4.67157 4.5 4 5.17157 4 6V20C4 20.8284 4.67157 21.5 5.5 21.5H19.5C20.3284 21.5 21 20.8284 21 20V6C21 5.17157 20.3284 4.5 19.5 4.5H5.5Z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.5 1.5C16.7761 1.5 17 1.72386 17 2V6C17 6.27614 16.7761 6.5 16.5 6.5C16.2239 6.5 16 6.27614 16 6V2C16 1.72386 16.2239 1.5 16.5 1.5Z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.5 1.5C8.77614 1.5 9 1.72386 9 2V6C9 6.27614 8.77614 6.5 8.5 6.5C8.22386 6.5 8 6.27614 8 6V2C8 1.72386 8.22386 1.5 8.5 1.5Z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 10C3 9.72386 3.22386 9.5 3.5 9.5H21.5C21.7761 9.5 22 9.72386 22 10C22 10.2761 21.7761 10.5 21.5 10.5H3.5C3.22386 10.5 3 10.2761 3 10Z"
                            />
                        </svg>
                    }
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
