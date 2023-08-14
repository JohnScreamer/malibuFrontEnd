import { FC, ReactNode } from "react";
import Typography from "../../../typography/Typography.js";

type SimilarProductLayoutType = {
    children: ReactNode;
};

const SimilarProductLayout: FC<SimilarProductLayoutType> = ({ children }) => {
    return (
        <>
            <div>
                <Typography tag="span" className="text-myGrey mb-2" variant="S">
                    Схожі
                </Typography>
                <ul className="flex gap-4 flex-col max-lg:flex-row ">
                    {children}
                </ul>
            </div>
        </>
    );
};

export default SimilarProductLayout;
