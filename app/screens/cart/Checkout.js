import React from 'react';
import {StyleSheet, View, Text, ScrollView, TextInput, Picker, KeyboardAvoidingView} from 'react-native';
import colors from "../../configs/colors";
import commons from "../../styles/commons";
import {Button} from "react-native-elements";

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as Actions from '../../store/actions/checkout.actions'
import * as CheckoutSelectors from '../../store/reducers/checkout.reducer'
import {placeOrder} from "../../store/actions/checkout.actions";

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            city: '',
            street: '',
            pincode: '',
        }
    }

    componentDidMount() {
        const {user} = this.props;
        console.log('user')
        console.log(user)
        this.setState({
            city: user.address.cityname,
            fullname: user.fullname,
            street: user.address.street,
            pincode: user.address.pincode
        });
    }


    _updateCity = (city) => {
        this.setState({city:city})
    }

    _updateStreet = (street) => {
        console.log(street)
        this.setState({street:street})
    }
    _updatePincode = (pincode) => {
        this.setState({pincode:pincode})
    }
    _updateFullname = (fullname) => {
        this.setState({fullname:fullname})
    }


    render() {
        const {user, cities, actions, items, subTotal} = this.props;
        return (
            <ScrollView style={commons.container}>
                <Text style={styles.title}>
                    Checkout
                </Text>
                <View style={styles.checkoutContainer}>
                    {items.map(item => {
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
                            Rs. {subTotal}
                        </Text>
                    </View>
                </View>

                <Text style={styles.addressTitle}>
                    Address
                </Text>
                <KeyboardAvoidingView style={styles.addressBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Name"
                        value={this.state.fullname}
                        onChangeText={this._updateFullname}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Mobile Number"
                        value={user.mobile}
                        disableFullscreenUI={true}
                    />
                    <Picker style={styles.input} selectedValue={this.state.city}
                            onValueChange={this._updateCity}>
                        {cities.map(city => (
                            <Picker.Item label={city} value={city}/>
                        ))}
                    </Picker>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Street Address"
                        multiline
                        value={this.state.street}
                        numberOfLines={4}
                        onChangeText={this._updateStreet}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Pincode"
                        value={this.state.pincode}
                        onChangeText={this._updatePincode}
                    />
                </KeyboardAvoidingView>
                <Button onPress={()=>actions.placeOrder(this.state.fullname, this.state.city, this.state.street, this.state.pincode )}
                        title={"Place Order"} titleStyle={{fontSize: 28}} buttonStyle={styles.placeOrderButton}/>

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
    placeOrderButton: {
        height: 48,
        borderRadius: 0,
        backgroundColor: colors.primary,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        padding: 10,
        borderRadius: 12,
    },
    textArea: {
        height: 120
    }
});

const mapStateToProps = state => ({
    items: CheckoutSelectors.getCheckoutItems(state),
    subTotal: CheckoutSelectors.getCheckoutSubtotal(state),
    user: state.auth.user,
    cities: state.checkout.cities,

})
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        placeOrder: Actions.placeOrder
    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);


//todo update cart items on props updates
