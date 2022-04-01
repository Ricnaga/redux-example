export enum ProductActionsType {
    ADD_PRODUCT_TO_CART_REQUEST = 'ADD_PRODUCT_TO_CART_REQUEST',
    ADD_PRODUCT_TO_CART_SUCCESS = 'ADD_PRODUCT_TO_CART_SUCCESS',
    ADD_PRODUCT_TO_CART_FAILURE = 'ADD_PRODUCT_TO_CART_FAILURE'
}

export type IProduct = {
    id: number;
    title: string;
    price: number
}

export interface ICartItem {
    product: IProduct
    quantity: number
}
export interface ICartState {
    items: Array<ICartItem>
    failedStockCheck:Array<number>
}