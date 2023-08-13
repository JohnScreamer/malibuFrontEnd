import { useFavoriteControl } from "../../../hooks/useFavoriteControl.js";
import { ProductData } from "../../../types/pages/homePage.type.js";
import Button from "../../uikit/buttons/Button.js";
import Spinner from "../../uikit/spinner/Spinner.js";

export const FavoriteWrapper = ({ data }: { data: ProductData }) => {
    const { addToFavorite, isInFavorite, removeFromFavorite, isLoading } =
        useFavoriteControl(data);

    if (!!isInFavorite)
        return (
            <div className="absolute top-0 right-0 m-2">
                <Button
                    variant="grey"
                    onClick={removeFromFavorite}
                    className="opacity-70"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                    >
                        <path
                            d="M17.3653 0C15.1604 0 13.2067 1.07706 12 2.73408C10.7933 1.07706 8.84098 0 6.63474 0C2.9706 0 0 2.9706 0 6.63474C0 12.2098 12 21.2004 12 21.2004C12 21.2004 24 12.2098 24 6.63474C24 2.9706 21.0294 0 17.3653 0Z"
                            fill="#ED1944"
                        />
                    </svg>
                </Button>
                {isLoading && <Spinner />}
            </div>
        );

    return (
        <div className="absolute top-0 right-0 m-2">
            <Button
                variant="grey"
                onClick={addToFavorite}
                className="opacity-70"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="feather-icon / heart">
                        <path
                            id="Shape (Stroke)"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.7046 4.25632C13.8299 3.13054 15.3564 2.49805 16.9482 2.49805C18.5399 2.49805 20.0664 3.13051 21.1916 4.25624C22.3174 5.38152 22.95 6.90816 22.95 8.49987C22.95 10.0916 22.3175 11.6181 21.1917 12.7434C21.1917 12.7435 21.1917 12.7434 21.1917 12.7434L12.3517 21.5834C12.1565 21.7787 11.8399 21.7787 11.6446 21.5834L2.80461 12.7434C0.460963 10.3998 0.460963 6.59997 2.80461 4.25632C5.14826 1.91267 8.94807 1.91267 11.2917 4.25632L11.9982 4.96277L12.7046 4.25632C12.7046 4.25629 12.7046 4.25635 12.7046 4.25632ZM16.9482 3.49805C15.6217 3.49805 14.3496 4.02515 13.4118 4.96334L12.3517 6.02343C12.258 6.11719 12.1308 6.16987 11.9982 6.16987C11.8656 6.16987 11.7384 6.11719 11.6446 6.02343L10.5846 4.96343C8.63149 3.0103 5.46484 3.0103 3.51172 4.96343C1.55859 6.91655 1.55859 10.0832 3.51172 12.0363L11.9982 20.5228L20.4846 12.0363C21.4228 11.0986 21.95 9.82636 21.95 8.49987C21.95 7.17338 21.4229 5.90126 20.4847 4.96351C19.5469 4.02532 18.2747 3.49805 16.9482 3.49805Z"
                            fill="#414141"
                        />
                    </g>
                </svg>
            </Button>
            {isLoading && <Spinner />}
        </div>
    );
};
