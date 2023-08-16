import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import Typography from "../../../typography/Typography.js";

type TelephoneType = {
    phone?: string;
    isLoading?: boolean;
};

const Telephone: FC<TelephoneType> = ({ isLoading, phone }) => {
    if (isLoading || !phone) {
        return (
            <Typography tag="span" variant="S">
                <Skeleton className="h-full w-80px" />
            </Typography>
        );
    }
    return (
        <>
            <Typography tag="span" variant="S">
                {phone}
            </Typography>
        </>
    );
};

export default Telephone;
