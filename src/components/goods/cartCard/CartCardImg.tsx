import { FC } from "react";

type CartCardImgType = {
    imgUrl: string;
};

const CartCardImg: FC<CartCardImgType> = ({ imgUrl }) => {
    return (
        <div className="shadow-md shrink-0 rounded bg-white inline-flex justify-center max-[425px]:min-w-[104px] max-[425px]:min-h-[78px] w-[80px] h-[60px]">
            <img
                alt="goods img"
                className="object-cover  grow-1  h-full"
                src={imgUrl}
            />
        </div>
    );
};

export default CartCardImg;
