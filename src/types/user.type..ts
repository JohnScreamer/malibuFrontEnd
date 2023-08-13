import { ProductData } from "./pages/homePage.type.js";

interface Role {
    id: number;
    name: string;
    description: string;
    type: string;
    createdAt: string;
    updatedAt: string;
}

export interface User {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    name: string;
    lastName: string;
    phone: string | null;
    gender: string;
    birthDay: string;
    creditCard: string | null;
    role: Role;
    favorite: null | Array<ProductData>;
}

export interface AuthData {
    jwt: string;
    user: User;
}
