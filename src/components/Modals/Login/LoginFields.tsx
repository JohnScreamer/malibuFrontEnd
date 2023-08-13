import { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../uikit/buttons/Button.js";
import Field from "../../uikit/field/Field.js";
import Tooltips from "../../uikit/tooltips/Tooltips.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { LOGIN_VALIDATION } from "../../../utils/validation/loginValidation.js";
import { useLogin } from "../../../hooks/auth/useLogIn.js";
import Spinner from "../../uikit/spinner/Spinner.js";
export type LoginType = {
    identifier: string;
    password: string;
};

type LoginFieldsType = {};

const LoginFields: FC<LoginFieldsType> = () => {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<LoginType>({
        mode: "onBlur",
        //@ts-ignore
        resolver: yupResolver(LOGIN_VALIDATION),
    });
    const { isLoading, mutate } = useLogin();
    const onSubmit: SubmitHandler<LoginType> = (data) => mutate(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name={"identifier"}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <Field
                        className="text-2xl"
                        label="Пошта"
                        autoComplete="email"
                        isError={!!errors.identifier}
                        tooltip={
                            !!errors.identifier && (
                                <Tooltips
                                    arrowSide="b"
                                    variant="error"
                                    className="text-sm"
                                    withSvg
                                >
                                    {errors.identifier?.message ||
                                        "Обовязкове поле"}
                                </Tooltips>
                            )
                        }
                        {...field}
                    />
                )}
            />
            <Controller
                name={"password"}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                    <Field
                        passSvg
                        className="text-2xl"
                        label="Пароль"
                        autoComplete="password"
                        isError={!!errors.password}
                        tooltip={
                            !!errors.password && (
                                <Tooltips
                                    arrowSide="b"
                                    variant="error"
                                    className="text-sm"
                                    withSvg
                                >
                                    {errors.password?.message ||
                                        "Обовязкове поле"}
                                </Tooltips>
                            )
                        }
                        {...field}
                    />
                )}
            />

            <Button
                disabled={!isValid}
                size="big"
                className="w-full mt-[32px] max-md:mt-[16px]"
            >
                Вхід
            </Button>
            {isLoading && <Spinner />}
        </form>
    );
};

export default LoginFields;
