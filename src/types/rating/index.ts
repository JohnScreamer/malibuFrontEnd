export interface ProductRatingResponse {
    averageScore: number;
    reviewsCount: number | null;
}
export interface IAuthor {
    username: string;
    email: string;
    id: number;
}
export interface IReview {
    id: number;
    createdAt: string;
    comment: string | null;
    author: IAuthor | null;
    score: number;
}

export type ReviewBody = {
    reviewsCount: number;
    averageScore: number;
    userReview: IReview | null;
    reviews: IReview[];
};

export type UserReviewBody = {
    comment: string;
    score: number;
};
