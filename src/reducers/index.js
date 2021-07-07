import { combineReducers } from 'redux';

import projects from './project';
import auth from './auth';

export default combineReducers({
    projects,
    auth
});