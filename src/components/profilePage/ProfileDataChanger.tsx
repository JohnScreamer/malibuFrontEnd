import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProfileFieldsType } from "../../types/registrationFileds.js";
import Typography from "../typography/Typography.js";
import Button from "../uikit/buttons/Button.js";
import NotRequiredFields from "./NotRequeredFields.js";
import RequiredFields from "./RequiredFields.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { USER_CHANGE_PROFILE_VALIDATION } from "./../../utils/validation/yup.js";
import { useGtValidUserData } from "../../hooks/useGtValidUSerData.js";
import { useChangeUserProfile } from "../../hooks/fetching_mutation/useChangeUserProfile.js";
import Spinner from "../uikit/spinner/Spinner.js";
type ProfileDataChangerType = {};

const ProfileDataChanger: FC<ProfileDataChangerType> = () => {
    const values = useGtValidUserData();
    const { changeProfileData, isLoading } = useChangeUserProfile();
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<ProfileFieldsType>({
        mode: "onBlur",
        //@ts-ignore
        resolver: yupResolver(USER_CHANGE_PROFILE_VALIDATION),
        values,
    });
    const onSubmit: SubmitHandler<ProfileFieldsType> = (data) => {
        console.log(data);
        changeProfileData(data);
    };

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                id="myForm"
                className="center flex-col gap-10 w-full "
            >
                <Typography
                    bold
                    variant="M"
                    className="text-center"
                    tag="title"
                >
                    Змінити данні
                </Typography>
                <Typography
                    bold
                    variant="XS"
                    className="text-center"
                    tag="title"
                >
                    Обовязкові поля
                </Typography>
                <RequiredFields control={control} errors={errors} />
                <Typography
                    bold
                    variant="XS"
                    className="text-center"
                    tag="title"
                >
                    Не обовязкові поля
                </Typography>
                <NotRequiredFields control={control} errors={errors} />
                <div className="min-w-[228px]">
                    <Button size="big" full disabled={!isValid}>
                        Підтвердити зміну
                    </Button>
                </div>
                {isLoading && <Spinner />}
            </form>
        </>
    );
};

export default ProfileDataChanger;
