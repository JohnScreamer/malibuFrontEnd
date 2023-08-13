import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import { useUserAuth } from "../../../../../hooks/useUserAuth.js";
import Button from "../../../../uikit/buttons/Button.js";
import LogInSvg from "./LogInSvg.js";
import User from "./UserProfile.js";

type LoginInfoType = { authMeLoading: boolean };

const LoginInfo: FC<LoginInfoType> = ({ authMeLoading }) => {
    const { handlerOpenLoginModal, isAuth } = useUserAuth();
    if (authMeLoading) {
        return (
            <div
                className="max-w-[157px] max-lg:w-[40px] 
            max-md:w-[40px] max-md:h-[40px]  w-full h-[40px] 
           max-lg:rounded-full overflow-hidden "
            >
                <Skeleton className="h-[50px] relative bottom-3  lg:w-[157px]" />
            </div>
        );
    }

    return (
        <>
            {isAuth ? (
                <User />
            ) : (
                <>
                    <Button
                        size="default"
                        className=" lg:w-[157px] w-full   max-md:hidden"
                        onClick={handlerOpenLoginModal}
                        rightElem={<LogInSvg />}
                    >
                        <div className="max-md:hidden"> Увійти</div>
                    </Button>
                    <Button
                        size="default"
                        onClick={handlerOpenLoginModal}
                        className="md:hidden"
                    >
                        <LogInSvg />
                    </Button>
                </>
            )}
        </>
    );
};

export default LoginInfo;
