import { stopSubmit } from "redux-form";
import { authAPI, getAuthMe, securityAPI } from "../api/api";

const SET_USER_DATA = 'social_network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'social_network/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case GET_CAPTCHA_URL_SUCCESS: 
            return {
                ...state,
                captchaUrl: action.url,
            }
        default:
            return state;  
    }
}


export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})
export const getCaptcheUrlSuccess = (url) => ({type: GET_CAPTCHA_URL_SUCCESS, url})

export const getAuthUserDataThunkCreator = () => async (dispatch) => {
    let response = await getAuthMe(); 
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const loginThunkCreator = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator());  
    } else {
        if(response.data.resultCode === 10) {
            dispatch(getCaptchaUrlThunkCreator());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));
    }
}

export const getCaptchaUrlThunkCreator = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptcheUrlSuccess(captchaUrl));
}

export const logoutThunkCreator = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}

export default authReducer;