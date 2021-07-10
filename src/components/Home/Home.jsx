import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getProjects } from '../../actions/project';
import { Grow } from '@material-ui/core';
import Projects from '../projects/Projects';

const Home = () => {

    const dispatch = useDispatch();
    const [currentSlug, setCurrentSlug] = useState("");

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
