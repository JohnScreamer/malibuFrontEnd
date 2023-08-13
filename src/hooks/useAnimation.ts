import { useState } from "react";

export const useAnimation = () => {
    const [isAnimating, setAnimating] = useState(false);
    const toggleAnimation = () => {
        setAnimating(true);
        setTimeout(() => {
            setAnimating(false);
        }, 400);
    };
    return { isAnimating, toggleAnimation } as const;
};
