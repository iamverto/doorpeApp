import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import FuseSearchBar from "../../components/core/FuseSearchBar";
import commons from "../../styles/commons";
import FilterBar from "../../components/core/FilterBar";
import ProductCard from "../../components/core/ProductCard";
import {Badge, Button, Icon} from "react-native-elements";

import {connect} from 'react-redux';
import * as Actions from '../../store/actions/product.actions';
import * as CartActions from '../../store/actions/cart.actions';
import {bindActionCreators} from "redux";
import * as ProductSelectors from "../../store/reducers/product.reducer";
import * as CartSelectors from "../../store/reducers/cart.reducer";

class Products extends React.Component {

    constructor(props) {
        super(props);
        const {actions} = this.props;
        this.timer = setInterval(()=>{
            actions.getProducts();
            actions.getCartItems();
        }, 100*1000);

        this.props.navigation.setOptions({
            headerRight: () => (this._renderCartIcon()),
            headerLeft: () => (
                <Button
                    type='clear'
                    icon={<Icon size={32} name='ios-menu' type='ionicon' color='#fff'/>}
                    onPress={() => this.props.navigation.toggleDrawer()}
                />
            )
        });
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        this.timer = null;
    }


    _renderCartIcon = () => {
        const {cartItems} = this.props;

        return (
            <Button
                type='clear'
                icon={
                    <View>
                        <Icon size={32} name='ios-cart' type='ionicon' color='#fff'/>
                        <Badge
                            status="warning"
                            value={cartItems.length}
                            containerStyle={{position: 'absolute', top: -4, right: -4}}
                        />
                    </View>
                }
                onPress={() => this.props.navigation.navigate('Cart', {screen:'Cart'})}

            />
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.cartItems.length !== this.props.cartItems.length) {
            this.props.navigation.setOptions({
                headerRight: () => (this._renderCartIcon()),
            });
        }
    }

    componentDidMount() {
        const {products, cartItems, actions} = this.props;
        actions.getProducts();
        actions.getCartItems();
    }

    _goToProduct = (product) => {
        this.props.navigation.push('ProductDetail', {productId:product.id});
    }

    render() {
        const {products, isLoading, cartItems, actions} = this.props;
        return (
            <View style={commons.container}>
                <FuseSearchBar/>
                {isLoading ? <Button loading type='clear'/> :
                    <ScrollView style={styles.productsScrollView}>
                        <View style={styles.products}>
                            {products.map(p => {
                                return (
                                    <View style={styles.product} key={p.id}>
                                        <ProductCard product={p} addToCart={actions.addToCart} goToProduct={this._goToProduct}/>
                                    </View>
                                )
                            })}
                        </View>
                    </ScrollView>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    productsScrollView: {
        flex: 1
    },
    products: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    product: {
        padding: 5,
        width: '50%',
    }
});

const mapStateToProps = state => ({
    products: ProductSelectors.getProducts(state),
    isLoading: state.product.isLoading,
    cartItems: CartSelectors.getCartItems(state),
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getProducts: Actions.getProducts,
        addToCart: CartActions.addToCart,
        getCartItems:CartActions.getCartItems,
    }, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Products);
