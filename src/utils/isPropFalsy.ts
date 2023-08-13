export const isPropsFalsy = <T extends Record<string, any>>(obj: T) => {
    return Object.keys(obj).reduce((acc, el: keyof T) => {
        if (!!obj[el]) {
            acc[el] = obj[el];
        }

        return acc;
    }, {} as T);
};
