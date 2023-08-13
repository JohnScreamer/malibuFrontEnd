import { FC, ReactNode } from "react";
import Typography from "./Typography.js";

type H2Type = {
    children: ReactNode;
    className?: string;
};

const H2: FC<H2Type> = ({ children, className }) => {
    return (
        <Typography
            className={` max-md:text-2xl   leading-normal ${className}`}
            bold
            tag="title"
            variant="M"
        >
            {children}
        </Typography>
    );
};

export default H2;
