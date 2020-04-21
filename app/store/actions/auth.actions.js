import {AsyncStorage} from "react-native";
import axios from 'axios';
import {API_BASE_URL} from "../../api/constants";

export const GET_USER_START = "[ AUTH ] GET USER START"; // loading
export const GET_USER_SUCCESS = "[ AUTH ] GET USER SUCCESS";  // login success
export const GET_USER_FAILED = "[ AUTH ] GET USER FAILED";  // login req

export const SEND_OTP_START = "[AUTH] SEND OTP START";
export const SEND_OTP_FAILED = "[AUTH] SEND OTP FAILED";
export const SEND_OTP_SUCCESS = "[AUTH] SEND OTP SUCCESS";

export const VERIFY_OTP_START = "[AUTH] VERIFY OTP START";
export const VERIFY_OTP_FAILED = "[AUTH] VERIFY OTP FAILED";  // stay
export const VERIFY_OTP_SUCCESS = "[AUTH] VERIFY OTP SUCCESS";  // login

export const LOGOUT = "[AUTH] LOGOUT";
export const UPDATE_ADDRESS = "[AUTH] UPDATE ADDRESS";

export const getUser = () => {
    return async dispatch => {
        dispatch({
            type: GET_USER_START,
        })
        let token = await AsyncStorage.getItem('FuseAuthToken');
        console.log(token)
        // token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6Ijk1MjE3NTIwODYiLCJleHAiOjE1ODgwMTcxNzEsImVtYWlsIjoiZG9vcnBheTk4NzY1NDMyMUBkb29ycGF5LmNvbSJ9.6_0FuUKF4813WT5uH5kG441VsqQEESR8511dsUmYI6s";
        if (token) {
            // set header
            axios.defaults.headers.common['Authorization'] = "Bearer " + token;
            axios.get(API_BASE_URL + 'auth/user')
                .then(res => {
                    console.log(res.data)
                    AsyncStorage.setItem('FuseAuthToken', res.data.token);
                    dispatch({
                        type: GET_USER_SUCCESS,
                        payload: res.data
                    })
                })
                .catch(err => {
                    AsyncStorage.removeItem('FuseAuthToken');
                    console.log(err)
                    dispatch({
                        type: GET_USER_FAILED,
                    })
                });
        } else {
            return dispatch({
                type: GET_USER_FAILED,
            })
        }

    }

    // return user
    // return
}

export const sendOTP = (mobile) => {
    return dispatch => {
        console.log('---')
        dispatch({
            type: SEND_OTP_START,
        })
        axios.post(API_BASE_URL + 'auth/login', {
            mobile: mobile
        })
            .then(res => {
                return dispatch({
                    type: SEND_OTP_SUCCESS,
                })
            })
            .catch(err => {
                return dispatch({
                    type: SEND_OTP_FAILED,
                })
            });

    }
}

export const verifyOTP = (mobile, otp) => {
    return async dispatch => {
        dispatch({
            type: VERIFY_OTP_START
        })

        axios.post(API_BASE_URL + 'auth/verify-otp', {
            mobile: mobile,
            otp: otp,
        }).then(res => {
            AsyncStorage.setItem('FuseAuthToken', res.data.access_token);
            axios.defaults.headers.common['Authorization'] = "Bearer " + res.data.access_token;
            console.log(res.data)
            return dispatch({
                type: VERIFY_OTP_SUCCESS,
                payload: res.data
            })
        }).catch(err => {
            console.log(err)
            return dispatch({
                type: VERIFY_OTP_FAILED,
            })
        });
    }
}

export const logout = () => {
    return async dispatch => {
        await AsyncStorage.removeItem('FuseAuthToken');
        return dispatch({
            type: LOGOUT,
        })
    }
}

export const updateAddress = (city, street, pincode) => {
    return dispatch({
        type:UPDATE_ADDRESS,
        payload:{city:city, street:street, pincode:pincode}
    })
}
