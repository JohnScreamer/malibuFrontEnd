import { FC, ReactNode } from "react";
import useClickOutside from "../../../hooks/useClickOutside.js";

type DropDownWrapperType = {
    handlerCloseDropDown: () => void;
    className?: string;
    children: ReactNode;
};

const DropDownWrapper: FC<DropDownWrapperType> = ({
    handlerCloseDropDown,
    className,
    children,
}) => {
    const wrapperRef = useClickOutside<HTMLDivElement>(handlerCloseDropDown);
    return (
        <div
            ref={wrapperRef}
            className={`relative bg-white  rounded ${className}`}
        >
            {children}
        </div>
    );
};

export default DropDownWrapper;
