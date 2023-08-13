import { FC } from "react";
import { useFetchingLowPrice } from "../../../hooks/fetching/useFetchingLowPrice.js";
import GoodsList from "../../goods/GoodsList.js";

type LowPriceListType = {};

const LowPriceList: FC<LowPriceListType> = () => {
    const { lowPriceData, lowPriceLoading } = useFetchingLowPrice();

    return (
        <>
            <GoodsList
                listData={lowPriceData?.data}
                categoriesName="Низька ціна"
                isLoading={lowPriceLoading}
                listSx="grid-cols-4"
            />
        </>
    );
};

export default LowPriceList;
