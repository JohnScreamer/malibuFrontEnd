import { FC, ReactNode } from "react";
import Typography from "./Typography.js";

type MainTitleType = {
    children: ReactNode;
    className?: string;
};

const MainTitle: FC<MainTitleType> = ({ children, className }) => {
    return (
        <Typography
            className={` max-[425px]:text-[26px] leading-normal ${className}`}
            bold
            tag="bigTitle"
            variant="XL"
        >
            {children}
        </Typography>
    );
};

export default MainTitle;
