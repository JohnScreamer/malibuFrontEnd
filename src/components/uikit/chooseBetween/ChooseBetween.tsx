import { FC, useEffect, useState } from "react";

type ChooseBetweenBtnType = {
    values: Array<string>;
    value: string;
    defaultValue: string;
    onChange: (e: any) => void;
    className?: string;
    label?: string;
};

const ChooseBetweenBtn: FC<ChooseBetweenBtnType> = (props) => {
    const { values, defaultValue, onChange, className, label } = props;

    const [picked, setValue] = useState(defaultValue);
    const handlerPick = (
        value: string,
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        e.stopPropagation();
        setValue(value);
        onChange(value);
    };
    useEffect(() => {
        onChange(defaultValue);
    }, []);
    return (
        <label htmlFor="">
            {!!label && (
                <div className="text-base text-myGrey-mid">{label}</div>
            )}
            <div
                className={`rounded bg-myGrey-light p-1 w-full flex text-xs ${className}`}
            >
                {values.map((el) => {
                    return (
                        <button
                            key={el}
                            onClick={(e) => handlerPick(el, e)}
                            className={`rounded   center w-full p-2 ${
                                el === picked
                                    ? "text-white bg-myGreen "
                                    : "hover:bg-myGrey-soft bg-myGrey-light  cursor-pointer"
                            }`}
                        >
                            {el}
                        </button>
                    );
                })}
            </div>
        </label>
    );
};

export default ChooseBetweenBtn;
