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
            <View style={styles.box}>
                <View>
                    <Image
                        style={styles.image}
                        source={{uri: links.product}}
                        resizeMode='contain'
                    />
                    <Text onPress={()=>goToProduct()} style={styles.title}>
                        MILK for Gaining Weight
                    </Text>

                </View>
                <View style={styles.meta}>
                    <Text style={styles.price}>$799</Text>
                    <Button
                        onPress={()=>addToCart(product.id)}
                        buttonStyle={styles.addButton} icon={<Icon color="#fff" name='add'/>} type='clear'/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        width: '100%',
        flexDirection: 'column',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.primary,
        backgroundColor: "#fff",
        padding: 10,
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
