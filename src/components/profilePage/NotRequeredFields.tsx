import { FC } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { NOT_REQUEIRED_FIELDS } from "../../constants/registration.js";
import { ProfileFieldsType } from "../../types/registrationFileds.js";
import Field from "../uikit/field/Field.js";
import Tooltips from "../uikit/tooltips/Tooltips.js";

type NotRequiredFieldsType = {
    control: Control<ProfileFieldsType, any>;
    errors: FieldErrors<ProfileFieldsType>;
};

const NotRequiredFields: FC<NotRequiredFieldsType> = ({ control, errors }) => {
    return (
        <>
            <div className="relative flex max-sm:flex-col  gap-4 w-full">
                {NOT_REQUEIRED_FIELDS.map((el) => {
                    return (
                        <Controller
                            key={el.fieldName}
                            name={el.fieldName}
                            control={control}
                            render={({ field }) => (
                                <Field
                                    type={el.fieldType}
                                    label={el.title}
                                    sizeType="small"
                                    isError={!!errors[el.fieldName]}
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
        </>
    );
};

export default NotRequiredFields;
