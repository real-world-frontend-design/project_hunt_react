import * as api from '../api/index';

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: 'AUTH', data });
        history.push('/login');
    } catch (e) {
        console.log(e);
    }
}