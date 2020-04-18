import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import colors from "../../configs/colors";

class OrderDetail extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>
                    Order Summary
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
                <View style={styles.addressBox}>
                    <Text style={styles.addName}>Priyanshu Kumar</Text>
                    <Text style={styles.addMobile}>9876554324</Text>
                    <Text style={styles.addCity}>Jalandhar</Text>
                    <Text style={styles.addPincode}>897987</Text>
                    <Text style={styles.addStreet}>Bh1, Lovely Professional University</Text>
                </View>
                <Text style={styles.status}>
                    Dispatched
                </Text>
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
    addName:{
        fontSize:20,
        fontWeight:'400'
    },
    addMobile:{
        fontSize:20,
        fontWeight:'300',
    },
    addCity:{
        fontSize:20,
        fontWeight:'300',
    },
    addStreet:{
        fontSize:20,
        fontWeight:'300',
    },
    addPincode:{
        fontSize:20,
        fontWeight:'400',
    },
    status:{
        fontSize:20,
        padding:10,
        backgroundColor: colors.dark,
        color:"#fff",
        textAlign:'center',
        borderRadius: 12,
    }
});

export default OrderDetail;
