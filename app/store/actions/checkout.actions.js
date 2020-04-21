import {add} from "react-native-reanimated";

export const PLACE_ORDER_START = "[CHECKOUT] PLACE ORDER START";
export const PLACE_ORDER_SUCCESS = "[CHECKOUT] PLACE ORDER SUCCESS";
export const PLACE_ORDER_FAILED = "[CHECKOUT] PLACE ORDER FAILED";
import {navigate} from '../../Router'

import {getCartItems} from '../actions/cart.actions';

import axios from 'axios';
import {API_BASE_URL} from "../../api/constants";

export const GET_CITIES = "[CHECKOUT] GET CITIES";

export const placeOrder=(fullname, city, street, pincode)=>{
    return dispatch =>{
        dispatch({
            type:PLACE_ORDER_START,
        })
        axios.post(API_BASE_URL+'orders/place-order', {
            fullname:fullname,
            city:city,
            street:street,
            pincode:pincode
        })
            .then(res=>{
                dispatch(getCartItems());
                console.log('order placed')
                dispatch(navigate('MyOrders'));
                return dispatch({
                    type:PLACE_ORDER_SUCCESS,
                    payload:{id:4},
                })

            })
            .catch(err=>{
                console.log(err)
                return dispatch({
                    type:PLACE_ORDER_FAILED
                })
            })
    }
}


