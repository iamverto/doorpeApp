import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import commons from "../../styles/commons";
import links from "../../configs/links";
import {Badge, Button, Icon} from "react-native-elements";
import colors from "../../configs/colors";


import {connect} from 'react-redux';
import * as Actions from '../../store/actions/order.actions';
import {bindActionCreators} from "redux";
import {getOrder, getOrdersList} from '../../store/reducers/order.reducer';
import {or} from "react-native-reanimated";


class Orders extends React.Component {
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
        const {actions} = this.props;
        actions.getOrders();

    }


    render() {
        const {orders, actions} = this.props;
        return (
            <ScrollView style={commons.container}>
                <View style={styles.orderContainer}>
                    {orders.map(order => {
                        return (

                            <View style={styles.orderItem}>
                                {/*<Image*/}
                                {/*    source={{uri: links.product}}*/}
                                {/*    resizeMode={"contain"}*/}
                                {/*    style={styles.image}/>*/}
                                <View style={styles.orderItemMeta}>
                                    <View style={styles.orderItemText}>
                                        <Text style={styles.itemTitle}
                                              onPress={() => this.props.navigation.push('OrderDetail', {orderId: (order.id)})}>Order
                                            #{order.id}</Text>
                                        <Text style={styles.itemPrice}>Rs. {order.amount}</Text>
                                    </View>
                                    <View style={styles.orderItemButtons}>
                                        <Text style={styles.itemQuantity}> </Text>
                                        <Text style={styles.status}>{order.status}</Text>
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
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        padding: 10,
        color: colors.dark,
    },

    orderContainer: {
        flexDirection: 'column',
    },
    orderItem: {
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
    orderItemMeta: {
        padding: 5,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'

    },
    orderItemText: {},
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
    orderItemButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10,
    },
    itemQuantity: {
        fontSize: 18,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 2,
    },
    status: {
        padding: 5,
        borderRadius: 12,
        backgroundColor: colors.dark,
        color: "#fff",
    },
    itemButton: {
        padding: 0,
        borderRadius: 100,
        backgroundColor: colors.primary
    }

});

const mapStateToProps = state => ({
    orders: getOrdersList(state),
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getOrders: Actions.getOrders
    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
