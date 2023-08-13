import { FC, InputHTMLAttributes, ReactNode, useRef, useState } from "react";
import PassSvg from "./Passsvg.js";
import PassSvgOpen from "./PassSvgOpen.js";

export type FieldType = {
    label?: string;
    leftElem?: ReactNode;
    leftElemFn?: () => void;
    rightElemFn?: () => void;
    rightElem?: ReactNode;
    passSvg?: boolean;
    sizeType?: "default" | "small";
    tooltip?: ReactNode;
    isError?: boolean;
    textarea?: boolean; // Додали тип для textarea
} & InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

const sizeStyle = {
    default: "py-3 px-4",
    small: "py-2 px-4",
};
const iconStyle = "w-[24px] h-[24px]";
const Field: FC<FieldType> = (props) => {
    const {
        sizeType = "default",
        rightElem,
        label,
        className,
        passSvg,
        leftElem,
        leftElemFn,
        rightElemFn,
        tooltip,
        placeholder,
        onChange,
        onBlur,
        isError,
        name,
        textarea,
        ...restProps
    } = props;

    const [isPass, setPassStatus] = useState(!!passSvg);
    const toggleFieldType = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();
        event.stopPropagation();
        setPassStatus((prev) => !prev);
    };

    const input = useRef<HTMLInputElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const inputRef = props.textarea ? textareaRef : input;
    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        if ((event.ctrlKey || event.metaKey) && event.key === "x") {
            event.preventDefault();
            if (inputRef.current) {
                inputRef.current.value = "";
            }
        }
    };

    const getSelectedText = () => {
        if (inputRef.current) {
            const { selectionStart, selectionEnd } = inputRef.current;
            if (selectionStart !== null && selectionEnd !== null) {
                const selectedText = inputRef.current.value.substring(
                    selectionStart,
                    selectionEnd
                );
            }
        }
    };

    const Element = textarea ? "textarea" : "input";

    return (
        <label className="w-full relative">
            {!!label && (
                <div className="text-myGrey-mid text-base">{label}</div>
            )}
            <div className="relative w-full">
                <Element
                    ref={inputRef as any}
                    className={`caret-myGreen text-base w-full focus:boxShadowGreen ${
                        sizeStyle[sizeType]
                    } bg-opacity-20 ${passSvg || rightElem ? "pr-12" : ""} ${
                        leftElem ? "pl-12" : ""
                    }
                    focus:outline-none focus:ring-myGreen focus:border-myGreen ${
                        isError ? "border-redError" : "border-myGrey-soft"
                    } rounded-[4px] border ${className}  `}
                    type={isPass ? "password" : "text"}
                    onKeyDown={handleKeyDown}
                    onMouseUp={getSelectedText}
                    onTouchEnd={getSelectedText}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                    {...restProps}
                />
                {!!rightElem && (
                    <button
                        className={` ${iconStyle} group  active:scale-90 bg-red top-[50%]  translate-y-[-50%] right-0 mr-4  absolute`}
                        onClick={rightElemFn}
                    >
                        {rightElem}
                    </button>
                )}
                {!!leftElem && (
                    <button
                        className={`  ${iconStyle}  bg-red  active:scale-90 bg-red top-[50%]  translate-y-[-50%] left-0 ml-4  absolute`}
                        onClick={leftElemFn}
                    >
                        {leftElem}
                    </button>
                )}
                {!!passSvg && (
                    <button
                        className={`   ${iconStyle} active:scale-90 bg-red top-[50%] group translate-y-[-50%] right-0 mr-4  absolute`}
                        onClick={toggleFieldType}
                    >
                        {isPass ? <PassSvg /> : <PassSvgOpen />}
                    </button>
                )}
                {tooltip}
            </div>
        </label>
    );
};

export default Field;
