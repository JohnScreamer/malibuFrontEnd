import * as yup from "yup";
export const ORDER_VALIDATION = yup
    .object({
        street: yup
            .string()
            .min(2, "Вулиця повинна містити принаймні 2 символи")
            .max(30, "Вулиця повинна бути не більше 30 символів")
            .required("Вулиця є обов'язковою"),
        house: yup.number().required("Номер є обов'язковим"),
        flat: yup.number().required("Номер є обов'язковим"),
        date: yup.string().required("Дата доставки є обов'язковою"),
    })
    .required();
