import React , {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import Articles from './projects/Projects';
import { getProjects } from '../actions/project';

const App = () => {

    const dispatch = useDispatch();
    const [currentSlug, setCurrentSlug] = useState("");

    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch])

    return (
        <BrowserRouter>
            <Route component={Articles} path="/" exact setCurrentSlug={setCurrentSlug}/>
        </BrowserRouter>
    );    
}

export default App;