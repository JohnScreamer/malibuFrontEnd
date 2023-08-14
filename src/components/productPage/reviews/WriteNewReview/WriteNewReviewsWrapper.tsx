import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { REVIEW_VALIDATION } from "../../../../utils/validation/reviewValidation.js";
import { useCreateReview } from "../../../../hooks/fetching_mutation/useCreateReview.js";
import NewReviewLayout from "./NewReviewLayout.js";
import NewReviewFields from "../NewReviewFields.js";
export type ReviewType = {
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

    return (
        <NewReviewLayout
            isLoading={isLoading}
            isValid={isValid}
            createLoading={createLoading}
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
        >
            <NewReviewFields control={control} errors={errors} />
        </NewReviewLayout>
    );
};

export default WriteNewReviewsWrapper;
