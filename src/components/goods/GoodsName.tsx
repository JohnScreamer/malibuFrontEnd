import { FC } from "react";
import Typography from "../typography/Typography.js";

type GoodsNameType = {
    children: string;
};

const GoodsName: FC<GoodsNameType> = ({ children }) => {
    return (
        <Typography
            tag="span"
            className="max-[425px]:text-xs tw-line-clamp-2 "
            variant="S"
        >
            {children}
        </Typography>
    );
};

export default GoodsName;
