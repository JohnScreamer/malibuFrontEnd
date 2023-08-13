import { FC, ReactNode } from "react";
import MainTitle from "../typography/MainTitle.js";
import BreadCrumbs from "../uikit/breadCrumbs/BreadCrumbs.js";

type OrderPageWrapperType = {
    children: ReactNode;
};
const arr = [
    { name: "Головна", link: "/" },
    { name: "Замовлення", link: "" },
];
const OrderPageWrapper: FC<OrderPageWrapperType> = ({ children }) => {
    return (
        <main className="flex-grow h-full w-full ">
            <div className="mxCenter flex flex-col max-md:gap-10 gap-[60px] pb-20 pt-6">
                <div className="">
                    <BreadCrumbs crumbsArr={arr} />
                    <MainTitle className="max-md:text-4xl">
                        Замовлення
                    </MainTitle>
                </div>
                {children}
            </div>
        </main>
    );
};

export default OrderPageWrapper;
