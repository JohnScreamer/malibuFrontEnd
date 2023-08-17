import { FC } from "react";
import PageLayout from "../components/layouts/DefaultPageLayout/PageLayout.js";
import List from "../components/vacanciesPage/List.js";
import { VACANCIES_CRUMBS } from "../constants/breadCrumbsArr.js";
import { useFetchingVacancy } from "../hooks/fetching/useFetchingVacancy.js";

type VacanciesType = {};

const Vacancies: FC<VacanciesType> = () => {
    const { data, isLoading } = useFetchingVacancy();
    return (
        <>
            <PageLayout
                breadCrumbsArr={VACANCIES_CRUMBS}
                title="Вакансії"
                smallDistance
            >
                <List data={data} isLoading={isLoading} />
            </PageLayout>
        </>
    );
};

export default Vacancies;
