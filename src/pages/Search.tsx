import { FC } from "react";
import GoodsList from "../components/goods/GoodsList.js";
import H2 from "../components/typography/H2.js";
import Typography from "../components/typography/Typography.js";
import { useSearchData } from "../hooks/useSearchData.js";

type SearchType = {};

const Search: FC<SearchType> = () => {
    const { data, isLoading, searchStr } = useSearchData();
    return (
        <main className="flex-grow h-full w-full">
            <div className="mxCenter py-5 pb-20 ">
                <div className="mb-[40px] max-md:mb-[24px] max-[425px]:mb-[16px] ">
                    <H2 className="mb-6  max-md:mb-[20px] max-[425px]:mb-[12px]">
                        Результат пошуку
                    </H2>
                    <Typography
                        variant="L"
                        tag="span"
                        className="max-md:text-xl max-[425px]:text-base"
                    >
                        по запиту{" "}
                        <span className="text-orange"> {searchStr}</span>
                    </Typography>
                </div>

                <GoodsList
                    isLoading={isLoading}
                    listSx="grid grid-cols-4"
                    listData={data?.data}
                />
            </div>
        </main>
    );
};

export default Search;
