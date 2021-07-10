import React, { useEffect, useState } from 'react'
import Projects from '../projects/Projects';

import { getProjects } from '../../actions/project';
import { useDispatch } from 'react-redux';

import { useHistory, useLocation } from 'react-router-dom';
import { Grow, AppBar, TextField, Button } from '@material-ui/core';   
import ChipInput from 'material-ui-chip-input';

import useStyles from './styles';

//url search params
// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }

const Home = () => {


    const [currentSlug, setCurrentSlug] = useState("");
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    // const query = useQuery();
    // const page = query.get('page') || 1;
    // const searchQuery = query.get('searchQuery');


    useEffect(() => {
        dispatch(getProjects());
    }, [currentSlug, dispatch]);


    const searchPost = () => {
        if(search.trim()) {
            //dispatch to fetch projects
        }else{
            history.push('/');              
        }
    }

    const handleKeyPress = (e) => {
        if(e.keyCode === 13) {
            searchPost();
        }
    }
    
    const handleAdd = (tag) => setTags([...tags, tag]);

    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete)); 

    return (
        <Grow in>
            <div>
                <Projects setCurrentSlug={setCurrentSlug}/>
                <AppBar position="static" color="inherit">
                    <TextField
                        name="search"
                        variant="outlined"
                        label="Search"
                        onKeyPress={handleKeyPress}
                        fullWidth
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <ChipInput
                        style={{margin: '10px 0'}}
                        variant="outlined"
                        label="Tags"
                        value={tags}
                        onAdd={handleAdd}
                        onDelete={handleDelete}
                    />
                    <Button onClick={searchPost} className={classes.appBarSearch} variant="contained" color="primary" >Search</Button>                    
                </AppBar>
            </div>
            
        </Grow>
    )
}

export default Home
