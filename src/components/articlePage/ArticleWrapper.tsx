import { FC } from "react";
import { BASE_URL } from "../../constants/global.env.js";
import Typography from "../typography/Typography.js";

type ArticleWrapperType = {
    text: string;
    img: string;
    subTitle: string;
};

const ArticleWrapper: FC<ArticleWrapperType> = ({ img, text, subTitle }) => {
    return (
        <article className="flex gap-4 flex-col">
            <div className="flex gap-4 max-md:flex-col">
                <div className="w-full flex flex-col gap-6">
                    <Typography
                        variant="S"
                        tag="title"
                        bold
                        className="max-md:text-2xl text-myGrey-mid"
                    >
                        {subTitle}
                    </Typography>
                </div>
                <div className="min-h-[150px] w-full">
                    <img
                        src={BASE_URL + img}
                        alt="article image"
                        className="object-cover h-full mx-auto"
                    />
                </div>
            </div>
            <Typography tag="text" variant="M" className="max-md:text-base">
                {text}
            </Typography>
        </article>
    );
};

export default ArticleWrapper;
