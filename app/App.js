import * as React from 'react';
import Router from "./Router";
import {typography} from "./configs/typography";
import {Provider} from "react-redux";
import ConfigureStore from "./store";
import axios from 'axios';
import {API_BASE_URL} from "./api/constants";

const store = ConfigureStore();
import FlashMessage from "react-native-flash-message";

export default () => {
    axios.defaults.baseURL = API_BASE_URL;
    typography();
    return (
        <Provider store={store}>
            <Router/>
            <FlashMessage
                style={{
                    margin:0,
                    padding:0,
                    alignItems:'center'
                }}
                floating icon='auto' titleStyle={{fontSize: 18}} position='top'/>
        </Provider>
    )
}

