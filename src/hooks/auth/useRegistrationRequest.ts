import { useLayoutEffect } from "react";
import { useRegistration } from "./../useRegistration.js";
import { useMutation } from "@tanstack/react-query";
import { registrationRequest } from "../../api/mutation_request.js";
import { logIn } from "../../redux/slice/userInfo.js";
import { setJwtCookie } from "../../utils/JWT/setJWTCookie.js";
import { useAppDispatch, useAppSelector } from "../reduxHooks.js";
import { isUserAuthSelector } from "../../redux/selectors/index.js";
import { toast } from "react-hot-toast";

export const useRegistrationRequest = () => {
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(isUserAuthSelector);
    const { handlerCloseRegistrationModal, registrationModalStatus } =
        useRegistration();
    useLayoutEffect(() => {
        if (registrationModalStatus && isAuth) {
            handlerCloseRegistrationModal();
        }
    }, [registrationModalStatus, isAuth]);
    const { error, isLoading, mutate } = useMutation(registrationRequest, {
        onSuccess: (data) => {
            dispatch(logIn(data.user));
            setJwtCookie(data.jwt);
            toast.success("Ви успішно зареєструвалися. !");
        },
        onError: (error) => {
            toast.error(
                "Упс щось пішло не так.Логін або пароль можливо зайняті."
            );

            console.log(error);
        },
    });

    return { error, isLoading, mutate };
};
