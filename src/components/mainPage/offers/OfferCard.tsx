import { FC } from "react";
import { BASE_URL } from "../../../constants/global.env.js";
import { OfferType } from "../../../types/offers.type.js";
import Typography from "../../typography/Typography.js";

type OfferCardType = {
    data?: OfferType;
    id: number;
};

const OfferCard: FC<OfferCardType> = ({ data, id }) => {
    const color = id === 0 ? "bg-pink-200" : "bg-yellow-200";
    return (
        <div
            className={`flex rounded ${color} items-center overflow-hidden  w-full  shadow`}
        >
            <div className=" py-[30px] pl-[40px] max-md:p-[20px] max-md:pr-0 w-[60%] max-[425px]:w-[75%] flex flex-col gap-[5px]">
                <Typography tag="title" variant="S" bold>
                    {data?.title}
                </Typography>
                <Typography tag="text" variant="S">
                    {data?.subTitle}
                </Typography>
            </div>
            <div className="flex w-[40%] relative max-[425px]:w-[25%] items-center justify-end max-h-[180px] p-2">
                <img
                    alt="offer image  "
                    className="w-full h-full object-contain ml-auto max-md:relative max-md:left-[20px]"
                    src={BASE_URL + data?.img.data[0].attributes.url}
                />
            </div>
        </div>
    );
};

export default OfferCard;
