import { FC } from "react";
import { Link } from "react-router-dom";
import Typography from "../../typography/Typography.js";

type CategoriesCardType = {
    title: string;
    link: string;
    img: string;
    className?: string;
};

const CategoriesCard: FC<CategoriesCardType> = ({
    link,
    title,
    img,
    className,
}) => {
    return (
        <Link to={link}>
            <div
                className={` bg-slate-200   relative rounded overflow-hidden  cursor-pointer  group duration-300 ${className}`}
            >
                <img
                    src={img}
                    alt="categories image"
                    className="object-cover absolute w-full h-full"
                />
                <div className=" w-full h-[70%] absolute bottom-0 ">
                    <div className="bg-gradient-to-b from-transparent via-60% to-[rgba(255, 102, 51, 0)] group-hover:to-orange to-myGreen duration-300 w-full bottom-0 h-full z-20 absolute">
                        <Typography
                            bold
                            className="text-white absolute bottom-0 text-center p-[10px] mt-auto"
                        >
                            {title}
                        </Typography>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CategoriesCard;
