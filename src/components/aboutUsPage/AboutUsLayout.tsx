import { FC, ReactNode } from "react";
import BreadCrumbs from "../uikit/breadCrumbs/BreadCrumbs.js";

type AboutUsLayoutType = {
    children: ReactNode;
    breadCrumbsArr: Array<{
        name: string;
        link: string;
    }>;
    countLabel?: ReactNode;
    isLoading?: boolean;
    lastName?: string;
    className?: string;
    secondClassName?: string;
};

const AboutUsLayout: FC<AboutUsLayoutType> = ({
    children,
    breadCrumbsArr,
    isLoading,
    lastName,
    className,
}) => {
    return (
        <main
            className={`flex-grow h-full w-full overflow-hidden ${className}`}
        >
            <div className="max-md:py-[19px] py-[27px] pb-20 max-md:pb-[60px] max-sm:pb-10 max-sm:py-[14px]">
                <div className={`mxCenter  `}>
                    <div className="flex flex-col gap-[27px] max-md:gap-[19px] max-sm:gap-[14px] ">
                        <BreadCrumbs
                            crumbsArr={breadCrumbsArr}
                            isLoading={isLoading}
                            lastName={lastName}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-[120px] max-md:gap-[100px] max-sm:gap-[80px]">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default AboutUsLayout;
