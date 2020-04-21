export const GET_ORDERS = "[ORDERS] GET ORDERS";
export const GET_ORDER_DETAIL = "[ORDERS] GET ORDER DETAIL";

export const getOrders = () => dispatch => {
    // make an api call
    return dispatch({
        type:GET_ORDERS,
        payload:[{id:1, amount:445}]
    })
}

export const getOrderDetail = orderId => dispatch => {
    // make an api call
    return dispatch({
        type:GET_ORDER_DETAIL,
        payload:{id:1, amount:445}
    })
}
