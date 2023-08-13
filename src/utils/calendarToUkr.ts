const monthObj = {
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

export const calendarToUkr = () => {
    const fri = document.querySelector("[aria-label='Friday']");
    const str = document.querySelector("[aria-label='Saturday']");
    const sub = document.querySelector("[aria-label='Sunday']");
    const mon = document.querySelector("[aria-label='Monday']");
    const tus = document.querySelector("[aria-label='Tuesday']");
    const wen = document.querySelector("[aria-label='Wednesday']");
    const thu = document.querySelector("[aria-label='Thursday']");
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
    const month = document.getElementById(":r1:-grid-label");
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
