import {API_BASE_URL} from "../../api/constants";

export const GET_PRODUCTS_START = "[PRODUCT] GET PRODUCTS START";
export const GET_PRODUCTS_SUCCESS = "[PRODUCT] GET PRODUCTS SUCCESS";
export const GET_PRODUCTS_FAILED = "[PRODUCT] GET PRODUCTS FAILED";

export const GET_PRODUCT = "[PRODUCT] GET PRODUCT";

import axios from 'axios';

export const getProducts = (search = null, sortBY = null) => {
    return dispatch => {
        dispatch({
            type: GET_PRODUCTS_START,
        })
        axios.get(API_BASE_URL + 'products')
            .then(res => {
                return dispatch({
                    type: GET_PRODUCTS_SUCCESS,
                    payload: res.data.results
                })
            })
            .catch(err => {
                return dispatch({
                    type: GET_PRODUCTS_FAILED,
                })
            })
    }
}

/*
* logic
* fetch from what already have
* then fetch from api and update it
* */
export const getProduct = (productId) => {
    return dispatch => {
        axios.get(API_BASE_URL + 'products/' + productId)
            .then(res => {
                return dispatch({
                    type: GET_PRODUCT,
                    payload: res.data
                })
            })
    }
}


