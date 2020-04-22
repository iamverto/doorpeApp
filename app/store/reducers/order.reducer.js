import * as Actions from '../actions/order.actions';
import * as CheckoutActions from "../actions/checkout.actions";
import {ArrayToObject} from '../../api/helper'
const INITIAL_STATE = {
    orders:{},
}

const orderReducer = (state=INITIAL_STATE, action)=>{
    switch (action.type) {
        case Actions.GET_ORDERS:
            const orders = ArrayToObject(action.payload, 'id');
            return {...state, orders:orders};

        case Actions.GET_ORDER_DETAIL:
            const order = ArrayToObject([action.payload], 'id');
            return {...state, orders: {...state.orders, ...order}}

        case CheckoutActions.PLACE_ORDER_SUCCESS:
            const placed_order = ArrayToObject([action.payload], 'id');
            return {...state, orders: {...state.orders, ...placed_order}}

        default:
            return state;
    }
}

export default orderReducer;

// selectors
export const getOrdersList = (state) => Object.values(state.order.orders).reverse();
export const getOrder = (state, orderId) => state.order.orders[orderId];
