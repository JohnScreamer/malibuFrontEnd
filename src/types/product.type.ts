import { ProductAttributes } from "./pages/homePage.type.js";

export interface ProductResponse {
    data: {
        id: number;
        attributes: ProductAttributes;
    };
    meta: any; // Update type if meta properties are known
}
