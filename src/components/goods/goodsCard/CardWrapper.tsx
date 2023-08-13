import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

type CardWrapperType = {
    priceSection?: ReactNode;
    goodsName?: ReactNode;
    rating?: ReactNode;
    addToCart?: ReactNode;
    imgSection: ReactNode;
    foodType?: ReactNode;
    url: number;
};

const CardWrapper: FC<CardWrapperType> = (props) => {
    const {
        priceSection,
        goodsName,
        rating,
        addToCart,
        imgSection,
        foodType,
        url,
    } = props;
    return (
        <Link
            to={`/product/${url}`}
            className="group bg-white inline-flex flex-col   cardDefaultShadow overflow-hidden hover:orangeShadow duration-300 cursor-pointer rounded"
        >
            {imgSection}

            <div className="flex flex-col h-full gap-2 p-2">
                {foodType}
                {priceSection}
                <div className="mb-auto">{goodsName}</div>
                {rating}
                <div>{addToCart}</div>
            </div>
        </Link>
    );
};

export default CardWrapper;
