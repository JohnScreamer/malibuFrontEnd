import { FC } from "react";
import { VacancyType } from "../../types/pages/vacancies.type.js";
import Typography from "../typography/Typography.js";
import PhoneSvg from "./PhoneSvg.js";

type VacancyProps = {
    data: VacancyType;
};

const Vacancy: FC<VacancyProps> = ({ data }) => {
    return (
        <li className="flex flex-col gap-4 p-[30px] max-md:p-6 max-sm:p-4 bg-white">
            <Typography bold variant="L" className="max-md:text-lg">
                {data.position}
            </Typography>
            <div className="flex flex-col gap-2">
                <Typography
                    tag="span"
                    variant="M"
                    className="max-md:text-base max-sm:text-sm"
                >
                    Вимоги
                </Typography>
                <Typography
                    tag="span"
                    variant="S"
                    className="max-md:text-sm max-sm:text-xs"
                >
                    {data.requirements}
                </Typography>
            </div>
            <div className="flex flex-col gap-2">
                <Typography
                    tag="span"
                    variant="M"
                    className="max-md:text-base max-sm:text-sm"
                >
                    Обовязки
                </Typography>
                <Typography
                    tag="span"
                    variant="S"
                    className="max-md:text-sm max-sm:text-xs"
                >
                    {data.responsibilities}
                </Typography>
            </div>
            <div className="flex flex-col gap-2">
                <Typography
                    tag="span"
                    variant="M"
                    className="max-md:text-base max-sm:text-sm"
                >
                    Умови
                </Typography>
                <Typography
                    tag="span"
                    variant="S"
                    className="max-md:text-sm max-sm:text-xs"
                >
                    {data.conditions}
                </Typography>
            </div>
            <div className="flex flex-col gap-2">
                <Typography
                    tag="span"
                    variant="M"
                    className="max-md:text-base max-sm:text-sm"
                >
                    Звоніть
                </Typography>
                <div className="flex items-center gap-[10px]">
                    <PhoneSvg />
                    <Typography
                        tag="span"
                        variant="S"
                        className="max-md:text-sm max-sm:text-xs underline"
                    >
                        <a href={data.phoneNumber}>{data.phoneNumber}</a>
                    </Typography>
                </div>
            </div>
        </li>
    );
};

export default Vacancy;
