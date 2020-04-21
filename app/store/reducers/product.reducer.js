import * as Actions from '../actions/product.actions';
import {ArrayToObject} from "../../api/helper";

const INITIAL_STATE = {
    products: {},
    isLoading: false,
}

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Actions.GET_PRODUCTS_START:
            return {...state, isLoading: true};

        case Actions.GET_PRODUCTS_SUCCESS:
            const products = ArrayToObject(action.payload, 'id');
            return {...state,isLoading:false, products: {...state.products, ...products}};

        case Actions.GET_PRODUCTS_FAILED:
            return {...state, isLoading: false};

        case Actions.GET_PRODUCT:
            const product = ArrayToObject([action.payload], 'id');
            return {...state,isLoading:false, products: {...state.products, ...product}};
        default:
            return state;
    }
}


export default productReducer;

// SELECTORS

export const getProducts =(state)=>{
    return Object.values(state.product.products)
}

export const getProduct = (state, productId)=>{
    const products = state.product.products;
    return products[productId];
}
