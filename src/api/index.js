import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:4000'});

//GET articles
export const fetchProjects = () => API.get('/projects');

//POST article
export const postArticle = (newPost) => API.post('/projects', newPost);