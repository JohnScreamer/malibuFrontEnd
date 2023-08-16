import { FC } from "react";
import { Navigate } from "react-router-dom";
import PageLayout from "../components/layouts/DefaultPageLayout/PageLayout.js";
import ProfilePageWrapper from "../components/profilePage/ProfilePageWrapper.js";
import Spinner from "../components/uikit/spinner/Spinner.js";
import { PROFILE_CRUMBS } from "../constants/breadCrumbsArr.js";
import { useAppSelector } from "../hooks/reduxHooks.js";
import { isUserDataLoadingSelector } from "../redux/selectors/index.js";
import { getJwtFromCookie } from "../utils/JWT/getJWTCookie.js";

type ProfileType = {};

const Profile: FC<ProfileType> = () => {
    const userLoadingStatus = useAppSelector(isUserDataLoadingSelector);
    const token = getJwtFromCookie();
    if (!token) {
        return <Navigate to={"/"} />;
    }
    return (
        <PageLayout breadCrumbsArr={PROFILE_CRUMBS} title="Профайл">
            {userLoadingStatus ? <Spinner /> : <ProfilePageWrapper />}
        </PageLayout>
    );
};

export default Profile;
