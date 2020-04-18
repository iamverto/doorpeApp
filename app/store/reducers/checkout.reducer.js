import * as Actions from '../actions/checkout.actions';

const INITIAL_STATE = {
    isProcessing:false,
    address:{
        name:'',
        mobile:'',
        pincode:'',
        city:'',
        street:'',
    }
}

const checkoutReducer = (state=INITIAL_STATE, action)=>{
    switch (action.type) {
        case Actions.PLACE_ORDER_START:
            return {...state, isProcessing: true}

        case Actions.PLACE_ORDER_SUCCESS:
            return {...state, isProcessing: false}
        default:
            return state;
    }
}

export default checkoutReducer;

//selectors
export const getCheckoutItems = (state)=>{
    return Object.values(state.cart.cartItems);
}
