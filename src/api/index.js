import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:4000'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Token ${JSON.parse(localStorage.getItem('profile')).token}`;   
    }
    return req;
});

//GET all projects
export const fetchProjects = () => API.get('/projects');

//GET project by slug
export const fetchProject = (slug) => API.get(`/projects/${slug}`);

//POST a project
export const postProject = (newPost) => API.post('/projects/create', newPost);

//DELETE a project
export const deleteProject = (slug) => API.delete(`/projects/delete/${slug}`);

//register a user
export const signUp = (formData) => API.post('/users/register', formData);

//login a user
export const login = (formData) => API.post('/users/login', formData);