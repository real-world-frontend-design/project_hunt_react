/* eslint-disable import/no-anonymous-default-export */
import { STOP_LOADING, START_LOADING, FETCH_ALL, FETCH_PROJECT, CREATE, DELETE } from '../constants/actionTypes';
export default (state= {isLoading: true, projects:[]}, action) => {
    switch(action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case STOP_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL:
            return {...state, projects: action.payload.data};
        case CREATE:
            return {...state, projects:[...state.projects, action.payload]};
        // case FETCH_PROJECT:
        //     return [...projects, action.payload.project];
        case DELETE:
        return {...state, projects: state.projects.filter((project) => project.slug !== action.payload)};
        default:
            return state;
    }
}