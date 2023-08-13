import {
    isUserAuthSelector,
    getUserDataSelector,
} from "../redux/selectors/index.js";
import { useAppSelector } from "./reduxHooks.js";
import { useControlURLParam } from "./useControlURLParam.js";
export const useUserAuth = () => {
    const { addUrlParam, isActive, removeUrlParam } = useControlURLParam({
        property: "login",
        value: true,
    });
    const isAuth = useAppSelector(isUserAuthSelector);
    const userData = useAppSelector(getUserDataSelector);

    const isAuthWrapperFn = <T extends (...args: Array<any>) => void>(
        callBack: T
    ) => {
        return () => {
            if (isAuth) {
                callBack();
            }
            addUrlParam();
        };
    };

    return {
        isAuthWrapperFn,
        handlerOpenLoginModal: addUrlParam,
        handlerCloseLoginModal: removeUrlParam,
        isAuth,
        isAuthModalOpen: isActive,
        userData,
    };
};
