import { FC } from "react";

export type ToggleType = {
    size?: "XL" | "L" | "M" | "S";
    className?: string;
    checked: boolean;
    onChange: () => void;
    label?: string;
    disabled?: boolean;
    circleSx?: string;
    name?: string;
};

const sizeStyle = {
    XL: "w-[24px] h-[24px]",
    L: "w-[16px] h-[16px]",
    M: "w-[14px] h-[14px]",
    S: "w-[10px] h-[10px]",
};
const bgSizeStyle = {
    XL: "w-[60px] ",
    L: "w-[46px] ",
    M: "w-[35px] ",
    S: "w-[26px] ",
};

const Toggle: FC<ToggleType> = (props) => {
    const {
        size = "M",
        checked,
        onChange,
        disabled,
        circleSx,
        className,
    } = props;

    return (
        <button
            className={`${
                bgSizeStyle[size]
            } flex items-center p-[1px]   rounded-full border border-myGrey-soft hover:enabled:cursor-pointer ${
                checked ? "bg-myGreen" : "bg-myGrey-light"
            } ${
                disabled ? "bg-myGrey-light" : "bg-myGreen"
            } group ${className}  `}
            tabIndex={0}
            onClick={onChange}
            disabled={disabled}
        >
            <input
                type="checkbox"
                onClick={onChange}
                checked={checked}
                className="hidden"
            />
            <div
                className={`${sizeStyle[size]} bg-white rounded-full ${
                    checked ? "ml-auto" : ""
                } ${
                    disabled ? "bg-myGrey-soft " : "group-hover:bg-black"
                } ${circleSx}`}
            ></div>
        </button>
    );
};

export default Toggle;
