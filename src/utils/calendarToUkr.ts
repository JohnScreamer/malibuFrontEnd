const monthObj: Record<string, string> = {
    January: "Січень",
    February: "Лютий",
    March: "Березень",
    April: "Квітень",
    May: "Травень",
    June: "Червень",
    July: "Липень",
    August: "Серпень",
    September: "Вересень",
    October: "Жовтень",
    November: "Листопад",
    December: "Грудень",
};

export const calendarToUkr = (): void => {
    const fri = document.querySelector(
        "[aria-label='Friday']"
    ) as HTMLElement | null;
    const str = document.querySelector(
        "[aria-label='Saturday']"
    ) as HTMLElement | null;
    const sub = document.querySelector(
        "[aria-label='Sunday']"
    ) as HTMLElement | null;
    const mon = document.querySelector(
        "[aria-label='Monday']"
    ) as HTMLElement | null;
    const tus = document.querySelector(
        "[aria-label='Tuesday']"
    ) as HTMLElement | null;
    const wen = document.querySelector(
        "[aria-label='Wednesday']"
    ) as HTMLElement | null;
    const thu = document.querySelector(
        "[aria-label='Thursday']"
    ) as HTMLElement | null;

    if (fri) {
        fri.innerHTML = "Пт";
    }
    if (str) {
        str.innerHTML = "Сб";
    }
    if (mon) {
        mon.innerHTML = "Пн";
    }
    if (wen) {
        wen.innerHTML = "Ср";
    }
    if (thu) {
        thu.innerHTML = "Чт";
    }
    if (sub) {
        sub.innerHTML = "Нд";
    }
    if (tus) {
        tus.innerHTML = "Вт";
    }

    const month = document.getElementById(
        ":r1:-grid-label"
    ) as HTMLElement | null;
    if (month) {
        const montDAta = month.innerHTML;

        month.innerHTML = montDAta
            .split(" ")
            .map((el) => {
                if (monthObj[el]) {
                    return monthObj[el];
                }
                return el;
            })
            .join(" ");
    }
};
