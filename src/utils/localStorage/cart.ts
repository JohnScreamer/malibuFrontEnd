import { CartItem } from "../../redux/slice/cart.js";

export function saveCartToLocalStorage(cartItems: Array<CartItem>) {
    try {
        const cartItemsJSON = JSON.stringify(cartItems);

        localStorage.setItem("cart", cartItemsJSON);

        console.log("Корзина була збережена в локальному сховищі.");
    } catch (error) {
        console.error("Виникла помилка під час збереження корзини:", error);
    }
}
export function getCartFromLocalStorage(): Array<CartItem> | null {
    try {
        const cartItemsJSON = localStorage.getItem("cart");

        if (cartItemsJSON) {
            const cartItems: CartItem[] = JSON.parse(cartItemsJSON);
            return cartItems;
        } else {
            console.log("Корзина відсутня у локальному сховищі.");
            return null;
        }
    } catch (error) {
        console.error("Виникла помилка під час отримання корзини:", error);
        return null;
    }
}
