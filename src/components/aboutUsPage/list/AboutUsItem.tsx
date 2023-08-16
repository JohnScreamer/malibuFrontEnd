import { FC } from "react";
import Typography from "../../typography/Typography.js";
import CheckedSvg from "./CheckedSvg.js";

type AboutUsItemType = {
    title: string;
    subTitle: string;
};

const AboutUsItem: FC<AboutUsItemType> = ({ subTitle, title }) => {
    return (
        <li className="flex items-start gap-[10px]">
            <div>
                <CheckedSvg />
            </div>
            <div className="flex flex-col gap-4 max-lg:gap-2">
                <Typography
                    className="text-[20px] max-md:text-[14px] "
                    tag="span"
                >
                    {title}
                </Typography>

                <Typography
                    variant="L"
                    className="max-md:text-[14px]"
                    tag="span"
                    bold
                >
                    {subTitle}
                </Typography>
            </div>
        </li>
    );
};

export default AboutUsItem;
