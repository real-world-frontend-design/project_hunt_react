import React, { useEffect, useState } from 'react'
import Projects from '../projects/Projects';

import { getProjects } from '../../actions/project';
import { useDispatch } from 'react-redux';

// import { useHistory, useLocation } from 'react-router-dom';
import { Grow, AppBar, TextField, Button } from '@material-ui/core';   
// import ChipInput from 'material-ui-chip-input';

// import useStyles from './styles';

//url search params
// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }

const Home = () => {

    const [search, setSearch] = useState('');
    const [currentSlug, setCurrentSlug] = useState("");
    const dispatch = useDispatch();
    // const classes = useStyles();
    // const history = useHistory();
    // const query = useQuery();
    // const page = query.get('page') || 1;
    // const searchQuery = query.get('searchQuery');


    useEffect(() => {
        dispatch(getProjects());
    }, [currentSlug, dispatch]);

    return (
        <Grow in>
            <div>
                <Projects setCurrentSlug={setCurrentSlug}/>
                <AppBar position="static" color="inherit">
                    <TextField
                        name="search"
                        variant="outlined"
                        label="Search"
                        fullWidth
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </AppBar>
            </div>
            
        </Grow>
    )
}

export default Home
