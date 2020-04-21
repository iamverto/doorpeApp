import React from 'react';
import {View, StyleSheet, Image, Text} from "react-native";
import {Button, Icon, SearchBar} from "react-native-elements";
import colors from "../../configs/colors";
import links from "../../configs/links";


class ProductCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {goToProduct, addToCart, product} = this.props;

        return (
            <View>
                {!product.in_stock && (
                    <View style={[styles.box,styles.overlay]}>
                        <Text style={{textAlign:'center'}}>Out of stock</Text>
                    </View>
                )}
                <View style={styles.box}>

                    <View>
                        {product.product_pics.length>0 && (
                            <Image
                                style={styles.image}
                                source={{uri: product.product_pics[0].pic}}
                                resizeMode='contain'
                            />

                        )}
                        <Text onPress={() => goToProduct(product)} style={styles.title}>
                            {product.name}
                        </Text>

                    </View>
                    <View style={styles.meta}>
                        <Text style={styles.price}>Rs. {product.current_price}</Text>
                        <Button
                            onPress={() => addToCart(product.id)}
                            buttonStyle={styles.addButton} icon={<Icon size={28} color="#fff" name='add'/>} type='clear'/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        position: 'absolute',
        zIndex: 44,
        width: '100%',
        height: '100%',
        borderColor: "#eee",
        backgroundColor: "#fff",
        opacity:.7

    },

    box: {
        width: '100%',
        flexDirection: 'column',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#0077cc30",
        backgroundColor: "#ffffff",
        padding: 10,
        elevation:5,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        // boxShadow: "0px 0px 3px 3px #77d3c330",
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 12,
    },
    title: {
        fontWeight: '500',
        fontSize: 16,
        color: colors.dark,
        paddingTop: 5,
        paddingBottom: 5,
    },
    meta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price: {
        padding: 5,
        paddingLeft: 0,
        color: colors.primary,
    },
    addButton: {
        padding: 0,
        backgroundColor: colors.primary,
        borderRadius: 100,
    }


})

export default ProductCard;
