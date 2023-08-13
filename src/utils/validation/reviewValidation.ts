import * as Yup from "yup";

export const REVIEW_VALIDATION = Yup.object().shape({
    comment: Yup.string()
        .min(5, "Текст повинен містити щонайменше 5 символів")
        .max(100, "Текст повинен містити не більше 199 символів")
        .required("Поле 'Текст' є обов'язковим"),

    score: Yup.number()
        .min(1, "Рейтинг повинен бути не менше 1")
        .required("Поле 'Рейтинг' є обов'язковим"),
});
