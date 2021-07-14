import { SIGNUP, LOGIN, LOGOUT } from '../constants/actionTypes';
const authReducer = (state = { authData: null }, action) => {
    switch(action.type) {
        case SIGNUP: 
          return { ...state, authData: action?.data, errors: null };
        case LOGIN: 
          localStorage.setItem('profile', JSON.stringify({ ...action?.data}));
          return { ...state, authData: action?.data, errors: null };
        case LOGOUT:
          localStorage.clear();
        // eslint-disable-next-line no-fallthrough
        default:
            return state;
    }
}

export default authReducer;