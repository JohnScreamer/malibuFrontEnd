import Pagination from "rc-pagination";
import React from "react";
import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import "./Paginetion.less";
type PaginationWrapperPropsType = {
    totalElem?: number;
    currentPage?: number;
    pageSize?: number;
    setPage: (page: number) => void;
    isLoading: boolean;
};
const PaginationWrapper: FC<PaginationWrapperPropsType> = (props) => {
    const {
        currentPage,
        totalElem = 0,
        pageSize = 10,
        setPage,
        isLoading,
    } = props;
    if (isLoading) {
        return <Skeleton className="w-1/3 h-4" />;
    }

    if (Math.ceil(totalElem / pageSize) < 2) {
        return null;
    }
    return (
        <div className="flex gap-2">
            <button onClick={() => setPage(1)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className=" hover:fill-orange"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.3536 6.64645C11.5488 6.84171 11.5488 7.15829 11.3536 7.35355L6.70711 12L11.3536 16.6464C11.5488 16.8417 11.5488 17.1583 11.3536 17.3536C11.1583 17.5488 10.8417 17.5488 10.6464 17.3536L5.64645 12.3536C5.45118 12.1583 5.45118 11.8417 5.64645 11.6464L10.6464 6.64645C10.8417 6.45118 11.1583 6.45118 11.3536 6.64645Z"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.3536 6.64645C18.5488 6.84171 18.5488 7.15829 18.3536 7.35355L13.7071 12L18.3536 16.6464C18.5488 16.8417 18.5488 17.1583 18.3536 17.3536C18.1583 17.5488 17.8417 17.5488 17.6464 17.3536L12.6464 12.3536C12.4512 12.1583 12.4512 11.8417 12.6464 11.6464L17.6464 6.64645C17.8417 6.45118 18.1583 6.45118 18.3536 6.64645Z"
                    />
                </svg>
            </button>
            <Pagination
                defaultCurrent={currentPage}
                total={totalElem}
                defaultPageSize={pageSize}
                onChange={(e) => setPage(e)}
                style={{}}
                pageSizeOptions={["10", "20", "50", "100"]}
                current={currentPage}
                showPrevNextJumpers={false}
                showLessItems={false}
                prevIcon={
                    <div className="h-full center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className=" hover:fill-orange"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.3536 5.64645C15.5488 5.84171 15.5488 6.15829 15.3536 6.35355L9.70711 12L15.3536 17.6464C15.5488 17.8417 15.5488 18.1583 15.3536 18.3536C15.1583 18.5488 14.8417 18.5488 14.6464 18.3536L8.64645 12.3536C8.45118 12.1583 8.45118 11.8417 8.64645 11.6464L14.6464 5.64645C14.8417 5.45118 15.1583 5.45118 15.3536 5.64645Z"
                            />
                        </svg>
                    </div>
                }
                nextIcon={
                    <div className=" h-full center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="rotate-180 hover:fill-orange"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.3536 5.64645C15.5488 5.84171 15.5488 6.15829 15.3536 6.35355L9.70711 12L15.3536 17.6464C15.5488 17.8417 15.5488 18.1583 15.3536 18.3536C15.1583 18.5488 14.8417 18.5488 14.6464 18.3536L8.64645 12.3536C8.45118 12.1583 8.45118 11.8417 8.64645 11.6464L14.6464 5.64645C14.8417 5.45118 15.1583 5.45118 15.3536 5.64645Z"
                            />
                        </svg>
                    </div>
                }
            />
            <button onClick={() => setPage(Math.floor(totalElem / pageSize))}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className=" hover:fill-orange"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.6464 6.64645C12.8417 6.45118 13.1583 6.45118 13.3536 6.64645L18.3536 11.6464C18.5488 11.8417 18.5488 12.1583 18.3536 12.3536L13.3536 17.3536C13.1583 17.5488 12.8417 17.5488 12.6464 17.3536C12.4512 17.1583 12.4512 16.8417 12.6464 16.6464L17.2929 12L12.6464 7.35355C12.4512 7.15829 12.4512 6.84171 12.6464 6.64645Z"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.64645 6.64645C5.84171 6.45118 6.15829 6.45118 6.35355 6.64645L11.3536 11.6464C11.5488 11.8417 11.5488 12.1583 11.3536 12.3536L6.35355 17.3536C6.15829 17.5488 5.84171 17.5488 5.64645 17.3536C5.45118 17.1583 5.45118 16.8417 5.64645 16.6464L10.2929 12L5.64645 7.35355C5.45118 7.15829 5.45118 6.84171 5.64645 6.64645Z"
                    />
                </svg>
            </button>
        </div>
    );
};

export default React.memo(PaginationWrapper);
