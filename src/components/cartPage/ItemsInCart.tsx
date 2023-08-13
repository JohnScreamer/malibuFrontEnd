import { FC } from "react";
import { useAppSelector } from "../../hooks/reduxHooks.js";
import { uniqProductInCart } from "../../redux/selectors/index.js";

type ItemsInCartType = {};

const ItemsInCart: FC<ItemsInCartType> = () => {
    const totalItems = useAppSelector(uniqProductInCart);
    return (
        <div className="p-2 py-1 inline-flex items-center self-start bg-orange rounded text-white  leading-6">
            <div className="">{totalItems}</div>
        </div>
    );
};

export default ItemsInCart;
