import { FC, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks.js";
import { getAllProductId } from "../../redux/selectors/index.js";
import { removeMultipleProducts } from "../../redux/slice/cart.js";
import Button from "../uikit/buttons/Button.js";
import Checkbox from "../uikit/checkbox/Checkbox.js";

type CartListControllerType = {
    setToSelected: React.Dispatch<React.SetStateAction<number[]>>;
    selectedProduct: Array<number>;
};

const CartListController: FC<CartListControllerType> = ({
    selectedProduct,
    setToSelected,
}) => {
    const [isSelectedAll, setSelectedAll] = useState(false);
    const allProductCartId = useAppSelector(getAllProductId);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (selectedProduct.length !== allProductCartId.length) {
            setSelectedAll(false);
            return;
        }
        setSelectedAll(true);
    }, [selectedProduct.length]);
    const handlerCheckbox = () => {
        if (isSelectedAll) {
            setToSelected([]);
            setSelectedAll((prev) => !prev);
            return;
        }
        setToSelected(allProductCartId);
        setSelectedAll((prev) => !prev);
    };
    const handlerClearSelected = () => {
        dispatch(removeMultipleProducts(selectedProduct));
    };
    return (
        <div className="flex gap-12 max-[425px]:gap-8 text-xs items-center px-2">
            <div className="flex gap-2 items-center">
                <Checkbox
                    checked={isSelectedAll}
                    minusSvg
                    name="all"
                    onChange={handlerCheckbox}
                />
                <label
                    htmlFor="all"
                    className="cursor-pointer"
                    onClick={handlerCheckbox}
                >
                    Виділити всі
                </label>
            </div>
            <Button
                filledType="empty"
                onClick={handlerClearSelected}
                className="text-orange text-xs"
            >
                Видалити вибрані
            </Button>
        </div>
    );
};

export default CartListController;
