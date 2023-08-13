import { Slider, styled } from "@mui/material";
import * as React from "react";
import { debounce } from "../../../utils/debounce.js";

function valuetext(value: number) {
    return `${value}°C`;
}
const PrettoSlider = styled(Slider)({
    color: "#70C05B",
    height: 8,
    "& .MuiSlider-track": {
        border: "none",
        backgroundColor: "#70C05B",
    },
    "& .MuiSlider-thumb": {
        height: 24,
        width: 24,
        backgroundColor: "#70C05B",
        border: "1px solid white",

        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "inherit",
        },
        "&:before": {
            display: "none",
        },
    },
    "& .MuiSlider-rail": {
        color: "#F3F2F1",
    },
});
type InputRangeType = {
    minDistance: number;
    min: number;
    max: number;
    currentMin: number;
    currentMax: number;
    setCurrentProp: (min: number, max: number) => void;
};

const InputRange: React.FC<InputRangeType> = ({
    minDistance = 10,
    max,
    min,
    currentMax,
    currentMin,
    setCurrentProp,
}) => {
    const [value1, setValue1] = React.useState<number[]>([
        currentMin,
        currentMax,
    ]);

    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number
    ) => {
        if (event) {
        }
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([
                Math.min(newValue[0], value1[1] - minDistance),
                value1[1],
            ]);
        } else {
            setValue1([
                value1[0],
                Math.max(newValue[1], value1[0] + minDistance),
            ]);
        }
    };
    const rewrite = debounce(setCurrentProp, 400);
    React.useEffect(() => {
        rewrite(value1[0], value1[1]);
    }, [value1[0], value1[1]]);

    return (
        <PrettoSlider
            getAriaLabel={() => "Minimum distance"}
            value={value1}
            onChange={handleChange1}
            min={min}
            max={max}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            color="secondary"
            disableSwap
        />
    );
};
export default InputRange;
