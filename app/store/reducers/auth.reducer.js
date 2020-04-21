import * as Actions from '../actions/auth.actions';

const INITIAL_STATE = {
    user: null,
    isLoading: true,
    isVerifying: false,
    isOTPSending: false,
    isOTPSent: false,
    isAuthenticated:false,
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Actions.GET_USER_START:
            return state
        case Actions.GET_USER_SUCCESS:
            console.log("auth success")
            return {...state, isLoading: false, user: action.payload.user, isAuthenticated:true}
        case Actions.GET_USER_FAILED:
            return {...state, isLoading: false}

        case Actions.LOGOUT:
            return {...state, user: null, isAuthenticated:false}

        case Actions.SEND_OTP_START:
            return {...state, isOTPSending: true}

        case Actions.SEND_OTP_FAILED:
            return {...state, isOTPSending: false}

        case Actions.SEND_OTP_SUCCESS:
            return {...state, isOTPSent: true, isOTPSending: false}

        case Actions.VERIFY_OTP_START:
            return {...state, isVerifying: true}

        case Actions.VERIFY_OTP_FAILED:
            return {...state, isVerifying: false}

        case Actions.VERIFY_OTP_SUCCESS:
            console.log("verify otp success")
            return {...state, isLoading: false, user: action.payload.user,isOTPSent:false, isAuthenticated:true, isVerifying: false}

        case Actions.UPDATE_ADDRESS:
            return {...state, user: {...state.user, address:action.payload}}
        default:
            return state
    }
}

export default authReducer;




