import Field from "../../uikit/field/Field.js";
import { FC } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import Typography from "../../typography/Typography.js";
import Rating from "../../uikit/rating/Rating.js";
import Tooltips from "../../uikit/tooltips/Tooltips.js";
import { ReviewType } from "./WriteNewReview/WriteNewReviewsWrapper.js";
type NewReviewFieldsType = {
    control: Control<ReviewType, any>;
    errors: FieldErrors<ReviewType>;
};

const NewReviewFields: FC<NewReviewFieldsType> = ({ control, errors }) => {
    return (
        <>
            <div className="flex items-center gap-4">
                <Typography bold variant="S" tag="span">
                    Ваша оцінка
                </Typography>

                <Controller
                    name={"score"}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <div className="relative">
                            <Rating
                                big
                                ratingNum={field.value}
                                setRating={field.onChange}
                            />
                            {!!errors.score && (
                                <Tooltips
                                    arrowSide="b"
                                    variant="error"
                                    className="text-sm"
                                    withSvg
                                >
                                    Виберіть рейтинг
                                </Tooltips>
                            )}
                        </div>
                    )}
                />
            </div>
            <div>
                <Controller
                    name={"comment"}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Field
                            sizeType="small"
                            className="h-[90px]"
                            placeholder="Відгук"
                            textarea
                            maxLength={200}
                            tooltip={
                                errors.comment && (
                                    <Tooltips
                                        arrowSide="b"
                                        variant="error"
                                        className="text-sm"
                                        withSvg
                                    >
                                        {errors.comment?.message ||
                                            "Обовязкове поле"}
                                    </Tooltips>
                                )
                            }
                            {...field}
                        />
                    )}
                />
            </div>
        </>
    );
};

export default NewReviewFields;
