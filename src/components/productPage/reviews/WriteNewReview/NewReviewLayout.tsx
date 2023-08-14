import { FC, ReactNode } from "react";
import { SubmitHandler } from "react-hook-form";
import Skeleton from "react-loading-skeleton";
import Typography from "../../../typography/Typography.js";
import Button from "../../../uikit/buttons/Button.js";
import Spinner from "../../../uikit/spinner/Spinner.js";
import { ReviewType } from "./WriteNewReviewsWrapper.js";

type NewReviewLayoutType = {
    isLoading: boolean;
    createLoading: boolean;
    isValid: boolean;
    handleSubmit: any;
    onSubmit: SubmitHandler<ReviewType>;
    children: ReactNode;
};

const NewReviewLayout: FC<NewReviewLayoutType> = ({
    isLoading,
    createLoading,
    isValid,
    handleSubmit,
    onSubmit,
    children,
}) => {
    if (isLoading) {
        return <Skeleton className="w-full max-sm:h-28 h-48" />;
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            {children}
            <div>
                <Button disabled={!isValid}>Відправити відгук</Button>
            </div>
            {createLoading && <Spinner />}
        </form>
    );
};

export default NewReviewLayout;
