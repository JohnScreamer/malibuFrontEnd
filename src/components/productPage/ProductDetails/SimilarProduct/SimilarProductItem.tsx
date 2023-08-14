import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../../constants/global.env.js";
import { ImageDataType } from "../../../../types/pages/homePage.type.js";
import { getImageURL } from "../../../../utils/getImageURL.js";
import Typography from "../../../typography/Typography.js";

type SimilarProductItemType = {
    isSuccess: boolean;
    id: number;
    price: number;
    img: ImageDataType;
};

const SimilarProductItem: FC<SimilarProductItemType> = ({
    id,
    isSuccess,
    price,
    img,
}) => {
    if (!isSuccess) {
        return (
            <li className="rounded overflow-hidden w-full">
                <Skeleton height={70} />
            </li>
        );
    }

    return (
        <li className="rounded bg-white overflow-hidden w-full duration-300  hover:primaryBoxShadow cardDefaultShadow ">
            <Link to={`/product/${id}`}>
                <div>
                    <div className="  relative py-[17%] center">
                        <img
                            alt="similarProduct image"
                            className="object-cover absolute top-0 h-full "
                            src={BASE_URL + getImageURL(img)}
                        />
                    </div>
                    <div className="p-[10px] max-md:p-[6px]">
                        <Typography
                            bold
                            tag="span"
                            className="max-md:text-sm"
                            variant="M"
                        >
                            {price} ₴
                        </Typography>
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default SimilarProductItem;
