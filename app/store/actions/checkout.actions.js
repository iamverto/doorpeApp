export const PLACE_ORDER_START = "[CHECKOUT] PLACE ORDER START";
export const PLACE_ORDER_SUCCESS = "[CHECKOUT] PLACE ORDER SUCCESS";
export const PLACE_ORDER_FAILED = "[CHECKOUT] PLACE ORDER FAILED";

export const GET_ADDRESS = "[CHECKOUT] GET ADDRESS";
export const SET_ADDRESS = "[CHECKOUT] SET ADDRESS";

export const placeOrder=()=>{
    return dispatch =>{
        dispatch({
            type:PLACE_ORDER_START,
        })
        setTimeout(()=>{
            return dispatch({
                type:PLACE_ORDER_SUCCESS,
                payload:{id:4},
            })
        },3000)
    }
}
