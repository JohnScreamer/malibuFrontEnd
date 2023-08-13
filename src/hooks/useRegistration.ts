import { useUserAuth } from "./useUserAuth.js";
import { useControlURLParam } from "./useControlURLParam.js";

export const useRegistration = () => {
    const { addUrlParam, isActive, removeUrlParam } = useControlURLParam({
        property: "registration",
        value: true,
        closeProperty: "login",
    });

    const handlerOpenRegistrationModal = (
        e?: React.MouseEvent<HTMLButtonElement>
    ) => {
        addUrlParam();
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
    };
    return {
        registrationModalStatus: isActive,
        handlerOpenRegistrationModal,
        handlerCloseRegistrationModal: removeUrlParam,
    };
};
