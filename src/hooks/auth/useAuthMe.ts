import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { authMe } from "../../api/mutation_request.js";
import { logIn, setUserLoadingStatus } from "../../redux/slice/userInfo.js";
import { useAppDispatch } from "../reduxHooks.js";
import { useUserAuth } from "../useUserAuth.js";
import { getJwtFromCookie } from "../../utils/JWT/getJWTCookie.js";
import { toast } from "react-hot-toast";

export const useAuthMe = () => {
    const dispatch = useAppDispatch();
    const { handlerCloseLoginModal } = useUserAuth();
    const token = getJwtFromCookie();
    const { error, isLoading, mutate } = useMutation(authMe, {
        onSuccess: (data) => {
            dispatch(logIn(data));
            handlerCloseLoginModal();
        },
        onError: (error) => {
            toast.error("Не можливо авторизуватися");
            console.log(error);
        },
        mutationKey: ["authMe"],
    });
    useEffect(() => {
        dispatch(setUserLoadingStatus(isLoading));
    }, [isLoading]);

    const getUserData = () => {
        if (token) {
            mutate();
        }
    };

    return { error, isLoading, getUserData };
};
