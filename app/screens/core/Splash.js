import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import colors from "../../configs/colors";
import links from "../../configs/links";

import {connect} from 'react-redux';
import * as Actions from '../../store/actions/auth.actions';
import {bindActionCreators} from "redux";

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {actions ,isLoading} = this.props;
        actions.getUser();

    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: links.milk}} resizeMode={"cover"}/>
                <View style={styles.headerBox}>

                </View>
                <Text style={styles.title}>
                    Milk Store
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff"
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 100,
        opacity: .4
    },
    headerBox: {
        transform: [{rotate: '-12deg'}],
        height: 300,
        width: '105%',
        position: 'absolute',
        backgroundColor: colors.primary,
        opacity: .8,
        top: 0,
        marginTop: -180,
        marginLeft: -10,
        borderRadius: 60
    },
    title: {
        fontSize: 56,
        fontWeight: 'bold',
        transform: [{rotate: '-12deg'}],
        color: colors.primary
    }
});

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading,
})
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getUser: Actions.getUser,
    }, dispatch)
})

export default connect(null, mapDispatchToProps)(Splash);
