import { FC, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
type DropDownItemsType = {
    children: ReactNode;
    className: string;
    isDropDownOpen: boolean;
};

const DropDownItems: FC<DropDownItemsType> = ({
    children,
    className,
    isDropDownOpen,
}) => {
    return (
        <CSSTransition
            in={isDropDownOpen}
            timeout={300}
            classNames="modal"
            unmountOnExit
        >
            <ul
                className={`absolute top-[100%] w-full flex-col cardDefaultShadow p-2 ${className}`}
            >
                {children}
            </ul>
        </CSSTransition>
    );
};

export default DropDownItems;
