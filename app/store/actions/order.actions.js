import {API_BASE_URL} from "../../api/constants";

export const GET_ORDERS = "[ORDERS] GET ORDERS";
export const GET_ORDER_DETAIL = "[ORDERS] GET ORDER DETAIL";

import axios from 'axios';

export const getOrders = () => {
    // make an api call
    return dispatch => {
        axios.get(API_BASE_URL + 'orders')
            .then(res => {
                console.log(res.data.results);
                return dispatch({
                    type: GET_ORDERS,
                    payload: res.data.results
                })

            })
            .catch(err => {
                console.log(err)
            })

    }
}

export const getOrderDetail = orderId => dispatch => {
    // make an api call
    axios.get(API_BASE_URL + 'orders/' + orderId)
        .then(res => {
            console.log(res.data);
            return dispatch({
                type: GET_ORDER_DETAIL,
                payload: res.data
            })

        })
}
