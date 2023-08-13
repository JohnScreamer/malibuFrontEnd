export const toUKRDateType = (date: number) => {
    const ukrDate = new Intl.DateTimeFormat("ua");
    return ukrDate.format(date);
};
