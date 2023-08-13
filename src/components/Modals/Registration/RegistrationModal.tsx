import { FC } from "react";
import { useRegistration } from "../../../hooks/useRegistration.js";
import Typography from "../../typography/Typography.js";

import ModalWrapper from "../../uikit/Modal/ModalWrapper.js";
import RegistrationFields from "./RegistrationFields.js";

type RegistrationModalType = {};

const RegistrationModal: FC<RegistrationModalType> = () => {
    const { handlerCloseRegistrationModal, registrationModalStatus } =
        useRegistration();
    return (
        <>
            <ModalWrapper
                closeModal={handlerCloseRegistrationModal}
                isModalOpen={registrationModalStatus}
                className="w-full max-w-[687px] "
            >
                <div className="text-lg flex flex-col items-center justify-center gap-8 w-full">
                    <Typography variant="S" tag="title" className="center" bold>
                        Реєстрація
                    </Typography>

                    <RegistrationFields />
                </div>
            </ModalWrapper>
        </>
    );
};

export default RegistrationModal;
