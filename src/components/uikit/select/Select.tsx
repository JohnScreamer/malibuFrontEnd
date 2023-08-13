import { FC, ReactNode, useState } from "react";
import useClickOutside from "../../../hooks/useClickOutside.js";
import { CSSTransition } from "react-transition-group";
type OptionType = { value: string; label: string };
type SelectList = Array<OptionType>;
type SelectType = {
    list: SelectList;
    label: string;
    placeholder: string;
    tooltip?: ReactNode;
    className?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const Select: FC<SelectType> = (props) => {
    const {
        tooltip,
        list,
        label,
        placeholder,
        onChange,
        onBlur,
        value,
        className,
        ...restProps
    } = props;
    const [isListVisible, setVisibleStatus] = useState(false);
    const handlerCloseSelect = () => {
        setVisibleStatus(false);
    };
    const toggleListStatus = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setVisibleStatus((prev) => !prev);
    };
    const handlerSetValue = (option: OptionType) => {
        if (onChange) onChange(option.label as any);

        handlerCloseSelect();
    };
    const current = useClickOutside<HTMLDivElement>(handlerCloseSelect);
    return (
        <label htmlFor="">
            {!!label && (
                <div className="text-myGrey-mid text-base">{label}</div>
            )}
            <div
                className={`w-full cardDefaultShadow text-base  z-[5] relative rounded ${className} ${
                    isListVisible
                        ? "outline-1 outline outline-myGreen rounded-b-none"
                        : ""
                }  `}
                ref={current}
            >
                <button
                    onClick={toggleListStatus}
                    className=" w-full pl-4 p-3 "
                >
                    <div className="flex justify-between gap-1">
                        <div>
                            {!!value ? (
                                value
                            ) : (
                                <span className="text-myGrey-soft">
                                    {placeholder}
                                </span>
                            )}
                        </div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className={`${
                                    isListVisible ? "rotate-180" : ""
                                }`}
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5.64645 8.64645C5.84171 8.45118 6.15829 8.45118 6.35355 8.64645L12 14.2929L17.6464 8.64645C17.8417 8.45118 18.1583 8.45118 18.3536 8.64645C18.5488 8.84171 18.5488 9.15829 18.3536 9.35355L12.3536 15.3536C12.1583 15.5488 11.8417 15.5488 11.6464 15.3536L5.64645 9.35355C5.45118 9.15829 5.45118 8.84171 5.64645 8.64645Z"
                                    fill="#414141"
                                />
                            </svg>
                        </div>
                    </div>
                </button>
                <CSSTransition
                    in={isListVisible}
                    timeout={300}
                    classNames="modal"
                    unmountOnExit
                >
                    <ul className="flex modal flex-col cardDefaultShadow rounded-b  absolute top-[99%] w-[calc(100%+0.5%)] translate-x-[-0.27%] mx-auto bg-white  border border-myGreen border-t-0">
                        {list.map((el) => (
                            <SelectItem
                                option={el}
                                setValue={handlerSetValue}
                            />
                        ))}
                    </ul>
                </CSSTransition>
                {tooltip}
            </div>
            <select
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                className="hidden"
                {...restProps}
            >
                {list.map((el) => (
                    <option key={el.label}>{el.label}</option>
                ))}
            </select>
        </label>
    );
};

export default Select;
const SelectItem = ({
    setValue,
    option,
}: {
    option: OptionType;
    setValue: (option: OptionType) => void;
}) => {
    const handlerSetValue = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValue(option);
    };
    return (
        <li className="hover:text-orange hover:bg-[#FCD5BA]">
            <button
                className="p-2 pl-4 w-full text-start"
                onClick={handlerSetValue}
            >
                {option.label}
            </button>
        </li>
    );
};
