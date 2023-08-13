import { FC, useState } from "react";
import LoginInfo from "./UserInfo/LoginInfo.js";
import NavBar from "./NavBar.js";

type NavBarWrapperType = {};

const NavBarWrapper: FC<NavBarWrapperType> = () => {
    return (
        <>
            <div className="ml-auto">
                <NavBar />
            </div>
            <LoginInfo authMeLoading={false} />
        </>
    );
};

export default NavBarWrapper;
