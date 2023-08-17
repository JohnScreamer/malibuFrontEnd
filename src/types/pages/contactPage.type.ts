interface DataAttributes {
    contactPhone: string;
    forCustomersPhone: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

interface Data {
    id: number;
    attributes: DataAttributes;
}

export interface ContactPageResponse {
    data: Data;
    meta: Record<string, any>; // You can replace `any` with a specific type if needed
}
