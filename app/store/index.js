import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {ProductReducer, CartReducer, CheckoutReducer, OrderReducer, AuthReducer} from "./reducers";
// import {persistStore, persistReducer} from 'redux-persist';
import {AsyncStorage} from "react-native";

const rootReducer = combineReducers(
    {
        product: ProductReducer,
        cart: CartReducer,
        checkout:CheckoutReducer,
        order:OrderReducer,
        auth:AuthReducer,
    }
);

// const persistConfig = {
//     key:'root',
//     storage:AsyncStorage,
// };

const ConfigureStore = (onComplete) => {
    // const persistedReducer = persistReducer(persistConfig, rootReducer);
    return createStore(rootReducer, applyMiddleware(thunk));

};

export default ConfigureStore;


/*


Actions
SCREEN

# CORE
> get user      token>get_user
> set user      set token
> logout        remove token
toggle sidebar

# PRODUCTS
get products      /products
> sort products     /products _getSorted()
> search products   /products?search=?
> get cart items    /cart/items


# PRODUCT DETAIL
get product

# CART
get cart items
set quantity
add to cart


# CHECKOUT
> get cart items
> place order

# ORDERS
> get orders

# ORDER DETAIL
> get order







* */
