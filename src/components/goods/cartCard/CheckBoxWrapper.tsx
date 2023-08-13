import { ChangeEvent, FC } from "react";
import Checkbox from "../../uikit/checkbox/Checkbox.js";

type CheckBoxWrapperType = {
    selectedArr: Array<number>;
    productId: number;
    setToSelected: React.Dispatch<React.SetStateAction<number[]>>;
};

const CheckBoxWrapper: FC<CheckBoxWrapperType> = ({
    selectedArr,
    productId,
    setToSelected,
}) => {
    const isSelected = selectedArr.includes(productId);
    function handlerToggle(e?: ChangeEvent<HTMLInputElement>): void {
        e?.stopPropagation();
        e?.preventDefault();
        if (isSelected) {
            setToSelected((prev) => prev.filter((el) => el !== productId));
        } else {
            setToSelected((prev) => [...prev, productId]);
        }
    }

    return (
        <>
            <Checkbox checked={isSelected} onChange={handlerToggle} />
        </>
    );
};

export default CheckBoxWrapper;
