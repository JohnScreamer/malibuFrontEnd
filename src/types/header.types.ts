export interface MenuCatalogLink {
    id: number;
    name: string;
    href: string;
}

interface Menu {
    id: number;
    Links: MenuCatalogLink[];
}

interface Attributes {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    menu: Menu;
}

interface DataItem {
    id: number;
    attributes: Attributes;
}

export interface HeaderResponse {
    data: DataItem;
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}
