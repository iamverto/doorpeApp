import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native';
import links from "../../configs/links";
import colors from "../../configs/colors";
import {Button} from "react-native-elements";

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as Actions from '../../store/actions/auth.actions';



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile:'',
            otp:'',
        }
        this.props.navigation.setOptions({
            headerShown: false
        })
    }

    _changeMobileNumber = num =>{
        this.setState({mobile:num});
        console.log(num);
    }

    _changeOTP = otp =>{
        this.setState({otp:otp});
        console.log(otp)
    }

    render() {
        const {isAuthenticated, isOTPSent, actions, isVerifying, isOTPSending} = this.props;
        if(isAuthenticated===true){
            this.props.navigation.navigate('Home');
        }


        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri:links.milk}} resizeMode={"cover"}/>
                <View style={styles.headerBox}>

                </View>
                <Text style={styles.title}>
                    Login
                </Text>
                {!isOTPSent?
                    <KeyboardAvoidingView>
                        <TextInput
                            style={styles.input}
                            placeholder="Mobile Number"
                            value={this.state.mobile}
                            onChangeText={this._changeMobileNumber}

                        />
                        <Button title={"Send OTP"} loading={isOTPSending} onPress={()=>actions.sendOTP(this.state.mobile)} titleStyle={{fontSize:20}} buttonStyle={styles.placeOrderButton}/>
                    </KeyboardAvoidingView>
                    :
                    <KeyboardAvoidingView>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter OTP"
                            value={this.state.otp}
                            onChangeText={this._changeOTP}
                        />
                        <Button title={"Verify OTP"} loading={isVerifying} onPress={()=>actions.verifyOTP(this.state.mobile, this.state.otp)} titleStyle={{fontSize:20}} buttonStyle={styles.placeOrderButton}/>
                    </KeyboardAvoidingView>
                }



            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#fff"
    },
    image:{
        width:'100%',
        height:'100%',
        position:'absolute',
        top:100,
        opacity: .4
    },
    headerBox:{
        transform: [{ rotate: '-12deg'}],
        height:300,
        width:'105%',
        position: 'absolute',
        backgroundColor: colors.primary,
        opacity:.8,
        top:0,
        marginTop:-180,
        marginLeft:-10,
        borderRadius:60
    },
    title:{
        fontSize:32,
        fontWeight:'500',
        zIndex:99,
        marginBottom:20,
        color:colors.primary
    },
    input:{ height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        padding:10,
        borderRadius: 12,
    },
    placeOrderButton:{
        height:36,
        borderRadius:12,
        marginTop:10,
        backgroundColor: colors.primary,
    }
});

const mapStateToProps = state => ({
    isOTPSent: state.auth.isOTPSent,
    isAuthenticated:state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
    isOTPSending: state.auth.isOTPSending,

})

const mapDispatchToProps = dispatch => ({
    actions:bindActionCreators({
        sendOTP:Actions.sendOTP,
        verifyOTP:Actions.verifyOTP,
    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
