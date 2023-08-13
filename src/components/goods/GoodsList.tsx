import { FC } from "react";
import { GoodsListType } from "../../types/goods/goodsList.type.js";
import ListLayout from "../layouts/ListLayout.js";
import Empty from "../uikit/empty/Empty.js";
import { GoodsRenderList } from "./goodsList/GoodsListWrapper.js";
import { SkeletonList } from "./goodsList/SkeletonList.js";

const GoodsList: FC<GoodsListType> = ({
    isLoading,

    categoriesName,
    listData,
    skeletonNum = 4,
    listSx,
}) => {
    const List = listData?.length ? (
        <GoodsRenderList listData={listData} />
    ) : null;

    if (listData?.length === 0 && !isLoading) {
        return <Empty />;
    }
    return (
        <ListLayout
            listName={categoriesName}
            moreBtnName={"Більше товарів"}
            moreBtnLink={"/catalog"}
            listSx={listSx}
            isLoading={isLoading}
        >
            {isLoading ? (
                <>
                    <SkeletonList skeletonsNum={skeletonNum} />
                </>
            ) : (
                List
            )}
        </ListLayout>
    );
};
export default GoodsList;
