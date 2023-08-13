import { getUserDataSelector } from "../redux/selectors/index.js";
import { ProfileFieldsType } from "../types/registrationFileds.js";
import { useAppSelector } from "./reduxHooks.js";
export const useGtValidUserData = (): ProfileFieldsType => {
    const userData = useAppSelector(getUserDataSelector);
    if (!userData) {
        return {
            birthDay: "",
            creditCard: "",
            email: "",
            gender: "жінка",
            lastName: "",
            name: "",
            phone: "",
            username: "",
        };
    }
    const {
        birthDay,
        email,
        gender,
        phone,
        lastName,
        name,
        username,
        creditCard,
    } = userData;

    return {
        birthDay,
        creditCard: creditCard || "",
        email,
        gender: gender as "жінка" | "чоловік",
        lastName,
        name,
        phone: phone || "",
        username,
    };
};
