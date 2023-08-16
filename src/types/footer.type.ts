export interface SocialLink {
    id: number;
    attributes: {
        url: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        iconName: string;
    };
}

export interface FooterData {
    data: {
        id: number;
        attributes: {
            phone: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            social_links: {
                data: SocialLink[];
            };
        };
    };
    meta: {};
}
