export enum ProductActionsType {
    ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
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
}