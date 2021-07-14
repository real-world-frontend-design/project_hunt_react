import React, { useEffect, useState } from 'react'
import Projects from '../projects/Projects';

import { getProjects } from '../../actions/project';
import { useDispatch } from 'react-redux';

import { Grow } from '@material-ui/core';   

const Home = () => {


    const [currentSlug, setCurrentSlug] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjects());
    }, [currentSlug, dispatch]);

    return (
        <Grow in>
            <div>
                <Projects setCurrentSlug={setCurrentSlug}/>
            </div>
            
        </Grow>
    )
}

export default Home
