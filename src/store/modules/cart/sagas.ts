import { all, select, takeLatest } from 'redux-saga/effects'
import { IState } from '../..'
import { addProductToCart } from './actions'
import { ProductActionsType } from './types'

type CheckProductStockRequest = ReturnType<typeof addProductToCart>

function* checkProductStock({ payload }: CheckProductStockRequest) {
    const { product} = payload

    const currentQuantity: number = yield select((state:IState) => {
        return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
    })
}

export default all([
    takeLatest(ProductActionsType.ADD_PRODUCT_TO_CART, checkProductStock)
])