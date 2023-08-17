import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import { useFetchingContactPage } from "../../../hooks/fetching/useFetchingContactPage.js";
import Typography from "../../typography/Typography.js";
import Spinner from "../../uikit/spinner/Spinner.js";
import HomeSvg from "./HomeSvg.js";
import PercentSvg from "./PercentSvg.js";

type PhoneInfoType = {};

const PhoneInfo: FC<PhoneInfoType> = () => {
    const { data, isLoading } = useFetchingContactPage();
    if (isLoading) {
        return (
            <div className="mb-[120px] max-md:mb-[100px] max-sm:mb-[80px]  ">
                <Skeleton className="h-[145px] w-full" />;
                <Spinner />
            </div>
        );
    }
    return (
        <div className="mb-[120px] max-md:mb-[100px] max-sm:mb-[80px]">
            <ul className="flex gap-[80px] max-md:gap-10 max-sm:gap-4 max-sm:flex-col">
                <li className="flex items-start gap-2">
                    <HomeSvg />
                    <div className="flex flex-col gap-4 max-md:gap-2 max-sm:gap-1">
                        <Typography tag="span" variant="L">
                            Контакний номер
                        </Typography>
                        <Typography
                            bold
                            tag="span"
                            className="underline"
                            variant="L"
                        >
                            <a
                                href={data?.data.attributes.contactPhone}
                                type="phone"
                            >
                                {data?.data.attributes.contactPhone}
                            </a>
                        </Typography>
                    </div>
                </li>
                <li className="flex items-start gap-2">
                    <PercentSvg />
                    <div className="flex flex-col gap-4 max-md:gap-2 max-sm:gap-1">
                        <Typography tag="span" variant="L">
                            Номер для замовлення
                        </Typography>
                        <Typography
                            bold
                            tag="span"
                            className="underline"
                            variant="L"
                        >
                            <a
                                href={data?.data.attributes.forCustomersPhone}
                                type="phone"
                            >
                                {data?.data.attributes.forCustomersPhone}
                            </a>
                        </Typography>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default PhoneInfo;
