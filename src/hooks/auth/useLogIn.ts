import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { login } from "../../api/mutation_request.js";
import { logIn } from "../../redux/slice/userInfo.js";
import { setJwtCookie } from "../../utils/JWT/setJWTCookie.js";
import { useAppDispatch } from "../reduxHooks.js";
import { useUserAuth } from "../useUserAuth.js";

export const useLogin = () => {
    const dispatch = useAppDispatch();
    const { handlerCloseLoginModal } = useUserAuth();
    const { error, isLoading, mutate, isSuccess } = useMutation(login, {
        onSuccess: (data) => {
            dispatch(logIn(data.user));
            setJwtCookie(data.jwt);
            handlerCloseLoginModal();
            toast.success("Ви успішно зайшли в свій профайл");
            console.log("login done");
        },
        onError: (error) => {
            toast.error("Щось пішло не так.Перевірте данні і спробуйте зновую");
            console.log(error);
        },
    });

    return { error, isLoading, mutate, isSuccess };
};
