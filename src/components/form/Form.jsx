import React from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import useStyles from './styles';

const Form = () => {

    const classes = useStyles();

    return (
        <div className={`${classes.center} ${classes.root}`}>
            <form autoComplete="off" noValidate className={classes.form}> 
                <Typography variant="h6">ABOUT PROJECT</Typography>
                <TextField
                    name="title"
                    lable="title"
                    type="text"
                    placeholder="New project title here..."
                    variant="outlined"
                    style={{width: "70ch", marginTop: 50 }}
                    autoFocus
                />
                
                <textarea
                    name="title"
                    lable="title"
                    type="text"
                    variant="outlined"
                    style={{width: "75ch", marginTop: 10, marginBottom: 10, height: "50ch", borderRadius: "7px" }}
                    // inputProps={{
                    //     style: {
                    //         height: "20ch",
                    //         justifyContent: "flex-start",
                    //         textAlign: "start"
                    //     }
                    // }}
                    placeholder="New project title here..."                    
                />
                <Button size="medium" variant="contained" type="submit" color="primary" >Publish</Button>
            </form>
        </div>
    );
}

export default Form;