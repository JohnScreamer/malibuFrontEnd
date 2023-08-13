import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import Typography from "../typography/Typography.js";

type ProductNameType = {
    name?: string;
    isLoading: boolean;
};

const ProductName: FC<ProductNameType> = ({ name, isLoading }) => {
    return (
        <>
            <Typography
                tag="title"
                className="max-sm:text-[20px] leading-6"
                variant="S"
                bold
            >
                {isLoading || !name ? (
                    <div className="w-3/4">
                        <Skeleton />
                    </div>
                ) : (
                    name
                )}
            </Typography>
        </>
    );
};

export default ProductName;
