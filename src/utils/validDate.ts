export function unixTimeToDayMonthYear(unixTime: unknown) {
    if (typeof unixTime !== "number") return "немає дати";
    const date = new Date(unixTime);

    const day = String(date.getUTCDate() + 1).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getUTCFullYear();

    const formattedDate = `${date.getUTCDate()}`;

    return formattedDate;
}
