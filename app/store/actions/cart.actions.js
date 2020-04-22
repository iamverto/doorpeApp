import {API_BASE_URL} from "../../api/constants";

export const GET_CART_ITEMS = "[CART] GET CART ITEMS";

export const ADD_TO_CART_START = "[CART] ADD TO CART START";
export const ADD_TO_CART_SUCCESS = "[CART] ADD TO CART SUCCESS";
export const ADD_TO_CART_FAILED = "[CART] ADD TO CART FAILED";

export const SET_CART_ITEM_QUANTITY = "[CART] SET CART ITEM QUANTITY";
export const SET_CART_ITEM_QUANTITY_DELETED = "[CART] SET CART ITEM QUANTITY DELETED";
import axios from 'axios';
import {showMessage} from "react-native-flash-message";


export const getCartItems = () => {
    return dispatch => {
        axios.get(API_BASE_URL + 'cart/items')
            .then(res => {

                return dispatch({
                    type: GET_CART_ITEMS,
                    payload: res.data.results
                })
            })
            .catch(err => console.log(err))
    }
}

export const addToCart = (productId) => {
    return dispatch => {
        dispatch({
            type: ADD_TO_CART_START,
        })

        axios.post(API_BASE_URL + 'cart/items', {
            product: productId
        })
            .then(res => {
                showMessage({message: "Added to cart!", duration: '800', type: "success", position: 'bottom', backgroundColor:"#07c"});
                return dispatch({
                    type: ADD_TO_CART_SUCCESS,
                    payload: res.data
                })

            })
            .catch(err => console.log(err))
    }
}

export const setQuantity = (itemId, quantity) => {
    return dispatch => {
        // if quantity === 0 then delete it
        if (quantity === 0) {
            axios.delete(API_BASE_URL + 'cart/items/' + itemId)
                .then(res => {
                    return dispatch({
                        type: SET_CART_ITEM_QUANTITY_DELETED,
                        payload: {id: itemId, product: 1, title: "ww", quantity: 4}
                    })
                })
                .catch(err => console.log(err))
        } else {
            axios.patch(API_BASE_URL + 'cart/items/' + itemId, {
                quantity: quantity
            }).then(res => {
                console.log(res.data);
                return dispatch({
                    type: SET_CART_ITEM_QUANTITY,
                    payload: res.data
                })
            }).catch(err => console.log(err))

        }
    }
}
