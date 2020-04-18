export const GET_PRODUCTS_START = "[PRODUCT] GET PRODUCTS START";
export const GET_PRODUCTS_SUCCESS = "[PRODUCT] GET PRODUCTS SUCCESS";
export const GET_PRODUCTS_ERROR = "[PRODUCT] GET PRODUCTS ERROR";


export const getProducts = (search = null, sortBY=null) => {
    return dispatch => {
        dispatch({
            type: GET_PRODUCTS_START,
        })
        //make api call here

        setTimeout(() => {
            return dispatch({
                type: GET_PRODUCTS_SUCCESS,
                payload: [{id: 3, name: 'Product 3', price: 3}, {id: 2, name: 'Product 2', price: 11},]
            })
        }, 500)
    }
}


