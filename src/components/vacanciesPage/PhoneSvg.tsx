import { FC } from "react";

type PhoneSvgType = {};

const PhoneSvg: FC<PhoneSvgType> = () => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.663186 7.03493C0.373237 4.72757 2.34828 3.125 4.46942 3.125H8.959C9.86517 3.125 10.6417 3.77304 10.8038 4.66459L11.5617 8.83316C11.7881 10.0783 11.4642 11.3606 10.6736 12.3488L9.76931 13.4791C9.60817 13.6806 9.59344 13.9476 9.71792 14.1506C10.3049 15.1077 11.3607 16.7246 12.3192 17.6831C13.2776 18.6415 14.8945 19.6973 15.8516 20.2843C16.0546 20.4088 16.3217 20.3941 16.5231 20.2329L17.6534 19.3287C18.6417 18.5381 19.9239 18.2141 21.1691 18.4405L25.3376 19.1985C26.2292 19.3606 26.8772 20.1371 26.8772 21.0432V25.2271C26.8772 27.504 25.0635 29.53 22.6463 29.1413C18.5056 28.4754 12.5867 26.346 7.66923 21.0503C2.88791 15.9012 1.11664 10.6434 0.663186 7.03493ZM4.46942 4.375C2.88878 4.375 1.73184 5.51355 1.90343 6.87908C2.3263 10.2442 3.99305 15.2543 8.58522 20.1997C13.2721 25.2471 18.9134 27.2749 22.8448 27.9071C24.3378 28.1472 25.6272 26.9106 25.6272 25.2271V21.0432C25.6272 20.7412 25.4112 20.4823 25.114 20.4283L20.9455 19.6704C20.056 19.5087 19.1402 19.74 18.4343 20.3048L17.304 21.209C16.7067 21.6868 15.8671 21.7601 15.1982 21.3499C14.2442 20.7649 12.51 19.6416 11.4353 18.5669C10.3606 17.4923 9.23737 15.758 8.65234 14.8041C8.24209 14.1351 8.31539 13.2956 8.79323 12.6983L9.69747 11.568C10.2622 10.8621 10.4936 9.94619 10.3318 9.05677L9.57392 4.8882C9.51989 4.59101 9.26106 4.375 8.959 4.375H4.46942Z"
                    fill="#414141"
                />
            </svg>
        </>
    );
};

export default PhoneSvg;
