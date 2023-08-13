import { FC } from "react";
import { GetAllCatalogResponse } from "../../types/filterCatalog.type.js";

import CatalogList from "./CatalogList.js";
import { CatalogSkeleton } from "./CatalogSkeleton.List.js";

type CatalogWrapperType = {
    data?: GetAllCatalogResponse;
    isLoading: boolean;
};

const CatalogWrapper: FC<CatalogWrapperType> = ({ data, isLoading }) => {
    return (
        <div className="  flex flex-col gap-32 max-md:gap-[100px] max-[425px]:gap-[80px]">
            <ul className=" grid grid-cols-4 max-md:grid-cols-3 gap-10 max-sm:gap-4 max-md:gap-8 max-[425px]:grid-cols-2">
                {!data ? <CatalogSkeleton /> : <CatalogList data={data} />}
            </ul>
        </div>
    );
};

export default CatalogWrapper;
