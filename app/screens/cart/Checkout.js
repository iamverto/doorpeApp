import React from 'react';
import {StyleSheet, View, Text, ScrollView, TextInput, Picker} from 'react-native';
import colors from "../../configs/colors";
import commons from "../../styles/commons";
import {Button} from "react-native-elements";

class Checkout extends React.Component {
    render() {
        return (
            <ScrollView style={commons.container}>
                <Text style={styles.title}>
                    Checkout
                </Text>
                <View style={styles.checkoutContainer}>
                    {[1,2,3,4,5,6].map(p=>{
                        return (
                            <View style={styles.item}>
                                <Text style={styles.itemTitle}>
                                    Stone breaker for trekking shoes
                                </Text>
                                <Text style={styles.itemMeta}>
                                    $123*23=$323.00
                                </Text>
                            </View>
                        )
                    })}
                    <View style={[styles.item, styles.subtotalBox]}>
                        <Text style={styles.subtitle}>
                            SubTotal
                        </Text>
                        <Text style={styles.subTotal}>
                            $323.00
                        </Text>
                    </View>
                </View>

                <Text style={styles.addressTitle}>
                    Address
                </Text>
                <View style={styles.addressBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Name"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Mobile Number"
                    />
                    <Picker style={styles.input}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Street Address"
                        multiline
                        numberOfLines={4}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Pincode"
                    />
                </View>
                <Button onPress={()=>this.props.navigation.navigate('OrderDetail')} title={"Place Order"} titleStyle={{fontSize:28}} buttonStyle={styles.placeOrderButton}/>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    title:{
        fontWeight: 'bold',
        fontSize: 24,
        padding: 10,
        color: colors.dark,
    },

    checkoutContainer:{
        borderWidth:1,
        margin:10,
        borderColor:"#77d3c390"
    },
    item:{
        padding:10,
        borderBottomWidth:1,
        flexDirection:'row',
        borderColor:"#77d3c360"

    },
    itemTitle:{
        fontSize: 16,
        fontWeight: '400',
        color:colors.dark,
        flex:3,
    },
    itemMeta:{
        flex:1,
        fontSize: 16,
        fontWeight: 'bold',
        color:colors.primary,

    },
    subtotalBox:{
      backgroundColor:"#77d3c320"
    },
    subtitle:{
        fontSize: 16,
        fontWeight: 'bold',
        color:colors.dark,
        flex:3,
    },
    subTotal:{
        flex:1,
        fontSize: 16,
        fontWeight: 'bold',
        color:'orange',
        borderWidth:1,
        padding:10,
        borderRadius:12,
        borderColor:'orangered'

    },
    addressTitle:{
        fontWeight: '400',
        fontSize: 24,
        padding: 10,
        color: colors.dark,
    },
    addressBox:{
        margin:10,
        marginTop:0,
        padding:10,
        borderWidth:1,
        borderColor:"#77d3c390"
    },
    placeOrderButton:{
        height:48,
        borderRadius:0,
        backgroundColor: colors.primary,
    },
    input:{ height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        padding:10,
        borderRadius: 12,
    },
    textArea:{
        height:120
    }
});

export default Checkout;
