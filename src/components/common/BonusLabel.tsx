import { FC } from "react";
import Typography from "../typography/Typography.js";

type BonusLabelType = {};

const BonusLabel: FC<BonusLabelType> = () => {
    return (
        <Typography
            variant="XS"
            tag="span"
            className="p-2 gap-2  text-myGreen center"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="12"
                viewBox="0 0 24 12"
                fill="none"
            >
                <path
                    d="M23.1883 0.666992H0.811961C0.343143 0.666992 -0.0396916 1.05861 0.0033005 1.52089C0.494639 7.01168 5.67826 11.3337 12.0001 11.3337C18.322 11.3337 23.5056 7.0137 23.997 1.52089C24.0379 1.05861 23.6571 0.666992 23.1883 0.666992Z"
                    fill="#70C05B"
                />
            </svg>
            <div>
                Ви получете
                <span className="font-bold"> 10 бонусів</span>
            </div>
        </Typography>
    );
};

export default BonusLabel;
