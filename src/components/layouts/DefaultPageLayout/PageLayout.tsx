import { FC, ReactNode } from "react";
import MainTitle from "../../typography/MainTitle.js";
import BreadCrumbs from "../../uikit/breadCrumbs/BreadCrumbs.js";

type PageLayoutType = {
    children: ReactNode;
    breadCrumbsArr: Array<{
        name: string;
        link: string;
    }>;
    title?: string;
    countLabel?: ReactNode;
    isLoading?: boolean;
    lastName?: string;
    className?: string;
};

const PageLayout: FC<PageLayoutType> = ({
    children,
    breadCrumbsArr,
    title,
    countLabel,
    isLoading,
    lastName,
    className,
}) => {
    return (
        <main className={`flex-grow h-full w-full ${className}`}>
            <div className="mxCenter max-md:py-[19px] py-[27px] pb-20 max-md:pb-[60px] max-sm:pb-10 max-sm:py-[14px]">
                <div className="flex flex-col gap-[27px] max-md:gap-[19px] max-sm:gap-[14px] ">
                    <BreadCrumbs
                        crumbsArr={breadCrumbsArr}
                        isLoading={isLoading}
                        lastName={lastName}
                    />
                    {!!title && (
                        <div
                            className={`${
                                !!countLabel && "flex items-center"
                            } mb-[60px] max-md:mb-[40px] max-sm:mb-[32px]`}
                        >
                            <MainTitle>{title}</MainTitle>
                            {countLabel}
                        </div>
                    )}
                </div>
                {children}
            </div>
        </main>
    );
};

export default PageLayout;
