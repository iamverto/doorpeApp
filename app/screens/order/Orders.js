import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import commons from "../../styles/commons";
import links from "../../configs/links";
import {Badge, Button, Icon} from "react-native-elements";
import colors from "../../configs/colors";

class Orders extends React.Component {
    render() {
        return (
            <ScrollView style={commons.container}>
                <Text style={styles.title}>
                    Your Orders
                </Text>
                <View style={styles.orderContainer}>
                    {[1,2,3,4,5,6,7].map(p=>{
                        return(

                            <View style={styles.orderItem}>
                                <Image
                                    source={{uri:links.product}}
                                    resizeMode={"contain"}
                                    style={styles.image}/>
                                <View style={styles.orderItemMeta}>
                                    <View style={styles.orderItemText}>
                                        <Text style={styles.itemTitle} onPress={()=>this.props.navigation.push('OrderDetail')}>Order #2</Text>
                                        <Text style={styles.itemPrice}>$799</Text>
                                    </View>
                                    <View style={styles.orderItemButtons}>
                                        <Text style={styles.itemQuantity}>3</Text>
                                        <Text style={styles.status}>Dispatched</Text>
                                    </View>
                                </View>
                            </View>

                        )
                    })}
                </View>
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

    orderContainer:{
        flexDirection:'column',
    },
    orderItem:{
        flexDirection: 'row',
        borderTopWidth:1,
        borderColor:colors.primary
    },
    image:{
        width:100,
        height:100,
        borderRadius:12,
        margin:5
    },
    orderItemMeta:{
        padding:5,
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around'

    },
    orderItemText:{
    },
    itemTitle:{
        fontSize:16,
        fontWeight: '500',
        color:colors.dark
    },
    itemPrice:{
        fontSize:16,
        paddingTop: 10,
        fontWeight:'bold'
    },
    orderItemButtons:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingRight: 10,
    },
    itemQuantity:{
        fontSize:18,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:2,
    },
    status:{
        padding:5,
        borderRadius:12,
        backgroundColor: colors.dark,
        color:"#fff",
    },
    itemButton:{
        padding: 0,
        borderRadius: 100,
        backgroundColor:colors.primary
    }

});


export default Orders;
