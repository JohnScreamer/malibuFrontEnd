import { FC } from "react";
import Typography from "../../typography/Typography.js";
import GoogleMap from "./GoogleMap.js";

type MapWrapperType = {};

const MapWrapper: FC<MapWrapperType> = () => {
    return (
        <div className="flex flex-col gap-10 max-md:gap-8 max-sm:gap-4">
            <Typography
                variant="M"
                className="max-md:text-[24px]"
                tag="title"
                bold
            >
                Наші магазини
            </Typography>

            <GoogleMap />
        </div>
    );
};

export default MapWrapper;
