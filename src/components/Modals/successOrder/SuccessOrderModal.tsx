import { FC } from "react";
import { useOrderModalControl } from "../../../hooks/useOrderModalControl.js";
import Typography from "../../typography/Typography.js";
import ModalWrapper from "../../uikit/Modal/ModalWrapper.js";
import SuccessOrderContent from "./SuccessOrderContent.js";

type SuccessOrderModalType = {};

const SuccessOrderModal: FC<SuccessOrderModalType> = () => {
    const { handlerCloseOrderModal, orderModalStatus } = useOrderModalControl();
    return (
        <>
            <ModalWrapper
                closeModal={handlerCloseOrderModal}
                isModalOpen={orderModalStatus}
                className="w-full max-w-[687px] "
            >
                <div className="text-lg flex flex-col items-center justify-center gap-8 w-full py-6">
                    <Typography
                        variant="M"
                        tag="title"
                        className="center max-md:text-2xl"
                        bold
                    >
                        Замовленя створене
                    </Typography>
                    <SuccessOrderContent />
                </div>
            </ModalWrapper>
        </>
    );
};

export default SuccessOrderModal;
