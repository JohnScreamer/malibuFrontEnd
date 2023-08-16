import { FC, ReactNode } from "react";
import { SEARCH_CRUMBS } from "../../constants/breadCrumbsArr.js";
import PageLayout from "../layouts/DefaultPageLayout/PageLayout.js";
import Typography from "../typography/Typography.js";

type SearchPageWrapperType = {
    children: ReactNode;
    searchStr: string;
};

const SearchPageWrapper: FC<SearchPageWrapperType> = ({
    children,
    searchStr,
}) => {
    return (
        <>
            <PageLayout breadCrumbsArr={SEARCH_CRUMBS} title="Результат пошук">
                <div className="mb-[40px] max-md:mb-[24px] max-[425px]:mb-[16px] ">
                    <Typography
                        variant="L"
                        tag="span"
                        className="max-md:text-xl max-[425px]:text-base"
                    >
                        по запиту{" "}
                        <span className="text-orange"> {searchStr}</span>
                    </Typography>
                </div>
                {children}
            </PageLayout>
        </>
    );
};

export default SearchPageWrapper;
