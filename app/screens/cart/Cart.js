import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import commons from "../../styles/commons";
import links from "../../configs/links";
import {Button, Icon} from "react-native-elements";
import colors from "../../configs/colors";

import {connect} from 'react-redux';
import * as Actions from '../../store/actions/cart.actions';
import {bindActionCreators} from "redux";
import * as CartSelectors from "../../store/reducers/cart.reducer";
import * as ProductSelectors from "../../store/reducers/product.reducer";
import * as CartActions from "../../store/actions/cart.actions";

class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.props.navigation.setOptions({
            headerLeft: () => (
                <Button
                    type='clear'
                    icon={<Icon size={32} name='ios-menu' type='ionicon' color='#fff'/>}
                    onPress={() => this.props.navigation.toggleDrawer()}
                />
            )
        });

    }

    render() {
        const {cartItems, actions, subTotal} = this.props;
        return (
            <ScrollView style={commons.container}>
                <View style={styles.cartContainer}>
                    {cartItems.map(c => {
                        return (

                            <View style={styles.cartItem} key={c.id}>
                                <Image
                                    source={{uri: links.product}}
                                    resizeMode={"contain"}
                                    style={styles.image}/>
                                <View style={styles.cartItemMeta}>
                                    <View style={styles.cartItemText}>
                                        <Text style={styles.itemTitle}
                                              onPress={() => this.props.navigation.navigate('ProductDetail')}>FireTracker
                                            for fuse44</Text>
                                        <Text style={styles.itemPrice}>$799</Text>
                                    </View>
                                    <View style={styles.cartItemButtons}>
                                        <Button
                                            onPress={() => actions.setQuantity(c.id,c.q - 1)}
                                            buttonStyle={styles.itemButton}
                                            icon={<Icon color="#fff" name='remove'/>}/>
                                        <Text style={styles.itemQuantity}>{c.q}</Text>
                                        <Button
                                            onPress={() => actions.setQuantity(c.id,c.q + 1)}
                                            buttonStyle={styles.itemButton} icon={<Icon color="#fff" name='add'/>}/>
                                    </View>
                                </View>
                            </View>

                        )
                    })}
                </View>
                {cartItems.length?
                    <Button title='Checkout' onPress={() => this.props.navigation.push('Checkout')}/>
                    :
                    <Button title='Back To Shopping' onPress={() => this.props.navigation.navigate('Products')}/>
                }

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        padding: 10,
        color: colors.dark,
    },

    cartContainer: {
        flexDirection: 'column',
    },
    cartItem: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: colors.primary
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 12,
        margin: 5
    },
    cartItemMeta: {
        padding: 5,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'

    },
    cartItemText: {},
    itemTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.dark
    },
    itemPrice: {
        fontSize: 16,
        paddingTop: 10,
        fontWeight: 'bold'
    },
    cartItemButtons: {
        flexDirection: 'row'
    },
    itemQuantity: {
        fontSize: 18,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 2,
    },
    itemButton: {
        padding: 0,
        borderRadius: 100,
        backgroundColor: colors.primary
    }

});

const mapStateToProps = state => ({
    subTotal: state.product.subTotal,
    cartItems: CartSelectors.getCartItems(state),
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getCartItems: CartActions.getCartItems,
        addToCart: CartActions.addToCart,
        setQuantity: CartActions.setQuantity,
    }, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
