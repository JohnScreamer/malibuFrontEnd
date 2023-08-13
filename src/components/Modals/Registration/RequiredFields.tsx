import { FC } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { FIELDS, STREETS } from "../../../constants/registration.js";
import { FieldsType } from "../../../types/registrationFileds.js";
import Calendar from "../../uikit/calendar/Calendar.js";
import Field from "../../uikit/field/Field.js";
import ChooseBetween from "../../uikit/chooseBetween/ChooseBetween.js";
import Select from "../../uikit/select/Select.js";
import Tooltips from "../../uikit/tooltips/Tooltips.js";

type RequiredFieldsType = {
    control: Control<FieldsType, any>;
    errors: FieldErrors<FieldsType>;
};

const RequiredFields: FC<RequiredFieldsType> = ({ control, errors }) => {
    return (
        <>
            <div className="flex gap-10 max-md:flex-col max-md:gap-4 w-full">
                <div className="relative flex flex-col gap-4 w-full">
                    {FIELDS.map((el) => {
                        return (
                            <Controller
                                key={el.fieldName}
                                name={el.fieldName}
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <Field
                                        label={el.title}
                                        sizeType="small"
                                        isError={!!errors[el.fieldName]}
                                        passSvg={el.fieldType === "password"}
                                        tooltip={
                                            errors[el.fieldName] && (
                                                <Tooltips
                                                    arrowSide="b"
                                                    variant="error"
                                                    className="text-sm"
                                                    withSvg
                                                >
                                                    {errors[el.fieldName]
                                                        ?.message ||
                                                        el.errorMassage}
                                                </Tooltips>
                                            )
                                        }
                                        {...field}
                                    />
                                )}
                            />
                        );
                    })}
                </div>
                <div className="w-full flex flex-col gap-4">
                    <Controller
                        name={"username"}
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Field
                                label={"Логін"}
                                sizeType="small"
                                isError={!!errors.username}
                                tooltip={
                                    errors.username && (
                                        <Tooltips
                                            arrowSide="b"
                                            variant="error"
                                            className="text-sm"
                                            withSvg
                                        >
                                            {errors.username?.message ||
                                                "Обовязкове поле"}
                                        </Tooltips>
                                    )
                                }
                                {...field}
                            />
                        )}
                    />
                    <Controller
                        name={"birthDay"}
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Calendar
                                tooltip={
                                    errors.birthDay && (
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
                                label="Дата народження"
                                isError={!!errors.birthDay}
                            />
                        )}
                    />
                    <Controller
                        name={"street"}
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Select
                                label="Найбиза  вулиця до вас"
                                placeholder="виберіть місто"
                                tooltip={
                                    errors.street && (
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
                                list={STREETS}
                                {...field}
                            />
                        )}
                    />
                    <Controller
                        name={"gender"}
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <ChooseBetween
                                values={["чоловік", "жінка"]}
                                defaultValue="чоловік"
                                {...field}
                            />
                        )}
                    />
                </div>
            </div>
        </>
    );
};

export default RequiredFields;
