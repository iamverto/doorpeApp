import React from 'react';
import {NavigationContainer, useTheme} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Button, Icon} from "react-native-elements";

import {Splash, Login, EditProfile} from './screens/core';
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
        backgroundColor: "#07c",
        height: 80,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
    headerTitleStyle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: "#fff",
    },


};
const homePageHeader = {
    headerStyle: {
        backgroundColor: "#07c",
        height: 80,
        // borderBottomWidth: 0,
        borderColor:'#07c',
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
        backgroundColor: "#07c",
        // borderBottomWidth: 0,
        borderColor:'#07c',
    },

    headerTitleStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#fff",
    },
};


const ProductStackScreen = () => (
    <ProductStack.Navigator>
        <ProductStack.Screen headerMode='none' name='Products' component={Products}
                             options={{...homePageHeader, title: 'Fuse Store'}}/>
        <ProductStack.Screen name='ProductDetail' component={ProductDetail}
                             options={{...secondaryHeader, title: 'Product Details'}}/>
        <ProductStack.Screen name='Categories' component={Categories}
                             options={{...secondaryHeader, title: 'Categories'}}/>
    </ProductStack.Navigator>
);


const LoginStackScreen = () => (
    <LoginStack.Navigator>
        <LoginStack.Screen name='Splash' component={Splash}
                           options={{...primaryHeader, title: ''}}/>
        <LoginStack.Screen name='Login' component={Login}
                           options={{...secondaryHeader, title: 'Login'}}/>
    </LoginStack.Navigator>
);


const CartStackScreen = () => (
    <CartStack.Navigator>
        <CartStack.Screen name='Cart' component={Cart}
                          options={{...primaryHeader, title: 'Cart'}}/>
        <CartStack.Screen name='ProductDetail' component={ProductDetail}
                          options={{...primaryHeader, title: 'Product'}}/>
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
        <Drawer.Screen name='Categories' component={Categories}/>
        <Drawer.Screen name='MyOrders' component={OrderStackScreen}/>
        <Drawer.Screen name='About' component={ProductStackScreen}/>
        <Drawer.Screen name='Logout' component={ProductStackScreen}/>
    </Drawer.Navigator>
)

export default () => {
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(()=>{
        setTimeout(()=>setIsLoading(!isLoading), 500)
    }, [])

    return (
        <NavigationContainer theme={theme}>
            {isLoading?<Splash/>:<DrawerScreen/>}
        </NavigationContainer>
    )
}

// export default () => (
//     createAppContainer(AppSwitchNavigator)
