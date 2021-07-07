import React from 'react';
import useStyle from './style';
import { Link } from 'react-router-dom';
import { Typography, Button, TextField } from '@material-ui/core';

const Login = () => {

    const classes = useStyle();

    return (
        <div className={`${classes.center} ${classes.root}`}>
        <form autoComplete="off" noValidate className={classes.form}>
        <Typography variant="h6" style={{ textAlign: "center" }}>
          Login to continue
        </Typography>
        
        <TextField
          name="Email"
          label="Email"
          type="Email"
          placeholder="Enter your Email"
          variant="outlined"
        />

        <TextField
          name="password"
          label="password"
          type="password"
          placeholder="Enter your password"
          variant="outlined"
        />

        <div style={{ position: 'fixed', top: 30, right: 20, border: 0 }}>
        don't have an account 
        <Link to="/register" style={{ textDecoration: "underline" }}>
          {" "}Register
        </Link>
        </div>

        <Button variant="contained" fullWidth type="submit" color="primary">
          submit
        </Button>
      </form>
    </div>
    );
}

export default Login;