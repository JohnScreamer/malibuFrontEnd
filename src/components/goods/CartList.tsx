import { FC, useState } from "react";
import { BASE_URL } from "../../constants/global.env.js";
import { useAppSelector } from "../../hooks/reduxHooks.js";
import { getAllCartSelector } from "../../redux/selectors/index.js";
import { getImageURL } from "../../utils/getImageURL.js";
import CartListController from "../cartPage/CartListController.js";
import EmptyCart from "../uikit/empty/EmptyCart.js";
import AmountPriceControl from "./cartCard/AmountPriceControl.js";
import CartCardImg from "./cartCard/CartCardImg.js";
import CartCardWrapper from "./cartCard/CartCardWrapper.js";
import CartPriceSection from "./cartCard/CartPriceSection.js";
import CheckBoxWrapper from "./cartCard/CheckBoxWrapper.js";
import GoodsName from "./GoodsName.js";
type CartListType = {};

const CartList: FC<CartListType> = () => {
    const product = useAppSelector(getAllCartSelector);
    const [selectedProduct, setToSelected] = useState<Array<number>>([]);

    if (!product.length) return <EmptyCart />;
    return (
        <div className="flex flex-col gap-6">
            <CartListController
                selectedProduct={selectedProduct}
                setToSelected={setToSelected}
            />
            <ul className="w-full flex flex-col gap-6">
                {product.map((el) => {
                    return (
                        <CartCardWrapper
                            key={el.product.id}
                            name={
                                <GoodsName>
                                    {el.product.attributes.name}
                                </GoodsName>
                            }
                            productId={el.product.id}
                            amountPriceControlSection={
                                <AmountPriceControl
                                    amount={el.amount}
                                    data={el.product}
                                    discount={el.product.attributes.discount}
                                    price={el.product.attributes.price}
                                />
                            }
                            imageSection={
                                <CartCardImg
                                    imgUrl={
                                        BASE_URL +
                                        getImageURL(
                                            el?.product?.attributes?.images
                                                ?.data[0]
                                        )
                                    }
                                />
                            }
                            priceInfo={
                                <CartPriceSection
                                    discount={el.product.attributes.discount}
                                    price={el.product.attributes.price}
                                />
                            }
                            selectControl={
                                <CheckBoxWrapper
                                    productId={el.product.id}
                                    selectedArr={selectedProduct}
                                    setToSelected={setToSelected}
                                />
                            }
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default CartList;
