import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuthMe } from "../../../hooks/auth/useAuthMe.js";
import ModalsWrapper from "../../Modals/ModalsWrapper.js";
import Footer from "./footer/Footer.js";
import Header from "./header/Header.js";
import MobileMainMenu from "./mobileMainMenu/MobileMainManu.js";

type MainLayoutType = {};

const MainLayout: FC<MainLayoutType> = () => {
    const { isLoading, getUserData } = useAuthMe();

    useEffect(() => {
        getUserData();
    }, []);
    return (
        <>
            <div className="bg-mainBg defaultFont ">
                <div className="flex min-h-screen flex-col h-full relative  ">
                    <Header authMeLoading={isLoading} />
                    <Outlet />
                    <Footer />
                    <ModalsWrapper />
                    <MobileMainMenu authMeLoading={isLoading} />
                </div>
            </div>
        </>
    );
};

export default MainLayout;
