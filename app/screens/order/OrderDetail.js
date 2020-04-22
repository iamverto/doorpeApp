import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import colors from "../../configs/colors";

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as Actions from '../../store/actions/order.actions';
import {getOrder} from '../../store/reducers/order.reducer';

class OrderDetail extends React.Component {

    componentDidMount() {
        const {actions, order, user} = this.props;
        actions.getOrderDetail(order.id);
        console.log(user);

    }

    render() {
        const {actions, order, user} = this.props;
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>
                    Order Summary #{order.id}
                </Text>
                <View style={styles.checkoutContainer}>
                    {order.order_items.map(item => {
                        return (
                            <View style={styles.item}>
                                <Text style={styles.itemTitle}>
                                    {item.title}
                                </Text>
                                <Text style={styles.itemMeta}>
                                    Rs. {item.price} x {item.quantity} = Rs. {item.price*item.quantity}
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
                    <Text style={styles.addName}>{user.fullname}</Text>
                    <Text style={styles.addMobile}>{user.mobile}</Text>
                    <Text style={styles.addCity}>{order.address.cityname}</Text>
                    <Text style={styles.addPincode}>{order.address.pincode}</Text>
                    <Text style={styles.addStreet}>{order.address.street}</Text>
                </View>
                <Text style={styles.status}>
                    {order.status}
                </Text>
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

    checkoutContainer: {
        borderWidth: 1,
        margin: 10,
        borderColor: "#77d3c390"
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        flexDirection: 'row',
        borderColor: "#77d3c360"

    },
    itemTitle: {
        fontSize: 16,
        fontWeight: '400',
        color: colors.dark,
        flex: 3,
    },
    itemMeta: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.primary,

    },
    subtotalBox: {
        backgroundColor: "#77d3c320"
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.dark,
        flex: 3,
    },
    subTotal: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'orange',
        borderWidth: 1,
        padding: 10,
        borderRadius: 12,
        borderColor: 'orangered'

    },
    addressTitle: {
        fontWeight: '400',
        fontSize: 24,
        padding: 10,
        color: colors.dark,
    },
    addressBox: {
        margin: 10,
        marginTop: 0,
        padding: 10,
        borderWidth: 1,
        borderColor: "#77d3c390"
    },
    addName: {
        fontSize: 20,
        fontWeight: '400'
    },
    addMobile: {
        fontSize: 20,
        fontWeight: '300',
    },
    addCity: {
        fontSize: 20,
        fontWeight: '300',
    },
    addStreet: {
        fontSize: 20,
        fontWeight: '300',
    },
    addPincode: {
        fontSize: 20,
        fontWeight: '400',
    },
    status: {
        fontSize: 20,
        padding: 10,
        backgroundColor: colors.dark,
        color: "#fff",
        textAlign: 'center',
        borderRadius: 12,
    }
});

const mapStateToProps = (state, props) => ({
    order: getOrder(state, props.route.params.orderId),
    user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getOrderDetail: Actions.getOrderDetail,
    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
