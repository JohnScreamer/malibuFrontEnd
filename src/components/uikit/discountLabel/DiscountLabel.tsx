import { FC } from "react";
import Typography from "../../typography/Typography.js";

type DiscountLabelType = {
    discountNom?: number;
    className?: string;
};

const DiscountLabel: FC<DiscountLabelType> = ({ discountNom, className }) => {
    if (!discountNom) return null;
    return (
        <div className=" bg-orange py-1 px-2 rounded max-[425px]:py-[3px]">
            <Typography
                className={`text-white ${className}`}
            >{`-${discountNom}%`}</Typography>
        </div>
    );
};

export default DiscountLabel;
