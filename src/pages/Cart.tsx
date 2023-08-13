import { FC } from "react";
import CartWrapper from "../components/cartPage/CartWrapper.js";
import ItemsInCart from "../components/cartPage/ItemsInCart.js";
import PageLayout from "../components/layouts/DefaultPageLayout/PageLayout.js";

type CartType = {};
const arr = [
    { name: "Головна", link: "/" },
    { name: "Корзина", link: "/cart" },
];
const Cart: FC<CartType> = () => {
    return (
        <>
            <PageLayout
                breadCrumbsArr={arr}
                title="Корзина"
                countLabel={<ItemsInCart />}
            >
                <CartWrapper />
            </PageLayout>
        </>
    );
};

export default Cart;
