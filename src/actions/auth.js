import * as api from '../api/index';
import { SIGNUP, LOGIN } from '../constants/actionTypes';

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: SIGNUP, data });
        history.push('/login');
    } catch (e) {
        console.log(e);
    }
}

export const login = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.login(formData);
        dispatch({ type: LOGIN, data});
        history.push('/');
    } catch (e) {
        console.log(e);
    }
}