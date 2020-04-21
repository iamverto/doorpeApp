import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as Actions from '../../store/actions/auth.actions';
import {Text} from "react-native";

class Logout extends React.Component {
    render() {
        const {actions} = this.props;
        actions.logout();
        return (<Text>Logged Out</Text>)

    }
}

const mapDispatchToProps = dispatch => ({
    actions:bindActionCreators({
        logout:Actions.logout
    }, dispatch)
})

export default connect(null, mapDispatchToProps)(Logout);

