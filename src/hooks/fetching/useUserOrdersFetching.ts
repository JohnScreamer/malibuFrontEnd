import { isUserDataLoadingSelector } from "./../../redux/selectors/index.js";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserOrders } from "../../api/query_request.js";
import { getUserDataSelector } from "../../redux/selectors/index.js";
import { useAppSelector } from "../reduxHooks.js";

export const useUserOrderFetching = () => {
    const isUserLoading = useAppSelector(isUserDataLoadingSelector);
    const [userId, setId] = useState<number | null>(null);
    const userData = useAppSelector(getUserDataSelector);
    const { data, isLoading, refetch } = useQuery(
        ["orders"],
        () => getUserOrders({ userId }),
        { enabled: false }
    );
    useEffect(() => {
        setId(userData?.id || null);
    }, [userData?.id]);
    useEffect(() => {
        refetch();
    }, [userId]);
    return { data, isLoading, isUserLoading };
};
