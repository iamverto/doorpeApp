import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, ScrollView} from 'react-native';
import links from "../../configs/links";
import colors from "../../configs/colors";
import {Button} from "react-native-elements";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.props.navigation.setOptions({
            headerShown: false
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri:links.milk}} resizeMode={"cover"}/>
                <View style={styles.headerBox}>

                </View>
                <Text style={styles.title}>
                    Login
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Mobile Number"
                />
                <Button title={"Login"} titleStyle={{fontSize:20}} buttonStyle={styles.placeOrderButton}/>


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

export default Login;
