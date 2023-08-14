import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { getHomePage } from "../api/query_request.js";
import GoodsList from "../components/goods/GoodsList.js";
import MainWrapper from "../components/mainPage/MainWrapper.js";
import ArticleList from "../components/mainPage/article/ArticleList.js";
import Banner from "../components/mainPage/banner/Banner.js";
import { BASE_URL } from "../constants/global.env.js";

type HomeType = {};

const Home: FC<HomeType> = () => {
    const { data, isLoading } = useQuery(["home"], getHomePage);

    const homeData = data?.data.attributes;

    return (
        <>
            <MainWrapper
                banner={
                    <Banner
                        isLoading={isLoading}
                        img={`${BASE_URL}${homeData?.home_main_banner?.img?.data?.attributes?.url}`}
                    />
                }
            >
                <GoodsList
                    categoriesName={homeData?.top_list.name}
                    isLoading={isLoading}
                    listData={homeData?.top_list.products.data}
                    listSx="grid-cols-4"
                />
                <GoodsList
                    categoriesName={homeData?.bottom_list.name}
                    isLoading={isLoading}
                    listData={homeData?.bottom_list.products.data}
                    listSx="grid-cols-4"
                />
                <GoodsList
                    categoriesName={homeData?.middle_list.name}
                    isLoading={isLoading}
                    listData={homeData?.middle_list.products.data}
                    listSx="grid-cols-4"
                />

                <ArticleList
                    articles={data?.data.attributes.articles.data}
                    isLoading={isLoading}
                    moreLink="Всі статті"
                />
            </MainWrapper>
        </>
    );
};

export default Home;
