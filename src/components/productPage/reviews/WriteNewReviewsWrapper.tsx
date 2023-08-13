import { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Typography from "../../typography/Typography.js";
import Button from "../../uikit/buttons/Button.js";
import Field from "../../uikit/field/Field.js";
import Rating from "../../uikit/rating/Rating.js";
import Tooltips from "../../uikit/tooltips/Tooltips.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { REVIEW_VALIDATION } from "./../../../utils/validation/reviewValidation.js";
import Skeleton from "react-loading-skeleton";
import { useCreateReview } from "../../../hooks/fetching_mutation/useCreateReview.js";
import Spinner from "../../uikit/spinner/Spinner.js";
type ReviewType = {
    comment: string;
    score: number;
};

type WriteNewReviewsWrapperType = {
    isLoading: boolean;
    productName: string;
};

const WriteNewReviewsWrapper: FC<WriteNewReviewsWrapperType> = ({
    isLoading,
    productName,
}) => {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<ReviewType>({
        mode: "onBlur",
        values: { score: 0, comment: "" },
        //@ts-ignore
        resolver: yupResolver(REVIEW_VALIDATION),
    });
    const { isLoading: createLoading, createReview } =
        useCreateReview(productName);

    const onSubmit: SubmitHandler<ReviewType> = (data) => {
        createReview({ body: data, productName });
    };
    if (isLoading) {
        return <Skeleton className="w-full max-sm:h-28 h-48" />;
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
            <div>
                <Button disabled={!isValid}>Відправити відгук</Button>
            </div>
            {createLoading && <Spinner />}
        </form>
    );
};

export default WriteNewReviewsWrapper;
