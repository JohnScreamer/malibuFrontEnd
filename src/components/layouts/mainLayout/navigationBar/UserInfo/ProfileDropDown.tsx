import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../../hooks/reduxHooks.js";
import { logOut } from "../../../../../redux/slice/userInfo.js";
import { deleteJWTToken } from "../../../../../utils/deleteJWTToken.js";

type ProfileMenuNavigationType = {};

const ProfileMenuNavigation: FC<ProfileMenuNavigationType> = ({}) => {
    const dispatch = useAppDispatch();
    const handlerLogout = () => {
        dispatch(logOut());
        deleteJWTToken();
    };
    return (
        <>
            <li className="hover:text-orange w-full">
                <Link to={"/profile"} className="w-full block">
                    Профіль
                </Link>
            </li>
            <li className="hover:text-orange w-full">
                <button onClick={handlerLogout} className=" text-start w-full">
                    Вийти
                </button>
            </li>
        </>
    );
};

export default ProfileMenuNavigation;
