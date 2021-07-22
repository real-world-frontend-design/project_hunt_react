/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ALL, FETCH_PROJECT, CREATE, DELETE } from '../constants/actionTypes';
export default (projects= [], action) => {
    switch(action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...projects, action.payload];
        case FETCH_PROJECT:
            return [...projects, action.payload.project];
        case DELETE:
        return projects.filter((project) => project.slug !== action.payload);
        default:
            return projects;
    }
}