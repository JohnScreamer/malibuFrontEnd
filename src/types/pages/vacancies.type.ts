export interface VacancyType {
    phoneNumber: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    requirements: string;
    conditions: string;
    responsibilities: string;
    position: string;
}

interface Datum {
    id: number;
    attributes: VacancyType;
}

interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

interface Meta {
    pagination: Pagination;
}

export interface VacanciesResponse {
    data: Datum[];
    meta: Meta;
}
