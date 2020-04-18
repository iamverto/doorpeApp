import * as Actions from '../actions/product.actions';
import {ArrayToObject} from "../../api/helper";

const INITIAL_STATE = {
    products: {
        1:{id: 1, name: 'Product 1', price: 3},
        4:{id: 4, name: 'Product 1', price: 3},
    },
    isLoading: false,
}

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Actions.GET_PRODUCTS_START:
            return {...state, isLoading: true};

        case Actions.GET_PRODUCTS_SUCCESS:
            const products = ArrayToObject(action.payload, 'id');
            return {...state,isLoading:false, products: {...state.products, ...products}};

        case Actions.GET_PRODUCTS_ERROR:
            return {...state, isLoading: false};

        default:
            return state;
    }
}


export default productReducer;

// SELECTORS

export const getProducts =(state)=>{
    return Object.values(state.product.products)
}
