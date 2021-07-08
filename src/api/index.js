import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:4000'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Token ${JSON.parse(localStorage.getItem('profile')).token}`;   
    }
    return req;
});

//GET articles
export const fetchProjects = () => API.get('/projects');

//POST article
export const postProject = (newPost) => API.post('/projects/create', newPost);

//register a user
export const signUp = (formData) => API.post('/users/register', formData);

//login a user
export const login = (formData) => API.post('/users/login', formData);