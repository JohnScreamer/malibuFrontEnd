import { FC } from "react";
import Typography from "../typography/Typography.js";
import AboutLogo from "./AboutLogo.js";

type MessageBannerType = {};

const MessageBanner: FC<MessageBannerType> = () => {
    return (
        <div className="flex gap-20 max-md:gap-[72px] max-sm:gap-[56px] mxCenter max-sm:flex-col items-center">
            <AboutLogo />
            <div className="relative p-[30px] max-md:py-[20px] px-[40px] max-sm:p-[20px] flex items-center justify-center rounded bg-myGreen-muted">
                <span className="absolute block left-[-40px] max-sm:top-[-40px] max-sm:left-auto max-sm:rotate-90 ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="42"
                        viewBox="0 0 40 42"
                        fill="none"
                    >
                        <path
                            d="M40 0.5L40 41.5L0 0.499998L40 0.5Z"
                            fill="#E5FFDE"
                        />
                    </svg>
                </span>
                <Typography
                    variant="L"
                    className="text-myGreen break-all max-md:text-lg max-sm:text-sm"
                    tag="span"
                    bold
                >
                    Смакуй життя з Малібу: тут кожен день – особливий!
                </Typography>
            </div>
        </div>
    );
};

export default MessageBanner;
