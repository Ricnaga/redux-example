import { Reducer } from "redux";
import { ICartState, ProductActionsType } from "./types";

const INITIAL_STATE: ICartState = {
    items: []
}

export const cart: Reducer<ICartState> = (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case ProductActionsType.ADD_PRODUCT_TO_CART: {
            const { product } = actions.payload


            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        product,
                        quantity: 1
                    }
                ]
            }
        }
        default: {
            return state
        }
    }
}