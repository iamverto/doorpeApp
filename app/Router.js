import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer, useTheme} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Button, Icon} from "react-native-elements";

import {ReactReduxContext} from 'react-redux';

import {Splash, Login, EditProfile, Logout} from './screens/core';
import {Products, ProductDetail, Categories} from './screens/shopping';
import {Cart, Checkout} from './screens/cart';
import {Orders, OrderDetail} from './screens/order';
import colors from "./configs/colors";
import theme from "./configs/theme";


const ProductStack = createStackNavigator();
const CartStack = createStackNavigator();
const OrderStack = createStackNavigator();
const LoginStack = createStackNavigator();
const Drawer = createDrawerNavigator();


const primaryHeader = {
    headerStyle: {
        backgroundColor: "#0077cc10",
    },
    headerTitleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#0077cc",
    },


};
const homePageHeader = {
    headerStyle: {
        backgroundColor: "#0077cc",
        height: 80,
        borderBottomWidth: 1,
        borderBottomColor:"#0077cc",
    },
    cardShadowEnabled: false,
    headerTitleStyle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: "#fff",
    },

    headerBackTitleVisible: true,
    headerRightContainerStyle: {
        padding: 10
    },
    headerLeftContainerStyle: {
        padding: 10
    },
    headerTitleContainerStyle: {
        alignSelf: 'center'
    },
    headerTitleAlign: 'center'


};
const secondaryHeader = {
    headerStyle: {
        backgroundColor: "#0077cc10",
        // borderBottomWidth: 0,
    },

    headerTitleStyle: {
        fontSize: 18,
        fontWeight: '400',
        color: "#0077cc",
    },

};


const ProductStackScreen = () => (
    <ProductStack.Navigator>
        <ProductStack.Screen name='Products' component={Products}
                             options={{...homePageHeader, title: 'Fuse  Store'}}/>
        <ProductStack.Screen name='ProductDetail' component={ProductDetail}
                             options={{...secondaryHeader, title: 'Product Details'}}/>
        <ProductStack.Screen name='Categories' component={Categories}
                             options={{...secondaryHeader, title: 'Categories'}}/>
    </ProductStack.Navigator>
);


const LoginStackScreen = () => (
    <LoginStack.Navigator>
        <LoginStack.Screen name='Login' component={Login}
                           options={{...secondaryHeader, title: 'Login'}}/>
    </LoginStack.Navigator>
);


const CartStackScreen = () => (
    <CartStack.Navigator>
        <CartStack.Screen name='Cart' component={Cart}
                          options={{...primaryHeader, title: 'Cart'}}/>
        <CartStack.Screen name='ProductDetail' component={ProductDetail}
                          options={{...secondaryHeader, title: 'Product'}}/>
        <CartStack.Screen name='Checkout' component={Checkout}
                          options={{...secondaryHeader, title: 'Checkout'}}/>
    </CartStack.Navigator>
);


const OrderStackScreen = () => (
    <OrderStack.Navigator>
        <OrderStack.Screen name='Orders' component={Orders}
                           options={{...primaryHeader, title: 'Orders'}}/>
        <OrderStack.Screen name='OrderDetail' component={OrderDetail}
                           options={{...secondaryHeader, title: 'Order Details'}}/>
    </OrderStack.Navigator>
);

const DrawerScreen = () => (
    <Drawer.Navigator
        drawerContentOptions={{
            activeTintColor: colors.primary,
            itemStyle: {marginVertical: 3},
            title: "Priyanshu Kumar"
        }}
    >
        <Drawer.Screen name='Home' component={ProductStackScreen}/>
        <Drawer.Screen name='Cart' component={CartStackScreen}/>
        {/*<Drawer.Screen name='Categories' component={Categories}/>*/}
        <Drawer.Screen name='MyOrders' component={OrderStackScreen} options={{title:'My Orders'}}/>
        <Drawer.Screen name='Settings' component={ProductStackScreen}/>
        <Drawer.Screen name='Logout' component={Logout}/>
    </Drawer.Navigator>
)

function useStore() {
    const { store } = useContext(ReactReduxContext);
    const { getState, dispatch, subscribe } = store;

    const [ storeState, setStoreState ] = useState(getState());

    useEffect(() => subscribe(() => {
        setStoreState(getState());
    }, []));

    return [storeState, dispatch];
}



// to navigate from redux actions
export const navigationRef = React.createRef();
export function navigate(name, params) {
    navigationRef.current?.navigate(name, params);
}

export default () => {
    const [state, dispatch] = useStore()
    const isAuthenticated=state.auth.isAuthenticated;
    const isLoading=state.auth.isLoading;
    return (
        <NavigationContainer theme={theme} ref={navigationRef}>
            {isLoading?<Splash/>:isAuthenticated?<DrawerScreen/>:<LoginStackScreen/>}
        </NavigationContainer>
    )
}

// export default () => (
//     createAppContainer(AppSwitchNavigator)
