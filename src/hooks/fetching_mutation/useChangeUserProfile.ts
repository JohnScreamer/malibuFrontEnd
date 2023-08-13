import { useAppDispatch, useAppSelector } from "./../reduxHooks.js";
import { useMutation, QueryClient } from "@tanstack/react-query";
import { updateUserinfo } from "../../api/mutation_request.js";
import { getUserDataSelector } from "../../redux/selectors/index.js";
import { logIn } from "../../redux/slice/userInfo.js";
import { toast } from "react-hot-toast";

export const useChangeUserProfile = () => {
    const userId = useAppSelector(getUserDataSelector);
    const dispatch = useAppDispatch();
    const { error, isLoading, mutate } = useMutation(
        ({ body, id }: { body: any; id: number }) => updateUserinfo(body, id),
        {
            onSuccess: (data) => {
                dispatch(logIn(data));
                toast.success("Успішно змінили данні");
            },
            onError: (error) => {
                console.log(error);
                toast.error("Щось пішло не так.Емейл або логін вже існують");
            },
        }
    );
    const changeProfileData = (body: any) => {
        if (!userId?.id) return;
        mutate({ body, id: userId.id });
    };
    return { isLoading, changeProfileData };
};
