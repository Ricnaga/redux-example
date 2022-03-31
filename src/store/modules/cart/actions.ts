import { IProduct, ProductActionsType } from "./types";

export function addProductToCart(product: IProduct) {
    return {
        type: ProductActionsType.ADD_PRODUCT_TO_CART,
        payload: {
            product
        }
    }
}