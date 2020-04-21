import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions, ScrollView} from 'react-native';
import commons from "../../styles/commons";
import colors from "../../configs/colors";
import Carousel from "react-native-snap-carousel";
import links from "../../configs/links";
import {Badge, Button, Icon} from "react-native-elements";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

import {connect} from 'react-redux';
import * as Actions from '../../store/actions/product.actions';
import {bindActionCreators} from "redux";
import {getProduct} from '../../store/reducers/product.reducer'
import * as CartActions from "../../store/actions/cart.actions";
import * as CartSelectors from "../../store/reducers/cart.reducer";


class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.props.navigation.setOptions({
            headerRight: () => (this._renderCartIcon()),
        });
    }

    componentDidMount() {
        const {actions} = this.props;
        actions.getProduct(this.props.route.params.productId)
    }

    _renderCartIcon = () => {
        const {cartItems} = this.props;

        return (
            <Button
                type='clear'
                icon={
                    <View>
                        <Icon size={32} name='ios-cart' type='ionicon' color='#07c'/>
                        <Badge
                            status="warning"
                            value={cartItems.length}
                            containerStyle={{position: 'absolute', top: -4, right: -4}}
                        />
                    </View>
                }
                onPress={() => this.props.navigation.navigate('Cart')}

            />
        )
    }


    _renderImages = (item) => {
        return <Image
            source={{uri: item.item.pic}}
            style={styles.image}
            resizeMode={"contain"}
        />
    }

    render() {
        const {product} = this.props;
        return (
            <ScrollView style={commons.container}>
                <Text style={[styles.title]}>
                    {product.name}
                </Text>
                <Carousel
                    ref={(c) => {
                        this._carousel = c;
                    }}
                    data={product.product_pics} renderItem={this._renderImages}
                    sliderWidth={width}
                    itemWidth={width - 20}
                    autoplay
                    containerCustomStyle={{maxHeight:height/2}}
                />
                <View style={styles.meta}>
                    <Text style={styles.price}>Rs. {product.current_price}</Text>
                    <Button
                        titleStyle={{color:'#fff'}}
                        onPress={()=>alert("Item has been added to cart.")}
                        buttonStyle={styles.addButton} title={"Add to cart"} icon={<Icon color="#fff" name='add'/>} type='clear'/>
                </View>
                <View style={styles.about}>
                    <Text style={styles.title2}>About</Text>
                    <Text style={styles.aboutText}>
                        {product.description}

                    </Text>
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    backButton:{
        alignSelf:'flex-start',
        marginLeft:10,
    },
    title: {
        fontSize: 24,
        padding: 10,
        fontWeight: '500',
        color: colors.dark
    },
    image: {
        width: "100%",
        height: height / 2,
        borderRadius:12,
    },
    meta: {
        padding:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price: {
        padding: 5,
        paddingLeft: 0,
        fontSize: 24,
        color: colors.primary,
    },
    addButton: {
        padding: 5,
        backgroundColor: colors.primary,
        borderRadius: 100,
    },
    title2:{
      fontSize:20,
      fontWeight: '500',
        color:colors.dark,
        paddingBottom:10,
    },
    about:{
        padding:10,
        borderWidth:1,
        margin:10,
        borderRadius:12,
        borderColor:"#bbb"
    },
    aboutText:{
        fontSize:16,
        color:colors.dark,
        lineHeight:22,
    }

});

const mapStateToProps=(state, props)=>({
    product:getProduct(state, props.route.params.productId),
    cartItems: CartSelectors.getCartItems(state),
})
const mapDispatchToProps = dispatch => ({
    actions:bindActionCreators({
        getProduct:Actions.getProduct,
        addToCart: CartActions.addToCart
    }, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
