/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ALL, FETCH_PROJECT, CREATE, DELETE } from '../constants/actionTypes';
export default (state = {projects: []}, action) => {
    switch(action.type) {
        case FETCH_ALL:
            return action.payload;
        case FETCH_PROJECT:
            return { ...state, project: action.payload };
        case CREATE:
            return { ...state, projects: [...state.projects, action.payload] };
        case DELETE:
            return { ...state, projects: state.filter((project) => project.slug !== action.payload) }
        default:
            return state;
    }
}    