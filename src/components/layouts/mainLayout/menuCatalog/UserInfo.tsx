import { FC } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/reduxHooks.js";
import { getUserDataSelector } from "../../../../redux/selectors/index.js";
import Avatar from "../../../common/avatar/Avatar.js";
import Typography from "../../../typography/Typography.js";

type UserInfoType = {
};

const UserInfo: FC<UserInfoType> = () => {
    const userData=useAppSelector(getUserDataSelector)
    return (
        <div className="flex items-center gap-[10px] justify-between ">
            <Link to="/profile" className="block ">
                <Avatar img="" />
            </Link>
            <Typography>{userData ? userData.name : "гість"}</Typography>
        </div>
    );
};

export default UserInfo;
