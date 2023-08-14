import { FC } from "react";
import { useUserAuth } from "../../hooks/useUserAuth.js";
import H2 from "../typography/H2.js";
import Button from "../uikit/buttons/Button.js";

type UserProfileInfoType = {};

const UserProfileInfo: FC<UserProfileInfoType> = () => {
    const { isAuth, handlerOpenLoginModal, userData } = useUserAuth();

    return (
        <div className="flex flex-col max-md:gap-4 gap-6">
            <H2>Інформація про замовника</H2>
            {isAuth && userData ? (
                <table className="w-full">
                    <tbody>
                        <tr className={`bg-myGrey-light w-full`}>
                            <td className="text-[12px] leading-[18px] lea w-1/2 pr-1">
                                Імя:
                            </td>
                            <td className="text-[12px] leading-[18px] w-1/2 font-bold">
                                {userData.name}
                            </td>
                        </tr>
                        <tr>
                            <td className="text-[12px] leading-[18px] lea w-1/2 pr-1">
                                Пошта:
                            </td>
                            <td className="text-[12px] leading-[18px] w-1/2 font-bold">
                                {userData.email}
                            </td>
                        </tr>
                        <tr className={`bg-myGrey-light`}>
                            <td className="text-[12px] leading-[18px] lea w-1/2 pr-1">
                                Номер телефона:
                            </td>
                            <td className="text-[12px] leading-[18px] w-1/2 font-bold">
                                {userData.phone}
                            </td>
                        </tr>
                        <tr>
                            <td className="text-[12px] leading-[18px] lea w-1/2 pr-1">
                                ID замовника:
                            </td>
                            <td className="text-[12px] leading-[18px] w-1/2 font-bold">
                                {userData.id}
                            </td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <div className="inline">
                    <Button onClick={handlerOpenLoginModal}>Увійти</Button>
                </div>
            )}
        </div>
    );
};

export default UserProfileInfo;
