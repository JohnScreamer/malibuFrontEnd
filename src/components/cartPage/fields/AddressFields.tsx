import { FC } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import H2 from "../../typography/H2.js";
import Field from "../../uikit/field/Field.js";
import Tooltips from "../../uikit/tooltips/Tooltips.js";
import { OrderFieldsType } from "../CartOrderWrapper.js";

type AddressFieldsType = {
    errors: FieldErrors<OrderFieldsType>;
    control: Control<OrderFieldsType, any>;
};

const AddressFields: FC<AddressFieldsType> = ({ control, errors }) => {
    return (
        <div className="flex flex-col max-md:gap-4 gap-6">
            <H2>Куди</H2>
            <div className="flex gap-10">
                <Controller
                    name="street"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Field
                            label="Вулиця"
                            sizeType="small"
                            isError={!!errors.street}
                            tooltip={
                                errors.street && (
                                    <Tooltips
                                        arrowSide="b"
                                        variant="error"
                                        className="text-sm"
                                        withSvg
                                    >
                                        {errors.street?.message ||
                                            "Обов'язкове поле"}
                                    </Tooltips>
                                )
                            }
                            {...field}
                        />
                    )}
                />
                <div className="max-w-[125px]">
                    <Controller
                        name="house"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Field
                                label="Будинок"
                                sizeType="small"
                                isError={!!errors.house}
                                type="number"
                                tooltip={
                                    errors.house && (
                                        <Tooltips
                                            arrowSide="b"
                                            variant="error"
                                            className="text-sm"
                                            withSvg
                                        >
                                            {errors.house?.message ||
                                                "Обов'язкове поле"}
                                        </Tooltips>
                                    )
                                }
                                {...field}
                            />
                        )}
                    />
                </div>
                <div className="max-w-[125px]">
                    <Controller
                        name="flat"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Field
                                label="Квартира"
                                sizeType="small"
                                isError={!!errors.flat}
                                type="number"
                                tooltip={
                                    errors.flat && (
                                        <Tooltips
                                            arrowSide="b"
                                            variant="error"
                                            className="text-sm"
                                            withSvg
                                        >
                                            {errors.flat?.message ||
                                                "Обов'язкове поле"}
                                        </Tooltips>
                                    )
                                }
                                {...field}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default AddressFields;
