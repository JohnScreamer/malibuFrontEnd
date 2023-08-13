import { useQuery } from "@tanstack/react-query";
import { FC, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { getSimilarCatalog } from "../../../api/query_request.js";
import { BASE_URL } from "../../../constants/global.env.js";
import { getImageURL } from "../../../utils/getImageURL.js";
import Typography from "../../typography/Typography.js";

type SimilarProductType = {
    isLoading: boolean;
    productType?: string;
};

const SimilarProduct: FC<SimilarProductType> = ({ isLoading, productType }) => {
    const {
        data,
        refetch,
        isSuccess,
        isLoading: similarLoading,
    } = useQuery(["similar"], () => getSimilarCatalog(productType || ""), {
        enabled: false,
    });
    useEffect(() => {
        if (productType) {
            refetch();
        }
    }, [productType]);

    return (
        <div>
            <Typography tag="span" className="text-myGrey mb-2" variant="S">
                Схожі
            </Typography>
            <ul className="flex gap-4 flex-col max-lg:flex-row ">
                {data?.data.map((el, i) => {
                    if (!isSuccess) {
                        return (
                            <li
                                className="rounded overflow-hidden w-full"
                                key={el.id}
                            >
                                <Skeleton height={70} />
                            </li>
                        );
                    }

                    return (
                        <li
                            className="rounded bg-white overflow-hidden w-full duration-300  hover:primaryBoxShadow cardDefaultShadow "
                            key={el.id}
                        >
                            <Link to={`/product/${el.id}`}>
                                <div>
                                    <div className="  relative py-[17%] center">
                                        <img
                                            alt="similarProduct image"
                                            className="object-cover absolute top-0 h-full "
                                            src={
                                                BASE_URL +
                                                getImageURL(
                                                    el?.attributes?.images
                                                        ?.data[0]
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="p-[10px] max-md:p-[6px]">
                                        <Typography
                                            bold
                                            tag="span"
                                            className="max-md:text-sm"
                                            variant="M"
                                        >
                                            {el.attributes.price} ₴
                                        </Typography>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SimilarProduct;
