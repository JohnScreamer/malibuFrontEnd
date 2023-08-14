import Pagination from "rc-pagination";
import React from "react";
import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import NextSvg from "./NextSvg.js";
import "./Paginetion.less";
import PrevIcon from "./PrevIcon.js";
import ToFirstSvg from "./ToFirstSvg.js";
import TolastSvg from "./ToLastSvg.js";
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
                <ToFirstSvg />
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
                prevIcon={<PrevIcon />}
                nextIcon={<NextSvg />}
            />
            <button onClick={() => setPage(Math.floor(totalElem / pageSize))}>
                <TolastSvg />
            </button>
        </div>
    );
};

export default React.memo(PaginationWrapper);
