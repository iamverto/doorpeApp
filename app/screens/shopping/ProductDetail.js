import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions, ScrollView} from 'react-native';
import commons from "../../styles/commons";
import colors from "../../configs/colors";
import Carousel from "react-native-snap-carousel";
import links from "../../configs/links";
import {Button, Icon} from "react-native-elements";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class ProductDetail extends React.Component {

    _renderImages = (item) => {
        return <Image
            source={{uri: links.product}}
            style={styles.image}
            resizeMode={"contain"}
        />
    }

    render() {
        return (
            <ScrollView style={commons.container}>
                <Text style={[styles.title]}>
                    StoneBreaker shoes for trekking purposes
                </Text>
                <Carousel
                    ref={(c) => {
                        this._carousel = c;
                    }}
                    data={[1, 2, 3, 4, 5]} renderItem={this._renderImages}
                    sliderWidth={width}
                    itemWidth={width - 20}
                    autoplay
                    containerCustomStyle={{maxHeight:height/2}}
                />
                <View style={styles.meta}>
                    <Text style={styles.price}>$799</Text>
                    <Button
                        titleStyle={{color:'#fff'}}
                        onPress={()=>alert("Item has been added to cart.")}
                        buttonStyle={styles.addButton} title={"Add to cart"} icon={<Icon color="#fff" name='add'/>} type='clear'/>
                </View>
                <View style={styles.about}>
                    <Text style={styles.title2}>About</Text>
                    <Text style={styles.aboutText}>
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus
                        Bonorum et Malorum for use in a type specimen book.

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
        borderColor:colors.dark
    },
    aboutText:{
        fontSize:16,
        color:colors.dark,
        lineHeight:22,
    }

});

export default ProductDetail;
