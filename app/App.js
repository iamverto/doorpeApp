import * as React from 'react';
import Router from "./Router";
import {typography} from "./configs/typography";
import {Provider} from "react-redux";
import ConfigureStore from "./store";

const store=ConfigureStore();

export default () => {
    typography();
    return (
        <Provider store={store}>
            <Router/>
        </Provider>
        )
}

