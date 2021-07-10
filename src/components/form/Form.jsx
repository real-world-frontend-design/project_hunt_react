import React, { useEffect, useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { createProject } from '../../actions/project';

const initialState = {"title": '', "body": '', "tags": ''};

const Form = ({currentSlug, setCurrentSlug}) => {

    const user = JSON.parse(localStorage.getItem('profile'));
    const [postData, setPostData] = useState(initialState);
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();

    const project = useSelector((state) => currentSlug ? state.projects.find((p) => p.slug === currentSlug): null);

    useEffect(() => {
        if(project) setCurrentSlug(project)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [project]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProject(postData, history));
    }

    const handleChange = (e) => {
        setPostData({ ...postData, [e.target.name]: e.target.value });
      }
    
    if(!user?.username) {
        return(
            <Typography variant="h6" align="center">
                Please login to create a post and like other's post
            </Typography>
        )
    }

    //TODO: make it mobile responsive

    return (
        <div className={`${classes.center} ${classes.root}`}>
            <form autoComplete="off" onSubmit={handleSubmit} noValidate className={classes.form}> 
                <Typography variant="h6">ABOUT PROJECT</Typography>
                <TextField
                    name="title"
                    lable="title"
                    type="text"
                    placeholder="New project title here..."
                    variant="outlined"
                    style={{width: "70ch", marginTop: 50 }}
                    autoFocus
                    onChange={handleChange}
                />
                
                <TextField
                    name="tags"
                    lable="tags"
                    type="text"
                    placeholder="Add upto three tags..."
                    variant="outlined"
                    style={{width: "70ch", marginTop: 50 }}
                    onChange={handleChange}
                />
                
                <textarea
                    name="body"
                    lable="body"
                    type="text"
                    variant="outlined"
                    onChange={handleChange}
                    style={{width: "75ch", marginTop: 10, marginBottom: 10, height: "50ch", borderRadius: "7px" }}
                    placeholder="New project body here..."                    
                />
                <Button size="medium" variant="contained" type="submit" color="primary" >Publish</Button>
            </form>
        </div>
    );
}

export default Form;