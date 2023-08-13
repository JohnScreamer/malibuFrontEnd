import { FC } from "react";
import { BASE_URL } from "../../../constants/global.env.js";
import { ProductData } from "../../../types/pages/homePage.type.js";
import { getImageURL } from "../../../utils/getImageURL.js";
import CardButtons from "../goodsCard/CardButtons.js";
import CardWrapper from "../goodsCard/CardWrapper.js";
import GoodsImageSection from "../goodsCard/GoodsImageSection.js";
import GoodsName from "../GoodsName.js";
import PriceSection, { PriceTagSecondary, PriceTag } from "../PriceSection.js";
import RatingWrapper from "../RatingWrapper.js";

type GoodsRenderList = {
    listData: Array<ProductData>;
};

export const GoodsRenderList: FC<GoodsRenderList> = ({ listData }) => {
    return (
        <>
            {listData.map((el) => {
                return (
                    <CardWrapper
                        url={el.id}
                        key={el.id}
                        addToCart={<CardButtons data={el} />}
                        imgSection={
                            <GoodsImageSection
                                goodsAmount={1}
                                data={el}
                                productId={el.id}
                                discountNom={el.attributes.discount}
                                imgUrl={`${BASE_URL}${getImageURL(
                                    el?.attributes?.images?.data[0],
                                    true
                                )}`}
                            />
                        }
                        goodsName={<GoodsName>{el.attributes.name}</GoodsName>}
                        priceSection={
                            <PriceSection
                                discountPriceTag={
                                    <PriceTagSecondary
                                        price={el.attributes.price}
                                        discount={el.attributes.discount}
                                    >
                                        Звичайна
                                    </PriceTagSecondary>
                                }
                                priceTag={
                                    <PriceTag
                                        price={el.attributes.price}
                                        discount={el.attributes.discount}
                                    >
                                        Скидка
                                    </PriceTag>
                                }
                            />
                        }
                        rating={<RatingWrapper name={el.attributes.name} />}
                    />
                );
            })}
        </>
    );
};
