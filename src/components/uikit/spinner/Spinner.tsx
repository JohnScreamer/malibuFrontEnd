import { FC } from "react";

type SpinnerType = {};

const Spinner: FC<SpinnerType> = () => {
    return (
        <div className="fixed top-1/2 left-1/2 z-50">
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Spinner;
