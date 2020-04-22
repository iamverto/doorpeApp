import {add} from "react-native-reanimated";

export const PLACE_ORDER_START = "[CHECKOUT] PLACE ORDER START";
export const PLACE_ORDER_SUCCESS = "[CHECKOUT] PLACE ORDER SUCCESS";
export const PLACE_ORDER_FAILED = "[CHECKOUT] PLACE ORDER FAILED";
import {navigate} from '../../Router'

import {getCartItems} from '../actions/cart.actions';

import axios from 'axios';
import {API_BASE_URL} from "../../api/constants";
import {showMessage} from "react-native-flash-message";

export const GET_CITIES = "[CHECKOUT] GET CITIES";

export const placeOrder = (fullname, city, street, pincode) => {
    return dispatch => {
        dispatch({
            type: PLACE_ORDER_START,
        });
        return axios.post(API_BASE_URL + 'orders/place-order', {
            fullname: fullname,
            city: city,
            street: street,
            pincode: pincode
        })
            .then(res => {
                showMessage({message: "Order Success!", duration: '3000', type: "success", position: 'bottom'});
                dispatch({
                    type: PLACE_ORDER_SUCCESS,
                    payload: res.data,
                })
            })
            .then(() => {
                dispatch(getCartItems())
            })
            .then((res) => {
                navigate('MyOrders')
            })
            .catch(err => {
                console.log(err)
                showMessage({message: "Order Failed!", duration: '3000', type: "danger", position: 'bottom'});
                dispatch({
                    type: PLACE_ORDER_FAILED
                })
            })
    }
}


