import { FC } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks.js";
import { logOut } from "../../redux/slice/userInfo.js";
import { deleteJWTToken } from "../../utils/deleteJWTToken.js";
import Button from "../uikit/buttons/Button.js";
import ProfileDataChanger from "./ProfileDataChanger.js";

type ProfilePageWrapperType = {};

const ProfilePageWrapper: FC<ProfilePageWrapperType> = () => {
    const dispatch = useAppDispatch();
    const handlerLogout = () => {
        dispatch(logOut());
        deleteJWTToken();
    };
    return (
        <div className="flex flex-col gap-6 justify-center items-center">
            <ProfileDataChanger />
            <Button variant="red" onClick={handlerLogout}>
                Вийти з профіля
            </Button>
        </div>
    );
};

export default ProfilePageWrapper;
