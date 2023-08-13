import { FC, ReactNode } from "react";

type MainWrapperType = {
    banner: ReactNode;
    children: ReactNode;
};

const MainWrapper: FC<MainWrapperType> = ({ banner, children }) => {
    return (
        <main className="flex-grow h-full w-full ">
            <div>{banner}</div>
            <div className="mxCenter py-5 flex flex-col gap-[120px] max-md:gap-[100px] max-[425px]:gap-[80px]">
                {children}
            </div>
        </main>
    );
};

export default MainWrapper;
