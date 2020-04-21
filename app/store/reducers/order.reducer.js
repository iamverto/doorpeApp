import * as Actions from '../actions/order.actions';
import {ArrayToObject} from '../../api/helper'
const INITIAL_STATE = {
    orders:{},
}

const orderReducer = (state=INITIAL_STATE, action)=>{
    switch (action) {
        case Actions.GET_ORDERS:
            const orders = ArrayToObject(action.payload, 'id');
            return {...state, orders:{...state.orders, ...orders}};

        case Actions.GET_ORDER_DETAIL:
            const order = ArrayToObject([action.payload], 'id');
            return {...state, orders: {...state.orders, ...order}}

        default:
            return state;
    }
}

export default orderReducer;

// selectors
export const getOrders = (state) => Object.values(state.order.orders);
export const getOrder = (state, orderId) => state.order.orders[orderId];
