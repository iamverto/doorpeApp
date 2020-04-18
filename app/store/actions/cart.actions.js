export const GET_CART_ITEMS = "[CART] GET CART ITEMS";

export const ADD_TO_CART_START = "[CART] ADD TO CART START";
export const ADD_TO_CART_SUCCESS = "[CART] ADD TO CART SUCCESS";
export const ADD_TO_CART_FAILED = "[CART] ADD TO CART FAILED";

export const SET_CART_ITEM_QUANTITY = "[CART] SET CART ITEM QUANTITY";
export const SET_CART_ITEM_QUANTITY_DELETED = "[CART] SET CART ITEM QUANTITY DELETED";


export const getCartItems = () => {
    return dispatch => {
        return dispatch({
            type: GET_CART_ITEMS,
            payload: [{id: 1, product: '', q: 1, price: 23},]
        })
    }
}

export const addToCart = (productId) => {
    return dispatch => {
        dispatch({
            type: ADD_TO_CART_START,
        })
        setTimeout(() => {
            return dispatch({
                type: ADD_TO_CART_SUCCESS,
                payload: {id: productId, product: '', q: 1, price: 233}
            })
        }, 300)

    }
}

export const setQuantity = (itemId, quantity) => {
    return dispatch => {
        // if quantity === 0 then delete it
        if (quantity === 0) {
            return dispatch({
                type: SET_CART_ITEM_QUANTITY_DELETED,
                payload: {id: itemId, product: 1, q: quantity}
            })
        }
        return dispatch({
            type: SET_CART_ITEM_QUANTITY,
            payload: {id:itemId, product: 1, q: quantity},
        })
    }
}
