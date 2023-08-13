import { FC, ReactNode, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import useClickOutside from "../../../hooks/useClickOutside.js";
import Button from "../buttons/Button.js";
import Modal from "./Portal.js";
import "./modal.css";
type ModalWrapperType = {
    isModalOpen: boolean;
    closeModal: () => void;
    children?: ReactNode;
    full?: boolean;
    className?: string;
};

const ModalWrapper: FC<ModalWrapperType> = ({
    isModalOpen,
    closeModal,
    children,
    full,
    className,
}) => {
    const modalRef = useClickOutside<HTMLDivElement>(closeModal);
    const closeModalOnEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            closeModal();
        }
    };
    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("no-scroll");
        }
        document.addEventListener("keydown", closeModalOnEscape);
        return () => {
            document.body.classList.remove("no-scroll");
            document.removeEventListener("keydown", closeModalOnEscape);
        };
    }, [isModalOpen]);
    return (
        <>
            <Modal>
                <CSSTransition
                    in={isModalOpen}
                    timeout={300}
                    classNames="modal"
                    unmountOnExit
                >
                    <div
                        className={`text-6xl  fixed w-full h-screen z-50 bg-orange-muted/80 top-0 center ${
                            full ? "px-[40px]" : "px-[15px]"
                        }    modal `}
                    >
                        <div
                            ref={modalRef}
                            className={` ${className}  bg-white  px-[40px] py-[40px] max-[425px]:p-2 ${
                                full ? "w-full " : ""
                            }  max-md:p-6 relative max-h-full overflow-y-auto  rounded primaryBoxShadow`}
                        >
                            <div className="absolute top-0  right-0  ">
                                <Button
                                    className="max-md:p-1 "
                                    variant="grey"
                                    onClick={closeModal}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M18.3536 5.64645C18.5488 5.84171 18.5488 6.15829 18.3536 6.35355L6.35355 18.3536C6.15829 18.5488 5.84171 18.5488 5.64645 18.3536C5.45118 18.1583 5.45118 17.8417 5.64645 17.6464L17.6464 5.64645C17.8417 5.45118 18.1583 5.45118 18.3536 5.64645Z"
                                            fill="#414141"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5.64645 5.64645C5.84171 5.45118 6.15829 5.45118 6.35355 5.64645L18.3536 17.6464C18.5488 17.8417 18.5488 18.1583 18.3536 18.3536C18.1583 18.5488 17.8417 18.5488 17.6464 18.3536L5.64645 6.35355C5.45118 6.15829 5.45118 5.84171 5.64645 5.64645Z"
                                            fill="#414141"
                                        />
                                    </svg>
                                </Button>
                            </div>
                            <div>{children}</div>
                        </div>
                    </div>
                </CSSTransition>
            </Modal>
        </>
    );
};

export default ModalWrapper;
