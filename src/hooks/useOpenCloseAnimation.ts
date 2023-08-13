import { useEffect, useState } from "react";
type AnimeType = "open" | "close";
export const useOpenCloseAnimation = (callback: () => void) => {
    const [currentAnimation, setCurrentAnimation] = useState<AnimeType>("open");

    const closeCallback = () => {
        setCurrentAnimation("close");
        setTimeout(() => {
            callback();
        }, 500);
    };
    useEffect(() => {
        return () => {
            setCurrentAnimation("close");
        };
    }, []);

    return { currentAnimation, closeCallback };
};
