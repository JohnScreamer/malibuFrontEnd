import { FC } from "react";
import { FieldErrors, Control, Controller } from "react-hook-form";
import H2 from "../../typography/H2.js";
import Calendar from "../../uikit/calendar/Calendar.js";
import ChooseBetweenBtn from "../../uikit/chooseBetween/ChooseBetween.js";
import Tooltips from "../../uikit/tooltips/Tooltips.js";
import { OrderFieldsType } from "../CartOrderWrapper.js";

type DateFieldsType = {
    errors: FieldErrors<OrderFieldsType>;
    control: Control<OrderFieldsType, any>;
};
const DELIVER_TIME_PERIOD = [
    "8:00 - 14:00",
    "14:00 - 18:00",
    "18:00 - 20:00",
    "20:00 - 22:00",
];

const DateFields: FC<DateFieldsType> = ({ control, errors }) => {
    return (
        <div className="flex flex-col max-md:gap-4 gap-6 ">
            <H2>Коли</H2>
            <div className="flex w-full md:items-end gap-10 max-md:flex-col">
                <div className="min-w-[280px]">
                    <Controller
                        name={"date"}
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Calendar
                                tooltip={
                                    errors.date && (
                                        <Tooltips
                                            arrowSide="b"
                                            variant="error"
                                            className="text-sm"
                                            withSvg
                                        >
                                            Обовязкове поле
                                        </Tooltips>
                                    )
                                }
                                {...field}
                                label="Дата доставки"
                                isError={!!errors.date}
                                disabledPast={true}
                            />
                        )}
                    />
                </div>
                <div className="w-full">
                    <Controller
                        name={"time"}
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <ChooseBetweenBtn
                                values={DELIVER_TIME_PERIOD}
                                defaultValue={DELIVER_TIME_PERIOD[0]}
                                label="Час доставки"
                                {...field}
                                className="gap-2 bg-transparent  max-lg:grid max-lg:grid-cols-2"
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default DateFields;
