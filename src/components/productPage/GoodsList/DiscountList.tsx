import { FC } from "react";
import { useDiscountFetching } from "../../../hooks/fetching/useDiscountFetching.js";
import GoodsList from "../../goods/GoodsList.js";

type DiscountListType = {};

const DiscountList: FC<DiscountListType> = () => {
    const { discountData, discountLoading } = useDiscountFetching();

    return (
        <>
            <GoodsList
                listData={discountData?.data}
                categoriesName="Акція"
                isLoading={discountLoading}
                listSx="grid-cols-4"
            />
        </>
    );
};

export default DiscountList;
