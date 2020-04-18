import * as Actions from '../actions/cart.actions';
import {ArrayToObject} from '../../api/helper';

const INITIAL_STATE = {
    cartItems: {
        1: {id: 1, product: '', q: 1, price: 233}
    },
    subtotal: 123,
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Actions.GET_CART_ITEMS:
            const items = ArrayToObject(action.payload, 'id')
            // todo update subtotal
            return {...state, cartItems: {...state.cartItems, ...items}}

        case Actions.ADD_TO_CART_SUCCESS:
            const item = ArrayToObject([action.payload], 'id')
            return {...state, cartItems: {...state.cartItems, ...item}}

        case Actions.SET_CART_ITEM_QUANTITY:
            const item2 = ArrayToObject([action.payload], 'id')
            return {...state, cartItems: {...state.cartItems, ...item2}}
        case Actions.SET_CART_ITEM_QUANTITY_DELETED:

            // remove a key from object
            let allItems = state.cartItems;
            delete allItems[action.payload.id];
            console.log(allItems)


            return {...state, cartItems: allItems}
        default:
            return state;
    }
}

export default cartReducer;

// SELECTORS

export const getCartItems = (state) => {
    const items = state.cart.cartItems;
    return Object.values(items);
}
