import { FC, ReactNode } from "react";
import H2 from "../typography/H2.js";

type ProductPageWrapperType = {
    images: ReactNode;
    details: ReactNode;
    topList: ReactNode;
    bottomList: ReactNode;
    reviews: ReactNode;
    similar: ReactNode;
    rating: ReactNode;
    name: ReactNode;
};

const ProductPageWrapper: FC<ProductPageWrapperType> = ({
    details,
    images,
    topList,
    bottomList,
    reviews,
    similar,
    rating,
    name,
}) => {
    return (
        <div>
            <div>
                <div className="flex flex-col max-sm:gap-2 gap-4 mb-4 max-sm:mb-2">
                    {name}
                    <div>{rating}</div>
                </div>
                <div className="flex  gap-10 max-sm:flex max-sm:flex-col max-lg:grid  max-lg:grid-cols-2 max-sm:grid-rows-3 ">
                    <div className="w-[54%] max-lg:w-full"> {images}</div>
                    <div className="w-[35%]  max-lg:w-full ">{details}</div>
                    <div className=" w-[15%] max-lg:col-span-2   max-lg:w-full">
                        {similar}
                    </div>
                </div>
            </div>

            <div>{topList}</div>
            <div>
                <H2>ВІдгуки</H2>
                <div>{reviews}</div>
            </div>
            <div>
                <div>{bottomList}</div>
            </div>
        </div>
    );
};

export default ProductPageWrapper;
