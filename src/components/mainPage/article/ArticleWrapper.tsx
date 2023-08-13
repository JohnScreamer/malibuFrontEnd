import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../constants/global.env.js";
import { toUKRDateType } from "../../../utils/toUKRDateType.js";
import Typography from "../../typography/Typography.js";
import Button from "../../uikit/buttons/Button.js";

export type ArticleWrapperType = {
    title: string;
    text: string;
    date: string;
    img: string;
    id: number;
};

const ArticleWrapper: FC<ArticleWrapperType> = ({
    date,
    img,
    text,
    title,
    id,
}) => {
    const navigate = useNavigate();
    const handlerMoreArticle = () => {
        navigate(`/article/${id}`);
    };
    return (
        <article className="flex flex-col rounded overflow-hidden duration-300 cardDefaultShadow hover:primaryBoxShadow bg-white h-full group">
            <img
                src={BASE_URL + img}
                className="object-cover  h-[165px] w-full "
            />

            <div className="flex flex-col p-[10px] gap-[10px] h-full ">
                <Typography
                    tag="span"
                    variant="XS"
                    className="text-myGrey-soft max-md:text-[10px]"
                >
                    {toUKRDateType(new Date(date).getTime())}
                </Typography>
                <Typography
                    variant="XS"
                    bold
                    tag="title"
                    className="max-md:text-base"
                >
                    {title}
                </Typography>
                <Typography variant="S" tag="text" className="max-md:text-sm">
                    {text}
                </Typography>
                <Button
                    className="mt-auto ui-btn-secondary-disabled group-hover:ui-btn-secondary"
                    variant="secondary"
                    onClick={handlerMoreArticle}
                >
                    Детальніше
                </Button>
            </div>
        </article>
    );
};

export default ArticleWrapper;
