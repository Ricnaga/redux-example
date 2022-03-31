import { all, takeLatest } from 'redux-saga/effects'
import { ProductActionsType } from './types'

function checkProductStock() {
    console.log('teste')
}

export default all([
    takeLatest(ProductActionsType.ADD_PRODUCT_TO_CART, checkProductStock)
])