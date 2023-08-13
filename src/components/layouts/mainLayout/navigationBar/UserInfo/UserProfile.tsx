import { FC, useState } from "react";
import { useUserAuth } from "../../../../../hooks/useUserAuth.js";
import Typography from "../../../../typography/Typography.js";
import Avatar from "../../../../common/avatar/Avatar.js";
import DropDownWrapper from "../../../../uikit/dropDown/DropDownWrapper.js";
import DropDownItems from "../../../../uikit/dropDown/DropDownItems.js";
import ProfileMenuNavigation from "./ProfileDropDown.js";
import DropDownBtn from "../../../../uikit/dropDown/DropDownBtn.js";
import { Link } from "react-router-dom";
type UserType = {};

const User: FC<UserType> = () => {
    const { userData } = useUserAuth();

    const [isDropDownOpen, setDropDown] = useState(false);
    const handlerCloseDropDown = () => {
        setDropDown(false);
    };
    const handlerToggleDropDownStatus = () => {
        setDropDown((prev) => !prev);
    };

    if (!userData) return null;
    return (
        <DropDownWrapper
            handlerCloseDropDown={handlerCloseDropDown}
            className={` inline  max-w-[200px] w-full max-lg:w-auto  ${
                isDropDownOpen ? "cardDefaultShadow" : ""
            }`}
        >
            <div className="flex p-2 pb-0  max-lg:p-0 gap-3 z-10 relative items-center  ">
                <Link to="/profile">
                    <Avatar />
                </Link>
                <DropDownBtn
                    handlerToggleDropDownStatus={handlerToggleDropDownStatus}
                    isDropDownOpen={isDropDownOpen}
                    className="max-lg:hidden w-full  gap-1"
                >
                    <Typography
                        className="mr-auto group-hover:text-orange overflow-ellipsis"
                        variant="S"
                        tag="span"
                    >
                        {userData.name}
                    </Typography>
                </DropDownBtn>
            </div>
            <DropDownItems
                isDropDownOpen={isDropDownOpen}
                className=" max-lg:hidden 
                 text-base modal  overflow-hidden  secondFont  bg-white    flex gap-2"
            >
                <ProfileMenuNavigation />
            </DropDownItems>
        </DropDownWrapper>
    );
};

export default User;
