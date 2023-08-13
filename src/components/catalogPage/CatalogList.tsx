import { FC } from "react";
import { BASE_URL } from "../../constants/global.env.js";
import { GetAllCatalogResponse } from "../../types/filterCatalog.type.js";
import { getImageURL } from "../../utils/getImageURL.js";
import CategoriesCard from "../goods/categorisCard/CategoriesCard.js";

type CatalogListType = {
    data: GetAllCatalogResponse;
};

const CatalogList: FC<CatalogListType> = ({ data }) => {
    return (
        <>
            {data.data.map((el, i) => {
                if (i + 1 === 1 || i + 1 === 10) {
                    return (
                        <li className="col-span-2 " key={el.id}>
                            <CategoriesCard
                                img={
                                    BASE_URL +
                                    el?.attributes?.image?.data?.attributes?.url
                                }
                                title={el.attributes.name}
                                link={`/catalog/${el.attributes.url_name}`}
                                className="h-[200px] max-md:h-[140px]"
                            />
                        </li>
                    );
                }
                return (
                    <li key={el.id}>
                        <CategoriesCard
                            img={
                                BASE_URL +
                                el?.attributes?.image?.data?.attributes?.url
                            }
                            title={el.attributes.name}
                            link={`/catalog/${el.attributes.url_name}`}
                            key={el.id}
                            className="h-[200px] max-md:h-[140px]   "
                        />
                    </li>
                );
            })}
        </>
    );
};

export default CatalogList;
