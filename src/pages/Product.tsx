import { FC } from "react";
import RatingWrapper from "../components/goods/RatingWrapper.js";
import PageLayout from "../components/layouts/DefaultPageLayout/PageLayout.js";
import DiscountList from "../components/productPage/GoodsList/DiscountList.js";
import LowPriceList from "../components/productPage/GoodsList/LowPriceList.js";
import ProductDetails from "../components/productPage/ProductDetails/ProductDetails.js";
import SimilarProduct from "../components/productPage/ProductDetails/SimilarProduct.js";
import ToCartBtnSection from "../components/productPage/ProductDetails/ToCartBtnSection.js";
import ProductImage from "../components/productPage/ProductImage/ProductImage.js";
import ProductName from "../components/productPage/ProductName.js";
import ProductPageWrapper from "../components/productPage/ProductPageWrapper.js";
import ProductRatingSection from "../components/productPage/ProductRatingSection/ProductRatingSection.js";
import ProductReviews from "../components/productPage/ProductReviews.js";
import DiscountLabel from "../components/uikit/discountLabel/DiscountLabel.js";
import { useProductFetching } from "../hooks/useProductFetching.js";

const Product: FC = () => {
    const { data, isLoading, crumbs } = useProductFetching();

    return (
        <PageLayout
            breadCrumbsArr={crumbs}
            lastName={data?.data.attributes.name}
            isLoading={isLoading}
        >
            <ProductPageWrapper
                images={
                    <ProductImage
                        images={data?.data.attributes.images.data}
                        discount={
                            <DiscountLabel
                                discountNom={data?.data.attributes.discount}
                            />
                        }
                        isLoading={isLoading}
                    />
                }
                topList={<LowPriceList />}
                details={
                    <ProductDetails
                        info={data?.data.attributes.describe}
                        isLoading={isLoading}
                        discount={data?.data.attributes.discount}
                        price={data?.data.attributes.price}
                    >
                        <ToCartBtnSection data={data?.data} />
                    </ProductDetails>
                }
                bottomList={<DiscountList />}
                reviews={
                    <ProductReviews
                        name={data?.data.attributes.name}
                        isProductLoading={isLoading}
                    />
                }
                similar={
                    <SimilarProduct
                        productType={
                            data?.data.attributes.catalog.data.attributes
                                .url_name
                        }
                        isLoading={isLoading}
                    />
                }
                rating={
                    <ProductRatingSection
                        productId={data?.data.id}
                        isLoading={isLoading}
                        product={data?.data}
                    >
                        <RatingWrapper
                            name={data?.data.attributes.name}
                            counter
                        />
                    </ProductRatingSection>
                }
                name={
                    <ProductName
                        name={data?.data.attributes.name}
                        isLoading={isLoading}
                    />
                }
            />
        </PageLayout>
    );
};

export default Product;
