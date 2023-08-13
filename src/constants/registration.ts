export const STREETS = [
    { value: "Василя Стефаника", label: "Василя Стефаника" },
    { value: "Степана Бандери", label: "Степана Бандери" },
    { value: "Незалежності", label: "Незалежності" },
    { value: "Галицька", label: "Галицька" },
    { value: "Івана Франка", label: "Івана Франка" },
    { value: "Шевченка", label: "Шевченка" },
    { value: "Мельничука", label: "Мельничука" },
    { value: "Кобилянської", label: "Кобилянської" },
    { value: "Січових Стрільців", label: "Січових Стрільців" },
    { value: "Військових Ветеранів", label: "Військових Ветеранів" },
];
export const FIELDS = [
    {
        title: "Пошта",
        fieldName: "email",
        errorMassage: "Не вілідна пошта",
        fieldType: "email",
        isRequired: true,
    },
    {
        title: "ім'я",
        fieldName: "name",
        errorMassage: "Не вілідне ім'я",
        fieldType: "string",
        isRequired: true,
    },
    {
        title: "Фамілія",
        fieldName: "lastName",
        errorMassage: "Не вілідна фамілія",
        fieldType: "string",
        isRequired: true,
    },
    {
        title: "Пароль",
        fieldName: "password",
        errorMassage: "Не вілідний пароль",
        fieldType: "password",
        isRequired: true,
    },
    {
        title: "Повторити пароль",
        fieldName: "confirmPassword",
        errorMassage: "Не вілідний пароль",
        fieldType: "password",
        isRequired: true,
    },
] as const;
export const NOT_REQUEIRED_FIELDS = [
    {
        title: "Телефон",
        fieldName: "phone",
        errorMassage: "Не вілідний телефон",
        fieldType: "number",
        isRequired: false,
    },
    {
        title: "Номер карти",
        fieldName: "creditCard",
        errorMassage: "Не вілідний карта",
        fieldType: "number",
        isRequired: false,
    },
] as const;
export const PROFILE_FIELDS = [
    {
        title: "Пошта",
        fieldName: "email",
        errorMassage: "Не вілідна пошта",
        fieldType: "email",
        isRequired: true,
    },
    {
        title: "ім'я",
        fieldName: "name",
        errorMassage: "Не вілідне ім'я",
        fieldType: "string",
        isRequired: true,
    },
    {
        title: "Фамілія",
        fieldName: "lastName",
        errorMassage: "Не вілідна фамілія",
        fieldType: "string",
        isRequired: true,
    },
] as const;
