import { FC } from "react";
import { ProductData } from "../../../types/pages/homePage.type.js";
import DiscountLabel from "../../uikit/discountLabel/DiscountLabel.js";
import { FavoriteWrapper } from "./FavoriteBtnWrapper.js";
import ProductInCartLabel from "./ProductInCartLabel.js";

type GoodsImageSectionType = {
    imgUrl: string;
    goodsAmount?: number;
    discountNom?: number;
    productId: number;
    data: ProductData;
};

const GoodsImageSection: FC<GoodsImageSectionType> = (props) => {
    const { imgUrl, goodsAmount, discountNom, productId, data } = props;

    return (
        <div className="relative flex ">
            <div
                className={`max-w-[272px] max-[375px]:max-w-full h-[160px]  flex justify-center mx-auto  max-[375px]:w-full  max-[375px]`}
            >
                <img src={imgUrl} alt="goods img" className="  h-full  " />
            </div>
            <FavoriteWrapper data={data} />
            {goodsAmount && (
                <div className="absolute top-0 left-0 m-2  rounded p-1">
                    <ProductInCartLabel productId={productId} />
                </div>
            )}
            {!!discountNom && (
                <div className="absolute z-10 m-2 bottom-0">
                    <DiscountLabel discountNom={discountNom} />
                </div>
            )}
        </div>
    );
};

export default GoodsImageSection;
