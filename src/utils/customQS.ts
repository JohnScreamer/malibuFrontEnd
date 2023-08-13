import { isPropsFalsy } from "./isPropFalsy.js";

export const customQS = <T extends Record<string, any>>(obj: T) => {
    const withoutFalsy = isPropsFalsy(obj);
    const params = new URLSearchParams();
    Object.keys(withoutFalsy).reduce((acc, el) => {
        acc.append(el, withoutFalsy[el]);
        return acc;
    }, params);

    return params.toString();
};
