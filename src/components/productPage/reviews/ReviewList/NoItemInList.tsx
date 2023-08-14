import { FC } from "react";
import Typography from "../../../typography/Typography.js";
import NoReviewSVG from "../NoReviewSVG.js";

type NoItemInListType = {};

const NoItemInList: FC<NoItemInListType> = () => {
    return (
        <>
            <div className=" flex-col gap-3 center">
                <Typography bold variant="M" tag="span">
                    Немає відгуків, напиши свій.
                </Typography>
                <NoReviewSVG />
            </div>
        </>
    );
};

export default NoItemInList;
