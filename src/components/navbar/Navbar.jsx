import React, {useState} from 'react';
import { AppBar, Button, TextField } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import useStyle from './styles';

//url search params
// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }

const Navbar = () => {
    
    const [search, setSearch] = useState('');
    const classes = useStyle();
    const history = useHistory();

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

    return (
        <AppBar position="static" color="inherit" className={classes.appBar}>
            <Link to="/">
            <h1>Project</h1>
            

            </Link>
            <TextField
                className={classes.toolbar}    
                name="search"
                variant="outlined"
                label="search"
                onKeyPress={handleKeyPress}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            
            <Button style={{background: '#00FF00'}}>
                Create Post
            </Button>
        </AppBar>
    );
}
export default Navbar;