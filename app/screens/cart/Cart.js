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
import {getSubtotal} from "../../store/reducers/cart.reducer";

class Cart extends React.Component {



    constructor(props) {
        super(props);
        this.props.navigation.setOptions({
            headerRight: () => (
                <Button
                    type='clear'
                    title={'back'}
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            ),
            headerLeft: () => (
                <Button
                    type='clear'
                    icon={<Icon size={32} name='ios-menu' type='ionicon' color='#07c'/>}
                    onPress={() => this.props.navigation.toggleDrawer()}
                />
            )
        });

    }

    componentDidMount() {
        const {cartItems, actions, subTotal} = this.props;
        actions.getCartItems();
    }

    render() {
        const {cartItems, actions, subTotal} = this.props;
        return (
            <ScrollView style={commons.container}>
                <View style={styles.cartContainer}>
                    {cartItems.map(c => {
                        return (

                            <View style={styles.cartItem} key={c.id}>
                                {c.pic && (
                                    <Image
                                        source={{uri: c.pic}}
                                        resizeMode={"contain"}
                                        style={styles.image}/>
                                    )}
                                <View style={styles.cartItemMeta}>
                                    <View style={styles.cartItemText}>
                                        <Text style={styles.itemTitle}
                                              onPress={() => this.props.navigation.navigate('ProductDetail')}>{c.title}</Text>
                                        <Text style={styles.itemPrice}>Rs. {c.price}</Text>
                                    </View>
                                    <View style={styles.cartItemButtons}>
                                        <Button
                                            onPress={() => actions.setQuantity(c.id,c.quantity - 1)}
                                            buttonStyle={styles.itemButton}
                                            icon={<Icon color="#fff" name='remove'/>}/>
                                        <Text style={styles.itemQuantity}>{c.quantity}</Text>

                                        <Button
                                            onPress={() => actions.setQuantity(c.id,c.quantity + 1)}
                                            buttonStyle={styles.itemButton} icon={<Icon color="#fff" name='add'/>}/>
                                    </View>
                                    {!c.in_stock && <Text style={styles.error}>Out of stock</Text>}
                                    {c.in_stock && c.num_items<c.quantity && <Text style={styles.error}>You can't buy {c.quantity}, only {c.num_items} items left instock.</Text>}

                                </View>
                            </View>

                        )
                    })}
                </View>
                    <Text style={styles.subTotal}>SubTotal : {subTotal}</Text>
                <View style={styles.buttonContainer}>
                    {cartItems.length?
                        <Button title='Checkout' onPress={() => this.props.navigation.push('Checkout')}/>
                        :
                        <Button title='Back To Shopping' onPress={() => this.props.navigation.navigate('Products')}/>
                    }

                </View>

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
        marginBottom: 20,
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
    },
    buttonContainer:{
        flex: 1,
        justifyContent: 'center',
        width: '50%',
        alignSelf:'center',
        margin:10,
        position:'relative',
        bottom:0
    },
    subTotal:{
        fontSize:20,
        textAlign:'center',
        margin:10,
        color:colors.primary
    },
    error:{
        color:'orangered',
    }

});

const mapStateToProps = state => ({
    subTotal: CartSelectors.getSubtotal(state),
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
