import { ImageDataType } from "./../types/pages/homePage.type.js";
export const getImageURL = (el: ImageDataType, revers?: boolean) => {
    if (revers) {
        return (
            el?.attributes?.url ||
            el?.attributes?.formats?.thumbnail?.url ||
            el?.attributes?.formats?.small?.url
        );
    }

    return (
        el?.attributes?.formats?.small?.url ||
        el?.attributes?.formats?.thumbnail?.url ||
        el?.attributes?.url
    );
};
