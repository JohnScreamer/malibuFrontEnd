export function unixTimeToDayMonthYear(unixTime: unknown) {
    if (typeof unixTime !== "number") return "немає дати";
    const date = new Date(unixTime);

    const formattedDate = `${date.getUTCDate()}`;

    return formattedDate;
}
