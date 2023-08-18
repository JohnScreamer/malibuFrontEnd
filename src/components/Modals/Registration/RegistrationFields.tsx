import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Typography from "../../typography/Typography.js";
import Button from "../../uikit/buttons/Button.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { REGISTRATION_VALIDATION } from "../../../utils/validation/yup.js";
import { FieldsType } from "../../../types/registrationFileds.js";
import RequiredFields from "./RequiredFields.js";
import NotRequiredFields from "./NotRequiredFields.js";
import { useRegistrationRequest } from "../../../hooks/auth/useRegistrationRequest.js";
import Spinner from "../../uikit/spinner/Spinner.js";

type RegistrationFieldsType = {};

const RegistrationFields: FC<RegistrationFieldsType> = () => {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FieldsType>({
        mode: "onBlur",
        //@ts-ignore
        resolver: yupResolver(REGISTRATION_VALIDATION),
    });
    const { isLoading, mutate } = useRegistrationRequest();
    const onSubmit: SubmitHandler<FieldsType> = (data) => {
        mutate(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            id="myForm"
            className="center flex-col gap-10 w-full "
        >
            <Typography bold variant="XS" className="text-center" tag="title">
                Обовязкові поля
            </Typography>
            <RequiredFields control={control} errors={errors} />
            <Typography bold variant="XS" className="text-center" tag="title">
                Не обовязкові поля
            </Typography>
            <NotRequiredFields control={control} errors={errors} />
            <div className="min-w-[228px]">
                <Button size="big" full disabled={!isValid}>
                    Підтвердити
                </Button>
            </div>
            {isLoading && <Spinner />}
        </form>
    );
};

export default RegistrationFields;
