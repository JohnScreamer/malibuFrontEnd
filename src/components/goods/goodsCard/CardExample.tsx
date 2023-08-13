import { FC, useState } from "react";
import Button from "../../uikit/buttons/Button.js";
import Rating from "../../uikit/rating/Rating.js";
import CardWrapper from "./CardWrapper.js";
import GoodsImageSection from "./GoodsImageSection.js";
import GoodsName from "../GoodsName.js";
import PriceSection, { PriceTag, PriceTagSecondary } from "../PriceSection.js";

const CardExample: FC = () => {
    const [rating, setRat] = useState(3.75);
    return (
        <CardWrapper
            addToCart={
                <Button
                    full
                    className="ui-card-btn  group-hover:ui-btn-primary"
                    variant="secondary"
                    filledType="border"
                >
                    В корзину
                </Button>
            }
            imgSection={
                <GoodsImageSection
                    goodsAmount={2}
                    imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8-kI1Ig9-FiPVftxWx34AWeP4rjc9drDkmw&usqp=CAU"
                    productId={0}
                    data={undefined}
                />
            }
            goodsName={<GoodsName>Jennie kim</GoodsName>}
            priceSection={
                <PriceSection
                    discountPriceTag={
                        <PriceTagSecondary price={22}>імя</PriceTagSecondary>
                    }
                    priceTag={
                        <PriceTag price={22} discount={20}>
                            Звичайна
                        </PriceTag>
                    }
                />
            }
            rating={<Rating ratingNum={rating} setRating={setRat} preview />}
            url={0}
        />
    );
};

export default CardExample;
