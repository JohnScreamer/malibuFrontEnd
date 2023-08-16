import { FC } from "react";
import CartWrapper from "../components/cartPage/CartWrapper.js";
import ItemsInCart from "../components/cartPage/ItemsInCart.js";
import PageLayout from "../components/layouts/DefaultPageLayout/PageLayout.js";
import { CART_CRUMBS } from "../constants/breadCrumbsArr.js";

type CartType = {};

const Cart: FC<CartType> = () => {
    return (
        <>
            <PageLayout
                breadCrumbsArr={CART_CRUMBS}
                title="Корзина"
                countLabel={<ItemsInCart />}
            >
                <CartWrapper />
            </PageLayout>
        </>
    );
};

export default Cart;
