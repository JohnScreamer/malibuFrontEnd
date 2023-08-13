import { FC } from "react";
import { Toaster } from "react-hot-toast";
import LoginModal from "./Login/LoginModal.js";
import RegistrationModal from "./Registration/RegistrationModal.js";
import SuccessOrderModal from "./successOrder/SuccessOrderModal.js";

type ModalsWrapperType = {};

const ModalsWrapper: FC<ModalsWrapperType> = () => {
    return (
        <>
            <LoginModal />
            <RegistrationModal />
            <SuccessOrderModal />
            <Toaster position="bottom-right" reverseOrder={false} />
        </>
    );
};

export default ModalsWrapper;
