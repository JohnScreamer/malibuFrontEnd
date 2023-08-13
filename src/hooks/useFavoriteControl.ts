import { useUserAuth } from "./useUserAuth.js";
import { useMutation } from "@tanstack/react-query";
import { MouseEventHandler, useState } from "react";
import { updateUserinfo } from "../api/mutation_request.js";
import {
    getUserDataSelector,
    getUserFavoriteSelector,
} from "../redux/selectors/index.js";
import { setFavoriteData } from "../redux/slice/userInfo.js";
import { ProductData } from "../types/pages/homePage.type.js";
import { useAppDispatch, useAppSelector } from "./reduxHooks.js";
import { toast } from "react-hot-toast";
type BodyType = {
    favorite: Array<ProductData>;
};
export const useFavoriteControl = (product: ProductData) => {
    const { isAuth, handlerOpenLoginModal } = useUserAuth();
    const favoriteData = useAppSelector(getUserFavoriteSelector);
    const userData = useAppSelector(getUserDataSelector);
    const [currentFavorite, setCurrentFavorite] = useState<Array<ProductData>>(
        []
    );
    const dispatch = useAppDispatch();
    const { error, isLoading, mutate } = useMutation(
        ({ body, id }: { body: BodyType; id: number }) =>
            updateUserinfo(body, id),
        {
            onSuccess: (data) => {
                dispatch(setFavoriteData(currentFavorite));
            },
            onError: (error) => {
                toast.error("Не вдалось загрузити ваші обрані товари");
                console.log(error);
            },
        }
    );

    const addToFavorite: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!isAuth) {
            handlerOpenLoginModal();
        }
        const arr = favoriteData
            ? [...favoriteData, product]
            : [...currentFavorite, product];
        const body = {
            favorite: arr,
        };
        setCurrentFavorite(arr);
        if (userData?.id) mutate({ body, id: userData.id });
    };
    const removeFromFavorite: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!isAuth) {
            handlerOpenLoginModal();
        }
        const arr = favoriteData
            ? [...favoriteData].filter((el) => el.id !== product.id)
            : [...currentFavorite].filter((el) => el.id !== product.id);
        const body = {
            favorite: arr,
        };
        setCurrentFavorite(arr);
        if (userData?.id) mutate({ body, id: userData.id });
    };

    const isInFavorite = favoriteData?.find((el) => el.id === product.id);

    return { isInFavorite, removeFromFavorite, addToFavorite, isLoading };
};
