import React , {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Articles from './projects/Projects';
import Register from './Auth/register/SignUp';
import Login from './Auth/login/Login'
import { getProjects } from '../actions/project';

const App = () => {

    const dispatch = useDispatch();
    const [currentSlug, setCurrentSlug] = useState("");

    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Route component={Articles} path="/home" exact setCurrentSlug={setCurrentSlug}/>
            <Route component={Register} exact path="/register" />
            <Route component={Login} exact path="/login" />
        </BrowserRouter>
    );    
}

export default App;