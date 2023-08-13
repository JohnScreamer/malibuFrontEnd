import { FC } from "react";
import Burger from "../navigationBar/Burger.js";
import LoginInfo from "../navigationBar/UserInfo/LoginInfo.js";
import NavBar from "../navigationBar/NavBar.js";

type MobileMainMenuType = {
    authMeLoading: boolean;
};

const MobileMainMenu: FC<MobileMainMenuType> = ({ authMeLoading }) => {
    return (
        <div className="h-[56px] sm:hidden">
            <nav className=" bg-white py-2 px-[12px] z-40 fixed bottom-0 w-full  flex">
                <ul className=" w-full flex  justify-between">
                    <Burger />
                    <NavBar />
                    <LoginInfo authMeLoading={authMeLoading} />
                </ul>
            </nav>
        </div>
    );
};

export default MobileMainMenu;
