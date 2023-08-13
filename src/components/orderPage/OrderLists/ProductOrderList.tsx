import { FC } from "react";
import { BASE_URL } from "../../../constants/global.env.js";
import { OrderAttributes } from "../../../types/orders.type.js";
import { getImageURL } from "../../../utils/getImageURL.js";
import CartCardImg from "../../goods/cartCard/CartCardImg.js";
import CartCardWrapper from "../../goods/cartCard/CartCardWrapper.js";
import CartPriceSection from "../../goods/cartCard/CartPriceSection.js";
import TotalGoodsPrice from "../../goods/cartCard/TotalGoodsPrice.js";
import GoodsName from "../../goods/GoodsName.js";
import Typography from "../../typography/Typography.js";
import OrderTable from "./OrderTable.js";

type ProductOrderListType = {
    orderItem: OrderAttributes;
    id: number;
};

const ProductOrderList: FC<ProductOrderListType> = ({ orderItem, id }) => {
    const { totalPrice, orderList } = orderItem;

    return (
        <div className="flex flex-col gap-4 bg-white rounded p-2">
            <div className="flex gap-2">
                <Typography>Номер замовлення</Typography>
                <Typography bold>{id}</Typography>
            </div>
            <div className="flex max-md:flex-col gap-2">
                <div className="min-w-[280px]">
                    <OrderTable orderItem={orderItem} />
                </div>
                <ul className="flex gap-2  flex-col w-full">
                    {orderList?.map((el) => (
                        <CartCardWrapper
                            key={el.product.id}
                            name={
                                <GoodsName>
                                    {el.product.attributes.name}
                                </GoodsName>
                            }
                            productId={el.product.id}
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
                            amountPriceControlSection={
                                <div className="flex gap-2 justify-between w-full">
                                    <div className="center flex-col mr-auto">
                                        <Typography>Кк-сть:</Typography>
                                        <Typography bold>
                                            {el.amount}
                                        </Typography>
                                    </div>
                                    <div className="ml-auto">
                                        <TotalGoodsPrice
                                            price={el.product.attributes.price}
                                            discount={
                                                el.product.attributes.discount
                                            }
                                            amount={el.amount}
                                        />
                                    </div>
                                </div>
                            }
                        />
                    ))}
                </ul>
            </div>
            <div className="flex justify-end gap-1">
                <Typography>Сумма заовлення без скидки:</Typography>
                <Typography bold>{totalPrice}₴</Typography>
            </div>
        </div>
    );
};

export default ProductOrderList;
