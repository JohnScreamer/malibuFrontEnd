import { FC } from "react";
import { OffersType } from "../../../types/offers.type.js";
import Typography from "../../typography/Typography.js";
import OfferCard from "./OfferCard.js";
import OfferSkeletonList from "./OfferSkeletonList.js";

type OfferListType = {
    data?: OffersType;
    isLoading: boolean;
};

const OfferList: FC<OfferListType> = ({ data, isLoading }) => {
    return (
        <div className="flex flex-col gap-10 max-md:gap-8 max-sm:gap-4">
            <Typography
                variant="M"
                className="max-md:text-[24px]"
                tag="title"
                bold
            >
                Спеціальні пропозиції
            </Typography>
            <ul className="grid grid-cols-2  gap-10 max-md:gap-8 max-sm:gap-4 max-md:grid-cols-1">
                {isLoading || !data ? (
                    <OfferSkeletonList />
                ) : (
                    data.data.map((el, i) => (
                        <OfferCard data={el.attributes} key={el.id} id={i} />
                    ))
                )}
            </ul>
        </div>
    );
};

export default OfferList;
