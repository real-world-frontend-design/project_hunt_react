import * as api from '../api/index';
import { AUTH } from '../constants/actionTypes';

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data });
        history.push('/login');
    } catch (e) {
        console.log(e);
    }
}