import React, {useState, useEffect} from 'react';
import { AppBar, Avatar, Button, TextField } from '@material-ui/core';
import { useHistory, useLocation, Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import useStyle from './styles';

import * as actionType from '../../constants/actionTypes';
import decode from 'jwt-decode';

//url search params
// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }

const Navbar = () => {
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [search, setSearch] = useState('');
    const classes = useStyle();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const Logout = () => {
        dispatch({type: 'LOGOUT'});

        history.push('/register');

        setUser(null);
    };


    useEffect(() => {
    const token = user?.token;

    if(token) {
        const decodedToken = decode(token);
        
        if(decodedToken.exp * 1000 < new Date().getTime()) Logout();    
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

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
            {/* <div>

            {user ?(
                <Button style={{background: '#00FF00'}}>
                Create Post
                </Button>
            <div>
                <Avatar className={classes.avatar}/>
            </div>    
            ) : (
                <Button component = {Link} to="/register" variant="contained" >Sign In</Button>
            )}
            </div> */}

            {user ?( 
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center",}}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                    
                    
                    <Avatar size="small"  alt={user?.result?.name || user?.username?.charAt(0)} src={user?.result?.imageUrl || user?.username?.charAt(0)}>{user?.result?.name?.charAt(0) || user?.profile?.username?.charAt(0)}</Avatar>

                    <div style={{margin:"2.5px 4px auto"}}>
                    
                        {/* <Typography variant="h6">{user.name}</Typography> */}
                        </div>
                        <Button variant="contained" size="small" style={{background:"#00FF00"}}>
                            <Link to="/create">
                                create
                            </Link>
                        </Button>
                        <Button variant="contained" size="small" color="secondary" onClick={Logout}>Logout</Button>
                    </div>
                    </div>
            
            ) : ( 
                <Button component = {Link} to="/register" variant="contained" >Sign In</Button>
            )}

            
        </AppBar>
    );
}
export default Navbar;