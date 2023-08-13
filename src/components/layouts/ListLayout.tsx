import { FC, ReactNode } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import H2 from "../typography/H2.js";
import Button from "../uikit/buttons/Button.js";

type ListLayoutType = {
    listName?: string;
    listSx?: string;
    children: ReactNode;
    moreBtnName?: string;
    moreBtnLink?: string;
    isLoading?: boolean;
};

const ListLayout: FC<ListLayoutType> = ({
    listName,
    listSx,
    children,
    moreBtnLink,
    moreBtnName,
    isLoading,
}) => {
    const navigate = useNavigate();
    const goTo = () => {
        if (!moreBtnLink) return;
        navigate(moreBtnLink);
    };
    const name = !!listName && <H2 className=" ">{listName}</H2>;
    const nameSkeleton = (
        <Skeleton className="w-[150px] max-md:h-[24px] h-[36px] " />
    );
    const isMoreBtnVisible = !!listName && !!moreBtnName;
    return (
        <>
            <div>
                <div className="flex mb-10 max-md:mb-8 max-[425px]:mb-4 gap-2 justify-between items-end">
                    {isLoading ? nameSkeleton : name}
                    {isMoreBtnVisible && (
                        <Button
                            onClick={goTo}
                            variant="grey"
                            filledType="empty"
                            className="hover:text-orange group"
                            rightElem={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z"
                                        fill="#606060"
                                    />
                                </svg>
                            }
                        >
                            {moreBtnName}
                        </Button>
                    )}
                </div>
                <ul
                    className={`grid ${listSx} gap-10 max-lg:gap-4 max-lg:grid-cols-2 grid-cols-3 
                                max-sm:grid-cols-1 max-[425px]:gap-2  `}
                >
                    {children}
                </ul>
            </div>
        </>
    );
};

export default ListLayout;
