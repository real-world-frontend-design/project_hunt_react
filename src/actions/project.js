import * as api from '../api';
import { FETCH_ALL, CREATE } from '../constants/actionTypes';

export const getProjects = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProjects();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (e) {
        console.log(e);
    }
}

export const createProject = (post, history) => async (dispatch) => {
    try {
        const {data} = await api.postProject(post);
        dispatch({type: CREATE, payload: data});
        history.push('/');
    } catch (e) {
        console.log(e);
    }
}

export const deleteProject = (slug) => async (dispatch) => {
    try {
        await api.deleteProject(slug);
        dispatch({ type: 'DELETE', payload: slug });
    } catch (e) {
        console.log(e);
    }
}