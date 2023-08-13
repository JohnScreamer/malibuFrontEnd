export const isStringOrNumber = (currentValue: any) => {
    return typeof currentValue === "string" || typeof currentValue === "number"
        ? currentValue
        : "";
};
