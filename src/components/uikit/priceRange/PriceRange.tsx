import React, { useState } from "react";

interface PriceRangeProps {}

const PriceRange: React.FC<PriceRangeProps> = () => {
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
    const priceGap = 1000;

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        let minPrice = parseInt(priceRange[0].toString());
        let maxPrice = parseInt(priceRange[1].toString());

        if (name === "minPrice") {
            minPrice = parseInt(value);
        } else {
            maxPrice = parseInt(value);
        }

        if (maxPrice - minPrice >= priceGap && maxPrice <= 100) {
            setPriceRange([minPrice, maxPrice]);
        }
    };

    const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let minVal = parseInt(event.target.value);
        let maxVal = parseInt(event.target.value) + priceGap;

        if (maxVal <= 100) {
            if (event.target.name === "minRange") {
                minVal = parseInt(event.target.value);
            } else {
                maxVal = parseInt(event.target.value);
            }
        }

        if (maxVal - minVal < priceGap) {
            if (event.target.name === "minRange") {
                minVal = maxVal - priceGap;
            } else {
                maxVal = minVal + priceGap;
            }
        }

        setPriceRange([minVal, maxVal]);
    };

    return (
        <div className="wrapper">
            <header>
                <h2>Price Range</h2>
            </header>
            <div className="price-input">
                <div className="field">
                    <span>$</span>
                    <input
                        type="number"
                        className="input-min"
                        value={priceRange[0]}
                        onChange={handlePriceChange}
                        name="minPrice"
                    />
                </div>
                <div className="field">
                    <span>$</span>
                    <input
                        type="number"
                        className="input-max"
                        value={priceRange[1]}
                        onChange={handlePriceChange}
                        name="maxPrice"
                    />
                </div>
            </div>
            <div className="slider">
                <div
                    className="progress"
                    style={{
                        left: `${(priceRange[0] / 100) * 100}%`,
                        right: `${100 - (priceRange[1] / 100) * 100}%`,
                    }}
                />
                <div className="range-input">
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={priceRange[0]}
                        onChange={handleRangeChange}
                        name="minRange"
                    />
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={priceRange[1]}
                        onChange={handleRangeChange}
                        name="maxRange"
                    />
                </div>
            </div>
        </div>
    );
};

export default PriceRange;
