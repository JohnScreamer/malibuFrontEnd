import QueryString from "qs";
import { FC } from "react";
import { useLocation } from "react-router-dom";
import CartOrderWrapper from "./CartOrderWrapper.js";
type CartWrapperType = {};

const CartWrapper: FC<CartWrapperType> = () => {
    const location = useLocation();
    QueryString.parse(location.search.substring(1));
    const { finalStep } = QueryString.parse(location.search.substring(1));

    return (
        <>
            <div className=" flex gap-[60px]  max-sm:flex-col max-md:gap-8 w-full max-lg:gap-8">
                <CartOrderWrapper finalStep={!!finalStep} />
            </div>
        </>
    );
};

export default CartWrapper;
