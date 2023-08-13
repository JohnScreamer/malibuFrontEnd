import { FC } from "react";
import { useRegistration } from "../../../hooks/useRegistration.js";
import { useUserAuth } from "../../../hooks/useUserAuth.js";
import Typography from "../../typography/Typography.js";
import Button from "../../uikit/buttons/Button.js";
import ModalWrapper from "../../uikit/Modal/ModalWrapper.js";
import LoginFields from "./LoginFields.js";

type LoginModalType = {};

const LoginModal: FC<LoginModalType> = () => {
    const { handlerCloseLoginModal, isAuthModalOpen } = useUserAuth();
    const { handlerOpenRegistrationModal } = useRegistration();

    return (
        <>
            <ModalWrapper
                closeModal={handlerCloseLoginModal}
                isModalOpen={isAuthModalOpen}
            >
                <div
                    onSubmit={() => {}}
                    className="text-lg flex flex-col gap-8"
                >
                    <Typography variant="S" tag="title" className="center" bold>
                        Вхід
                    </Typography>

                    <LoginFields />
                    <div>
                        <Button
                            variant="secondary"
                            filledType="border"
                            onClick={handlerOpenRegistrationModal}
                        >
                            Регістрація
                        </Button>
                    </div>
                </div>
            </ModalWrapper>
        </>
    );
};

export default LoginModal;
