import { FC, ReactNode, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { BASE_URL } from "../../../constants/global.env.js";
import { useAnimation } from "../../../hooks/useAnimation.js";
import { ImageDataType } from "../../../types/pages/homePage.type.js";
import { getImageURL } from "../../../utils/getImageURL.js";
type ProductImageType = {
    images?: ImageDataType[];
    discount: ReactNode;
    isLoading: boolean;
};

const ProductImage: FC<ProductImageType> = ({
    images,
    discount,
    isLoading,
}) => {
    const [mainImage, setBigImage] = useState(0);
    const { isAnimating, toggleAnimation } = useAnimation();
    const handleClick = (i: number) => {
        if (mainImage === i) return;
        setBigImage(i);
        toggleAnimation();
    };
    const isImagesLoading = isLoading || !images;
    const imageList = isImagesLoading ? (
        <ImageArr />
    ) : (
        images.map((el, i) => {
            if (i > 4) return null;
            if (isLoading) {
                return;
            }
            return (
                <li
                    key={el.id}
                    className="w-full py-[67.2%] max-md:py-[28.3%] relative bg-white"
                >
                    <button
                        onMouseEnter={() => handleClick(i)}
                        onClick={() => handleClick(i)}
                        className="w-full center h-full absolute top-0 cardDefaultShadow hover:primaryBoxShadow overflow-hidden rounded"
                    >
                        <img
                            src={BASE_URL + getImageURL(el)}
                            alt="product image"
                            className="object-cover  h-full"
                        />
                    </button>
                </li>
            );
        })
    );

    return (
        <div className="flex gap-4 items-start">
            <ul className="flex flex-col gap-4 w-[12.7%] max-md:w-[24.4%]">
                {imageList}
            </ul>

            <div
                className={`w-full m ${
                    isAnimating ? "fade-animation" : ""
                }  relative py-[42.5%] bg-white flex justify-center rounded cardDefaultShadow  overflow-hidden  duration-300`}
            >
                {!!discount && (
                    <div className="absolute top-[10px] right-[10px] z-10">
                        {discount}
                    </div>
                )}

                {!images || isLoading ? (
                    <div className="absolute  top-0 h-full w-full">
                        <Skeleton height={500} width="100%" />
                    </div>
                ) : (
                    <img
                        src={BASE_URL + images[mainImage]?.attributes?.url}
                        className=" absolute   object-cover lef-0 top-0 h-full "
                        alt="product image"
                    />
                )}
            </div>
        </div>
    );
};

export default ProductImage;

export const ImageArr = () => {
    return (
        <>
            {Array(5)
                .fill(null)
                .map((_, i) => (
                    <Skeleton height={55} key={i} />
                ))}
        </>
    );
};
