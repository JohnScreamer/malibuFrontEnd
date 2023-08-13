export type FieldsType = {
    name: string;
    lastName: string;
    password: string;
    email: string;
    phone: string;
    confirmPassword: string;
    creditCard: string;
    birthDay: string;
    street: string;
    gender: "чоловік" | "жінка";
    username: string;
};
export type ProfileFieldsType = {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    creditCard: string;
    birthDay: string;
    gender: "чоловік" | "жінка";
    username: string;
};

export const useDATA: FieldsType = {
    confirmPassword: "HellowWordld!2",
    username: "zxcccerfname",
    email: "my_em44df@example.com",
    password: "HellowWordld!2",
    name: "Іван",
    lastName: "Кричук",
    birthDay: "1990-05-15",
    gender: "жінка",
    creditCard: "13344124124124",
    phone: "12312126641124",
    street: "banderu",
};
