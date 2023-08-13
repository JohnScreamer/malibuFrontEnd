import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

type CartCardWrapperType = {
    imageSection?: ReactNode;
    amountPriceControlSection?: ReactNode;
    priceInfo?: ReactNode;
    name?: ReactNode;
    selectControl?: ReactNode;
    productId?: number;
};

const CartCardWrapper: FC<CartCardWrapperType> = ({
    imageSection,
    amountPriceControlSection,
    priceInfo,
    name,
    selectControl,
    productId,
}) => {
    return (
        <>
            <li className="relative w-full">
                <Link to={`/product/${productId}`}>
                    <div className=" rounded overflow-hidden flex bg-white justify-between  duration-300 max-[425px]:flex-col cardDefaultShadow hover:primaryBoxShadow">
                        <div className="flex w-[73%] max-[425px]:w-full items-start  gap-2 ">
                            {imageSection}
                            <div className="flex flex-col gap-[10px]   p-2 py-[10px]">
                                {name}
                                <div className="flex  items-start gap-2 max-md:gap-1">
                                    {priceInfo}
                                </div>
                            </div>
                        </div>
                        <div className="flex max-lg:flex-col  p-2 max-lg:p-1 max-[425px]:p-2 w-[27%] max-lg:items-end  gap-1 items-start max-md:items-end  max-md:w-auto justify-between max-[425px]:flex-row ">
                            {amountPriceControlSection}
                        </div>
                    </div>
                    <div className="absolute top-[-8px] left-[8px]">
                        {selectControl}
                    </div>
                </Link>
            </li>
        </>
    );
};

export default CartCardWrapper;
