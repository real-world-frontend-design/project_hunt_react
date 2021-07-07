import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useStyle from './style';
import { Link } from 'react-router-dom';
import { Typography, Button, TextField } from '@material-ui/core';
import { signup } from '../../../actions/auth';

const initialState = { "username": '', "email": '', "password": '' };

const Register = () => {
    const [form, setForm] = useState(initialState);
    const [isSignUp, setIsSignUp] = useState(true);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyle();

    const handleSubmit = (e) => {
      e.preventDefault();
      
      if(isSignUp) {
        dispatch(signup(form, history));
      }
    }

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <div className={`${classes.center} ${classes.root}`}>
        <form onSubmit={handleSubmit} autoComplete="off" noValidate className={classes.form}>
        <Typography variant="h6" style={{ textAlign: "center" }}>
          Create Your New account
        </Typography>

        <TextField
          name="username"
          label="username"
          type="Text"
          placeholder="Enter Your Name"
          variant="outlined"
          onChange={handleChange}
          autoFocus
        />
         <TextField
          name="email"
          label="Email"
          type="Text"
          placeholder="Enter Your email"
          variant="outlined"
          onChange={handleChange}
        />

        <TextField
          name="password"
          label="Password"
          type="password"
          placeholder="Enter Your password"
          variant="outlined"
          onChange={handleChange}
        />

        <div style={{ position: 'fixed', top: 30, right: 20, border: 0 }}>
        have an account 
        <Link to="/login" style={{ textDecoration: "underline" }}>
          {" "}Login
        </Link>
        </div>

        <Button variant="contained" fullWidth type="submit" color="primary">
          submit
        </Button>
      </form>
    </div>
    );
};

export default Register;