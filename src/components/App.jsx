import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from './Home/Home';
import Register from './Auth/register/SignUp';
import Login from './Auth/login/Login'
import Form from './form/Form';
import Details from './ProjectDetails/Details';

const App = () => {

    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <BrowserRouter>
            <Route path="/" exact component={() => <Redirect to="/projects" />} />
            <Route path="/projects" exact  component={ Home } />
            <Route path="/projects/search" component={ Home } />
            <Route path="/projects/:slug" component={ Details } />
            <Route path="/register" exact component={ Register } />
            <Route path="/login" exact component={ () => (!user ? <Login/> : <Redirect to="/projects"/>) } />
            <Route component={ Form } exact path="/create" />
        </BrowserRouter>
    );    
}

export default App;