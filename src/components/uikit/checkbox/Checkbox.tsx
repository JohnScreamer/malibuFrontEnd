import { FC, InputHTMLAttributes, useId } from "react";

export type CheckboxType = InputHTMLAttributes<HTMLInputElement> & {
    size?: "XL" | "L" | "M" | "S";
    className?: string;
    checked: boolean;
    onChange: (e: any) => void;
    label?: string;
    disabled?: boolean;
    svgSx?: string;
    minusSvg?: Boolean;
};
const sizeStyle = {
    XL: "w-[24px] h-[24px]",
    L: "w-[16px] h-[16px]",
    M: "w-[14px] h-[14px]",
    S: "w-[10px] h-[10px]",
};

const Checkbox: FC<CheckboxType> = (props) => {
    const {
        size = "M",
        checked,
        onChange,
        disabled,
        className,
        svgSx,
        minusSvg,
        name,
    } = props;
    let id = useId();

    return (
        <button
            className={`p-[3px] ${
                checked ? "bg-myGreen" : "bg-white"
            }  rounded border border-myGrey-soft hover:enabled:cursor-pointer ${
                disabled ? "bg-myGrey-light" : ""
            } hover:enabled:border-myGrey ${className}`}
            tabIndex={0}
            name={name}
            onClick={onChange}
            disabled={disabled}
        >
            <input
                type="checkbox"
                id={id}
                onClick={onChange}
                checked={checked}
                className="hidden"
            />

            <svg
                className={`${sizeStyle[size]} ${
                    checked ? "fill-white" : "fill-none"
                } ${svgSx}`}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {minusSvg ? (
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 8.00001C3 7.81591 3.14924 7.66667 3.33333 7.66667H12.6667C12.8508 7.66667 13 7.81591 13 8.00001C13 8.1841 12.8508 8.33334 12.6667 8.33334H3.33333C3.14924 8.33334 3 8.1841 3 8.00001Z"
                        fill="white"
                    />
                ) : (
                    <g id="feather-icon / check">
                        <path
                            id="Shape (Stroke)"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.5692 4.43096C13.6994 4.56113 13.6994 4.77219 13.5692 4.90236L6.23587 12.2357C6.10569 12.3659 5.89464 12.3659 5.76446 12.2357L2.43113 8.90236C2.30095 8.77219 2.30095 8.56113 2.43113 8.43096C2.5613 8.30078 2.77236 8.30078 2.90253 8.43096L6.00016 11.5286L13.0978 4.43096C13.228 4.30078 13.439 4.30078 13.5692 4.43096Z"
                        />
                    </g>
                )}
            </svg>
        </button>
    );
};

export default Checkbox;
