import { FC } from "react";
import { VacanciesResponse } from "../../types/pages/vacancies.type.js";
import Spinner from "../uikit/spinner/Spinner.js";
import Vacancy from "./Vacancy.js";

type ListType = {
    data?: VacanciesResponse;
    isLoading: boolean;
};

const List: FC<ListType> = ({ data, isLoading }) => {
    if (isLoading || !data) {
        return <Spinner />;
    }
    return (
        <ul className="grid grid-cols-3  gap-10 max-md:gap-5 max-sm:gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {data?.data.map((el) => (
                <Vacancy data={el.attributes} />
            ))}
        </ul>
    );
};

export default List;
