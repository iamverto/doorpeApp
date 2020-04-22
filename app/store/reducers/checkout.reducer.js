import * as Actions from '../actions/checkout.actions';
import {ArrayToObject} from "../../api/helper";

const INITIAL_STATE = {
    isProcessing: false,
    address: {
        name: '',
        mobile: '',
        pincode: '',
        city: '',
        street: '',
    },
    cities: ['Jalandhar', 'New Delhi']
}

const checkoutReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Actions.PLACE_ORDER_START:
            return {...state, isProcessing: true}

        case Actions.PLACE_ORDER_FAILED:
            return {...state, isProcessing: true}

        case Actions.PLACE_ORDER_SUCCESS:
            return {...state, isProcessing: false, }
        default:
            return state;
    }
}

export default checkoutReducer;

//selectors
export const getCheckoutItems = (state) => {

    let items = Object.values(state.cart.cartItems);
    items = items.map(item => {
        if (item.quantity < item.num_items && item.in_stock) {
            return item
        }
    })

    return items;
}

export const getCheckoutSubtotal = (state) => {
    let items = state.cart.cartItems;
    let subtotal = 0;
    items = Object.values(items);
    items.map(item => {
        if (item.quantity < item.num_items && item.in_stock) {
            subtotal = subtotal + (item.price * item.quantity)

        }
    })
    return subtotal;
}
