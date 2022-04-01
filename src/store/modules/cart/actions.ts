import { IProduct, ProductActionsType } from "./types";

export function addProductToCartRequest(product: IProduct) {
    return {
        type: ProductActionsType.ADD_PRODUCT_TO_CART_REQUEST,
        payload: {
            product
        }
    }
}

export function addProductToCartSuccess(product: IProduct) {
    return {
        type: ProductActionsType.ADD_PRODUCT_TO_CART_SUCCESS,
        payload: {
            product
        }
    }
}

export function addProductToCartFailure(productId: number) {
    return {
        type: ProductActionsType.ADD_PRODUCT_TO_CART_FAILURE,
        payload: {
            productId
        }
    }
}