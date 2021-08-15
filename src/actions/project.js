import * as api from '../api';
import { START_LOADING, STOP_LOADING, FETCH_ALL, CREATE, FETCH_PROJECT } from '../constants/actionTypes';

export const getProjects = () => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const { data } = await api.fetchProjects();
        dispatch({ type: FETCH_ALL, payload: data });
        dispatch({ type: STOP_LOADING });
    } catch (e) {
        console.log(e);
    }
}

export const getProject = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchProject(id);
        dispatch({ type: FETCH_PROJECT, payload: data });        
    } catch (e) {
        console.log(e);
    }
}

export const createProject = (post, history) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
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