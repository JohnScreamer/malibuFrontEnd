import { FC, useState } from "react";
import { GOOGLE_MAPS } from "../../../constants/googleMap.js";
import Button from "../../uikit/buttons/Button.js";

type GoogleMapType = {};

const GoogleMap: FC<GoogleMapType> = () => {
    const [currentPlace, setCurrentPlace] = useState<string>(
        GOOGLE_MAPS[0].name
    );

    return (
        <>
            <div className="flex gap-6 max-md:gap-4 flex-col">
                <div className="flex gap-4">
                    {GOOGLE_MAPS.map((el) => {
                        if (el.name === currentPlace) {
                            return (
                                <Button
                                    key={el.name}
                                    variant="secondary"
                                    size="mini"
                                >
                                    {el.name}
                                </Button>
                            );
                        }
                        return (
                            <Button
                                key={el.name}
                                variant="grey"
                                size="mini"
                                onClick={() => setCurrentPlace(el.name)}
                            >
                                {el.name}
                            </Button>
                        );
                    })}
                </div>

                {GOOGLE_MAPS.map((el) => {
                    if (el.name === currentPlace) {
                        return el.map;
                    }
                    return null;
                })}
            </div>
        </>
    );
};

export default GoogleMap;
