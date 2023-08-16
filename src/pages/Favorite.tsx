import { FC } from "react";
import { Navigate } from "react-router-dom";
import GoodsList from "../components/goods/GoodsList.js";
import PageLayout from "../components/layouts/DefaultPageLayout/PageLayout.js";
import { FAVORITE_CRUMBS } from "../constants/breadCrumbsArr.js";
import { useAppSelector } from "../hooks/reduxHooks.js";
import {
    getUserFavoriteSelector,
    isUserDataLoadingSelector,
} from "../redux/selectors/index.js";
import { getJwtFromCookie } from "../utils/JWT/getJWTCookie.js";

type FavoriteType = {};

const Favorite: FC<FavoriteType> = () => {
    const favoriteData = useAppSelector(getUserFavoriteSelector);
    const isUserDataLoading = useAppSelector(isUserDataLoadingSelector);
    const token = getJwtFromCookie();
    if (!token) {
        return <Navigate to={"/"} />;
    }

    return (
        <>
            <PageLayout breadCrumbsArr={FAVORITE_CRUMBS} title="Обране">
                <GoodsList
                    isLoading={isUserDataLoading}
                    listData={favoriteData}
                    skeletonNum={6}
                    listSx="grid-cols-4"
                />
            </PageLayout>
        </>
    );
};

export default Favorite;
