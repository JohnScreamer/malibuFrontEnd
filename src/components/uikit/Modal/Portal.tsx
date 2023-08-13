import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
    children: React.ReactNode;
}

const modalRoot = document.getElementById("modal-root") as HTMLElement;

const Modal: React.FC<ModalProps> = ({ children }) => {
    // useEffect(() => {
    //     if (modalRoot) {
    //         modalRoot.appendChild(children as Node);
    //     }

    //     return () => {
    //         if (modalRoot) {
    //             modalRoot.removeChild(children);
    //         }
    //     };
    // }, []);

    return ReactDOM.createPortal(children, modalRoot);
};

export default Modal;
