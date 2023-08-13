import { useUserAuth } from "./../useUserAuth.js";
import { createProductReview } from "./../../api/mutation_request.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserReviewBody } from "../../types/rating/index.js";
import { useAppSelector } from "../reduxHooks.js";
import { isUserAuthSelector } from "../../redux/selectors/index.js";
import { toast } from "react-hot-toast";
type ReviewType = { body: UserReviewBody; productName: string };
export const useCreateReview = (refetchKey: string) => {
    const isAuth = useAppSelector(isUserAuthSelector);
    const { handlerOpenLoginModal } = useUserAuth();
    const queryClient = useQueryClient();
    const { error, isLoading, mutate } = useMutation(
        ({ body, productName }: ReviewType) =>
            createProductReview(body, productName),
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries([refetchKey]);
                queryClient.invalidateQueries(["review"]);
            },
            onError: (error) => {
                toast.error("Не вдалось створити відгук");
                console.log(error);
            },
        }
    );
    const createReview = ({ body, productName }: ReviewType) => {
        if (!isAuth) {
            handlerOpenLoginModal();
            return;
        }
        mutate({ body, productName });
    };
    return { error, createReview, isLoading };
};
