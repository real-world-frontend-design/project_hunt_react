import React , { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Articles from './projects/Projects';
import Register from './Auth/register/SignUp';
import Login from './Auth/login/Login'
import Form from './form/Form';
import Details from './ProjectDetails/Details';
import { getProjects } from '../actions/project';

const App = () => {

    const user = JSON.parse(localStorage.getItem('profile'));

    const dispatch = useDispatch();
    const [, setCurrentSlug] = useState("");

    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);

    //:TODO: Don't use setcurrentslug here do it in a separate component
    return (
        <BrowserRouter>
            <Route path="/" exact component={() => <Redirect to="/projects" />} />
            <Route path="/projects" exact  component={ Articles } setCurrentSlug={setCurrentSlug}/>
            <Route path="/projects/search" component={ Articles } />
            <Route path="/projects/:slug" component={ Details } />
            <Route path="/register" exact component={ Register } />
            <Route path="/login" exact component={ () => (!user ? <Login/> : <Redirect to="/projects"/>) } />
            <Route component={ Form } exact path="/create" />
        </BrowserRouter>
    );    
}

export default App;